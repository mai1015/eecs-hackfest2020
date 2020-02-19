import Importer from "./Importer";
import News from "../model/News";

export default class RssImporter implements Importer<News> {
    constructor(private url: string) {
    }

    getData(): Promise<News[]> {
        return undefined;
    }

}
