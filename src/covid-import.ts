import Importer from './data/import/CSSEGithubCsvImporter'
import {formatDate, formatDateString} from './utils'
import Config from "./data/Config";
import * as CovState from './data/model/CovState'
import {initDB} from "./data/db";

initDB().then(async db => {
    const config = new Config('github.json')
    const d = config.get()
    const dd = new Date(d.lastUpdate)

    const im = new Importer()
    await im.getData(formatDateString(d.lastUpdate)).then(async r => {
        dd.setDate(dd.getDate() + 1)
        d.lastUpdate = dd
        console.log(d)
        config.save(d)
        await CovState.saveCov(r)
    }).catch(e => {
        console.error(e)
    })
});
