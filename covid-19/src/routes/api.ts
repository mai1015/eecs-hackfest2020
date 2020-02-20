import { Router } from 'express';
import { getDB } from "../data/db";
import {CovState} from "../data/model/CovState";
import {TimeSeries} from "../data/dto/Series";
import {Plot} from "../data/dto/Plot";
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

router.get('/latest/:country', (req, res) => {
    const db = getDB();
    db.all(`SELECT pp.name name, pp.lat lat, pp.lng lng, confirmed, updated_at FROM ((covid_data cd
        INNER JOIN (SELECT id, MAX(updated_at) t FROM covid_data GROUP BY country, province) late ON cd.id = late.id) rs
        INNER JOIN (SELECT id cid, name FROM country WHERE code='${req.params.country}') cc ON cc.cid = rs.country)
        INNER JOIN province pp ON pp.id == province`).then(r => {
        let ret: Plot[] = []
        for (let i of r) {
            ret.push({
                name: i.name,
                value: [i.lng, i.lat, i.confirmed]
            })
        }
        res.json(ret)
    })
})

router.get('/series/:country', (req, res) => {
    const db = getDB();
    db.all(`SELECT pp.name, confirmed, death, recovered, updated_at FROM ((covid_data cd
                INNER JOIN (SELECT id cid FROM country WHERE code='${req.params.country}') cc ON cc.cid = cd.country)
                INNER JOIN province pp ON pp.id == province)
                group by updated_at`).then(r => {
        res.json(r)
    })
})

router.get('/series/:country/:prov', (req, res) => {

})

router.get('/series', (req, res) => {
    if (req.query.c) {
        console.log(req.query.c)
        const db = getDB()
        db.all(`SELECT sum(confirmed) confirmed, sum(death) death, sum(recovered) recovered, updated_at FROM (covid_data cd
                INNER JOIN (SELECT id cid FROM country WHERE continent='${req.query.c}') cc ON cc.cid = cd.country)
                group by updated_at`).then(r => {
            let series: TimeSeries = {
                time: [], series: [{
                        name: 'confirmed',
                        type: 'line',
                        data: []
                    }, {
                        name: 'death',
                        type: 'line',
                        data: []
                    }, {
                        name: 'recovered',
                        type: 'line',
                        data: []
                    }]}
            for (let i of r) {
                series.time.push(i.updated_at)
                series.series[0].data.push(i.confirmed)
                series.series[1].data.push(i.death)
                series.series[2].data.push(i.recovered)
            }
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
