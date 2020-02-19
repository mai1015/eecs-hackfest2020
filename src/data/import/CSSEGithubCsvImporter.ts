import GithubImporter from "./GithubImporter";
import { CovStateDTO } from "../model/CovState";
import Importer from "./Importer";
import axios from 'axios';
import {formatDate} from "../../utils";

export default class CSSEGithubCsvImporter implements Importer<CovStateDTO> {
    private github = new GithubImporter('CSSEGISandData', 'COVID-19')

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

    parseData(d: string, dd?: Date): CovStateDTO[] {
        let data: CovStateDTO[] = [];
        const lines = d.split('\n');
        for (let i = 1; i < lines.length; i++) {
            if (lines[i].length < 6) continue;
            let one = lines[i].trim().split(',');
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
            // let date: Date;
            // if (one[2].indexOf('/')!== -1 ){
            //     const dt = one[2].split(' ');
            //     const dd = dt[0].split('/');
            //     const tt = dt[1].split(':');
            //     date = new Date(parseInt(dd[2]),
            //         parseInt(dd[0]) - 1,
            //         parseInt(dd[1]),
            //         parseInt(tt[0]),
            //         parseInt(tt[1]),
            //         0,0);
            // } else {
            //     date = new Date(one[2]);
            // }

            data.push({
                country: this.cMapper.hasOwnProperty(one[1]) ? this.cMapper[one[1]] : one[1].trim(),
                state: this.sMapper.hasOwnProperty(one[0]) ? this.sMapper[one[0]] : one[0].trim(),
                lastUpdate: dd,// || date,
                confirmed: one[3] === '' ? 0 : parseInt(one[3]),
                deaths: one[4] === '' ? 0 : parseInt(one[4]),
                recovered: one[5] === '' ? 0 : parseInt(one[5])
            });
        }
        return data;
    }

    getData(p?: string): Promise<CovStateDTO[]> {
        return new Promise<CovStateDTO[]>((resolve, reject) => {
            this.github.getFile(`csse_covid_19_data/csse_covid_19_daily_reports/${p}.csv`).then(d => {
                axios.get<string>(d.download_url).then(rd => {
                    resolve(this.parseData(rd.data, formatDate(p)))
                }).catch(reject)
            }).catch(reject)
        });
    }

}
