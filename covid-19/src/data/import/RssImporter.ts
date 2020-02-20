import Importer from "./Importer";
import {NewsDTO} from "../model/News";
import * as Parser from 'rss-parser'

export default class RssImporter implements Importer<NewsDTO> {
    private parser: Parser

    constructor(private url: string) {
        this.parser = new Parser();
    }

    getData(): Promise<NewsDTO[]> {
        return new Promise<NewsDTO[]>((resolve, reject) => {
            let ret: NewsDTO[] = [];
            this.parser.parseURL(this.url).then(d => {
                for (let n of d.items) {
                    ret.push({
                        guid: n.guid,
                        title: n.title,
                        author: n.creator,
                        url: n.link,
                        date: new Date(n.pubDate),
                        cover: n.enclosure ? n.enclosure.url : undefined,
                        content: n.contentSnippet
                    })
                }
                resolve(ret)
            }).catch(reject)
        })
    }

}
