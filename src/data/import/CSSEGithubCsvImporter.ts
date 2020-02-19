import GithubImporter from "./GithubImporter";
import { CovState } from "../model/CovState";
import Importer from "./Importer";
import Config from "../Config";
import axios from 'axios';

export default class CSSEGithubCsvImporter implements Importer<CovState> {
    private github = new GithubImporter('CSSEGISandData', 'COVID-19')
    private config: Config;

    private cMapper: {[key: string]: string} = {
        'Mainland China': 'China',
        'Taiwan': 'China',
        'Macau': 'China',
        'Hong Kong': 'China',
        'US': 'United States of America',
        'UK': 'United Kingdom',
        'Others': 'Other'
    };
    private sMapper: {[key: string]: string} = {
        'Mainland China': 'China'
    };

    constructor() {
        this.config = new Config('github.json')
    }

    formatDate(date: Date) {
        let ret = []
        ret.push(date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
        ret.push(date.getDate() + 1 < 10 ? '0' + (date.getDate() + 1) : date.getDate() + 1)
        ret.push(date.getFullYear())
        return ret.join('-')
    }

    parseData(d: string): CovState[] {
        let data: CovState[] = [];
        const lines = d.split('\n');
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
                country: this.cMapper.hasOwnProperty(one[1]) ? this.cMapper[one[1]] : one[1].trim(),
                state: this.sMapper.hasOwnProperty(one[0]) ? this.sMapper[one[0]] : one[0].trim(),
                lastUpdate: date,
                confirmed: one[3] === '' ? 0 : parseInt(one[3]),
                deaths: one[4] === '' ? 0 : parseInt(one[4]),
                recovered: one[5] === '' ? 0 : parseInt(one[5])
            });
        }
        return data;
    }

    getData(): Promise<CovState[]> {
        return new Promise<CovState[]>((resolve, reject) => {
            const cf = this.config.get()

            let date: Date;
            if (cf.lastUpdate) {
                date = new Date(cf.lastUpdate)
            } else {
                date = new Date()
                date.setDate(date.getDate() - 1)
            }
            const file = this.formatDate(date)
            this.github.getFile(`csse_covid_19_data/csse_covid_19_daily_reports/${file}.csv`).then(d => {
                axios.get<string>(d.download_url).then(rd => {
                    date.setDate(date.getDate() + 1)
                    cf.lastUpdate = date
                    this.config.save(cf)
                    resolve(this.parseData(rd.data))
                }).catch(reject)
            }).catch(reject)
        });
    }

}
