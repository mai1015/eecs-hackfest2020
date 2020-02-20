import { Router } from 'express';
import { getDB } from "../data/db";
import {CovState} from "../data/model/CovState";
const router = Router();

router.get('/country',(req, res) => {
   const db = getDB();
   db.all('SELECT * FROM country').then(r => {
       res.json(r);
   });
});

router.get('/province', (req, res) => {
   const db = getDB();
   db.all('SELECT p.id pid, p.cid cid, p.name pname FROM province p').then(r => {
       res.json(r);
   });
});

router.get('/latest', (req, res) => {
    const db = getDB();
    db.all('SELECT cd.* ' +
        'FROM covid_data cd INNER JOIN (SELECT id, MAX(updated_at) t FROM covid_data GROUP BY country, province) late ' +
        'ON cd.id = late.id AND cd.updated_at = late.t ORDER BY cd.updated_at DESC')
        .then(r => res.json(r))

});

router.get('/series/:country/', (req, res) => {
    const db = getDB();
    db.all('')
})

router.get('/series/:country/:prov', (req, res) => {

})

router.post('/series', async (req, res) => {
    if (req.body.list && req.body.list.length > 0) {
        let sql = 'SELECT * FROM country WHERE '
        for (let c of req.body.list) {
            sql += `code='${c}' or `
        }
        const db = getDB()
        // const ret = await db.all()
    } else {
        res.json({})
    }
})
router.get('/news', (req, res) => {
    const db = getDB();
    db.all('SELECT * FROM news').then(r => {
        res.json(r);
    })
});

export default router;
