import exp = require("constants");
import {getDB} from "../db";

export interface News {
    id: number;
    guid: string;
    title: string;
    author: string;
    url: string;
    cover: string;
    date: Date;
    content: string;
}

export interface NewsDTO {
    guid: string;
    title: string;
    author?: string;
    url?: string;
    cover?: string;
    date?: Date;
    content: string;
}

const insertStatement = 'INSERT INTO news (title, author, url, cover, date, content, guid) VALUES (?,?,?,?,?,?,?)'

export function save(data: NewsDTO[]): Promise<number> {
    return new Promise<number>(async (resolve) => {
        const db = getDB()
        const iS = await db.prepare(insertStatement)

        let count = 0;
        for (let one of data) {
            iS.run(one.title, one.author, one.url, one.cover, one.date.toISOString(), one.content, one.guid).then(r => {
                console.log('inserted '+ r.lastID + ': '+ one.title)
                count++
            }).catch(e => {
                console.error(e)
                console.error(one.guid)
            })
        }
        resolve(count)
    });
}
