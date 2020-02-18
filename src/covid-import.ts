import {initDB} from './db';
import axios from 'axios';

let url = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/02-17-2020.csv';

interface CovState {
    country: string;
    state: string;
    lastUpdate: Date;
    confirmed: number;
    deaths: number;
    recovered: number;
}

const cMapper: {[key: string]: string} = {
    'Mainland China': 'China',
    'Taiwan': 'China',
    'Macau': 'China',
    'Hong Kong': 'China',
    'US': 'United States of America',
    'UK': 'United Kingdom',
    'Others': 'Other'
};
const sMapper: {[key: string]: string} = {
    'Mainland China': 'China'
};

let data: CovState[] = [];

axios.get<string>(url).then(value => {
    // console.log(value.data)
    const lines = value.data.split('\n');
    // console.log(lines.length);
    for (let i = 1; i < lines.length; i++) {
        if (lines[i].length < 6) continue;
        let one = lines[i].split(',');
        if (one[0].startsWith('"')) {
            let name = one[0].replace(/"/g,'');
            let i = 1;
            while (!one[i].endsWith('"')) {
                name += one[i];
                i++;
            }
            name += one[i].replace(/"/g,'');
            one = [name, ...one.slice(i + 1)]
        }
        // console.log(one);
        let date: Date;
        if (one[2].indexOf('/')!== -1 ){
            const dt = one[2].split(' ');
            const dd = dt[0].split('/');
            const tt = dt[1].split(':');
            date = new Date(parseInt(dd[2]),
                parseInt(dd[0]) - 1,
                parseInt(dd[1]),
                parseInt(tt[0]),
                parseInt(tt[1]),
                0,0);
        } else {
            date = new Date(one[2]);
        }

        data.push({
            country: cMapper.hasOwnProperty(one[1]) ? cMapper[one[1]] : one[1].trim(),
            state: sMapper.hasOwnProperty(one[0]) ? cMapper[one[0]] : one[0].trim(),
            lastUpdate: date,
            confirmed: one[3] === '' ? 0 : parseInt(one[3]),
            deaths: one[4] === '' ? 0 : parseInt(one[4]),
            recovered: one[5] === '' ? 0 : parseInt(one[5])
        });
    }
    // console.log(data.length);
    initDB().then(async db => {
        let cCache : {[key: string]: number} = {
            'Ivory Coast': 29
        };
        let pCache : {[key: string]: number} = {
            '': -1
        };

        const cState = await db.prepare('SELECT * FROM COUNTRY WHERE name = ?');
        const pState = await db.prepare('SELECT * FROM province WHERE cid = ? AND name = ?');
        const iState = await db.prepare('INSERT INTO province (name, cid) VALUES (?, ?)');
        const insertStat = await db.prepare('INSERT INTO covid_data (country, province, confirmed, death, recovered, updated_at) VALUES (?, ?, ?, ?, ?, ?);')
        for (let d of data) {
            let c = -1, p: number | null = -1;
            if (cCache.hasOwnProperty(d.country))
                c = cCache[d.country];
            else {
                let cr = await cState.get(d.country);
                if (cr)
                    c = cr.id;
                else {
                    console.log('not found');
                    console.log(d);
                    continue;
                }
            }
            if (pCache.hasOwnProperty(d.state))
                p = pCache[d.state];
            else {
                let pr = await pState.get(c, d.state);
                if (pr)
                    p = pr.id;
                else {
                    await iState.run(d.state, c).then(r => {
                        p = r.lastID;
                        console.log('inserted prov');
                    }).catch(r => {
                        console.log('insert failed');
                        console.log(d);
                    });
                }
            }
            // console.log(c + ' ' + p);

            if (p === -1) {
                p = null;
            }

            await insertStat.run(c, p, d.confirmed, d.deaths, d.recovered, d.lastUpdate.toISOString()).then(r => {
                console.log('inserted '+ r.lastID + ': ' + d.state);
            }).catch(r => {
                console.log(r);
                console.log(d);
            });
        }
    });
});


