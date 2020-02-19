import Importer from './data/import/CSSEGithubCsvImporter'

new Importer().getData().then(r => {console.log(r)})
