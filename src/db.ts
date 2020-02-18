import * as sqlite from 'sqlite'

let db = null;

async function getDB() {
    if (!db) {
        return await initDB();
    }
    return db;
}

async function initDB() {
    db = await sqlite.open('../db/data.sqlite');
    return db;
}

export default { initDB, getDB};
