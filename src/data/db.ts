import * as sqlite from 'sqlite'
import * as path from 'path';

const dbPath = path.resolve(__dirname, '../../db/data.sqlite');
let db:sqlite.Database = null;

function getDB(): sqlite.Database {
    console.assert(db, 'db not initialized');
    return db;
}

function initDB() {
    return new Promise<sqlite.Database>(resolve => {
        sqlite.open(dbPath).then(cdb => {
            db = cdb;
            resolve(db);
        })
    });
}

export { initDB, getDB };
