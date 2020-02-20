import * as path from "path";
import * as fs from "fs";
export default class Config {
    constructor(private name: string) {
    }

    get() {
        const data = fs.readFileSync(path.resolve(__dirname, '../../config/' + this.name));
        return JSON.parse(data.toString());
    }

    save(f) {
        fs.writeFileSync(path.resolve(__dirname, '../../config/' + this.name),
            JSON.stringify(f))
    }
}
