import Importer from './data/import/CSSEGithubCsvImporter'
import {formatDate, formatDateString} from './utils'
import Config from "./data/Config";

const config = new Config('github.json')
const d = config.get()
const dd = new Date(d.lastUpdate)

const im = new Importer()
im.getData(formatDateString(d.lastUpdate)).then(r => {
    console.log(r)
    dd.setDate(dd.getDate() + 1)
    d.lastUpdate = dd
    config.save(d)
}).catch(e => {
    console.error(e)
})
