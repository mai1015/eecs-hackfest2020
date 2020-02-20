import { Router } from 'express';
import { getDB } from "../data/db";
import { CovState } from "../data/model/CovState";
import { TimeSeries } from "../data/dto/Series";
import {Plot} from "../data/dto/Plot";
import {generateTimeSeries} from "../data/utils";
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
    if (req.query.c) {

    }
    db.all('SELECT cd.* ' +
        'FROM covid_data cd INNER JOIN (SELECT id, MAX(updated_at) t FROM covid_data GROUP BY country, province) late ' +
        'ON cd.id = late.id AND cd.updated_at = late.t ORDER BY cd.updated_at DESC')
        .then(r => res.json(r))
});

router.get('/latest/:country', (req, res) => {
    const db = getDB();
    db.all(`SELECT pp.name name, pp.lat lat, pp.lng lng, confirmed, recovered, updated_at FROM ((covid_data cd
        INNER JOIN (SELECT id, MAX(updated_at) t FROM covid_data GROUP BY country, province) late ON cd.id = late.id) rs
        INNER JOIN (SELECT id cid, name FROM country WHERE code='${req.params.country}') cc ON cc.cid = rs.country)
        INNER JOIN province pp ON pp.id == province`).then(r => {
        if (req.query.t && req.query.t === 'bar') {
            let ret = {
                names:[],
                series: [{
                    name: 'Confirmed',
                    type: 'bar',
                    data: []
                }, {
                    name: 'Cured',
                    type: 'bar',
                    data: []
                }]
            }

            for (let i of r) {
                ret.names.push(i.name)
                ret.series[0].data.push(i.confirmed)
                ret.series[1].data.push(i.recovered)
            }
            res.json(ret)
        } else {
            let ret: Plot[] = []
            for (let i of r) {
                ret.push({
                    name: i.name,
                    value: [i.lng, i.lat, i.confirmed]
                })
            }
            res.json(ret)
        }
    })
})

router.get('/series/:country', (req, res) => {
    const db = getDB();
    db.all(`SELECT cc.name, pp.name, confirmed, death, recovered, updated_at FROM ((covid_data cd
            INNER JOIN (SELECT id cid, name FROM country WHERE code='${req.params.country}') cc ON cc.cid = cd.country)
            INNER JOIN province pp ON pp.id == province) ORDER BY pp.name ASC, updated_at ASC`).then(r => {
        if (r.length === 0) {
            res.status(404).json({'msg': 'not found'}).end()
        }
        let series: TimeSeries[] = []

        for (let i = 0; i < r.length; i++) {
            let cur = r[i].name
            let s: any[] = []
            while (i < r.length && r[i].name === cur) {
                s.push(r[i])
                i++;
            }
            series.push(generateTimeSeries(cur, s))
        }
        res.json(series)
    })
})

router.get('/series/:country/:prov', (req, res) => {
    const db = getDB();
    db.all(`SELECT confirmed, death, recovered, updated_at FROM ((covid_data cd
                INNER JOIN (SELECT id cid FROM country WHERE code='${req.params.country}') cc ON cc.cid = cd.country)
                INNER JOIN province pp ON pp.id == province)
                WHERE pp.name='${req.params.prov}'
                group by updated_at`).then(r => {
        if (r.length === 0) {
            res.status(404).json({'msg': 'not found'}).end()
        }

        let series = generateTimeSeries(req.params.prov + ',' +req.params.country, r)
        res.json(series)
    })
})

router.get('/series', (req, res) => {
    if (req.query.c) {
        console.log(req.query.c)
        const db = getDB()
        db.all(`SELECT sum(confirmed) confirmed, sum(death) death, sum(recovered) recovered, updated_at FROM (covid_data cd
                INNER JOIN (SELECT id cid FROM country WHERE continent='${req.query.c}') cc ON cc.cid = cd.country)
                group by updated_at`).then(r => {
            let series = generateTimeSeries(req.query.c, r)
            res.json(series)
        })
    } else if (req.query.ct)  {
        const db = getDB()
        db.all(`SELECT sum(confirmed) confirmed, sum(death) death, sum(recovered) recovered, updated_at FROM (covid_data cd
                INNER JOIN (SELECT id cid FROM country WHERE code='${req.query.ct}') cc ON cc.cid = cd.country)
                group by updated_at`).then(r => {
            let series = generateTimeSeries(req.query.c, r)
            res.json(series)
        })
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
