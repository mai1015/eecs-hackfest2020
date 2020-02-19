import { Database } from 'sqlite'
import { getDB } from "../db";

const cState ='SELECT * FROM COUNTRY WHERE name = ?'
const pState = 'SELECT * FROM province WHERE cid = ? AND name = ?'
const iState = 'INSERT INTO province (name, cid) VALUES (?, ?)'
const insertStat = 'INSERT INTO covid_data (country, province, confirmed, death, recovered, updated_at) VALUES (?, ?, ?, ?, ?, ?)'

let cCache : {[key: string]: number} = {
    'Ivory Coast': 29
};
let pCache : {[key: string]: number} = {
    '': -1
};

export interface CovState {
    id?:number;
    country: number;
    state: number;
    confirmed: number;
    deaths: number;
    recovered: number;
    updated_at: number;
}

export interface CovStateDTO {
    id?:number;
    country: string;
    state: string;
    lastUpdate: Date;
    confirmed: number;
    deaths: number;
    recovered: number;
}

export function getCov() {
    return getDB().all('SELECT cd.* ' +
        'FROM covid_data cd INNER JOIN (SELECT id, MAX(updated_at) t FROM covid_data GROUP BY country, province) late ' +
        'ON cd.id = late.id AND cd.updated_at = late.t ORDER BY cd.updated_at DESC')
}

export function saveCov(data: CovStateDTO[]): Promise<number> {
    return new Promise<number>(async (resolve, reject) => {
        const db = getDB()
        const cS = await db.prepare(cState);
        const pS = await db.prepare(pState);
        const ipS = await db.prepare(iState);
        const iS = await db.prepare(insertStat)

        for (let d of data) {
            let c = -1, p: number | null = -1;
            if (cCache.hasOwnProperty(d.country))
                c = cCache[d.country];
            else {
                let cr = await cS.get(d.country);
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
                let pr = await pS.get(c, d.state);
                if (pr)
                    p = pr.id;
                else {
                    await ipS.run(d.state, c).then(r => {
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

            await iS.run(c, p, d.confirmed, d.deaths, d.recovered, d.lastUpdate.toISOString()).then(r => {
                console.log('inserted '+ r.lastID + ': ' + d.state);
            }).catch(r => {
                console.log(r);
                console.log(d);
            });
        }
    });
}
