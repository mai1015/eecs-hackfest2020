import RssImporter from "./data/import/RssImporter";
import {NewsDTO, save} from "./data/model/News";
import {initDB} from "./data/db";

const keywords = ['COVID', 'coronavirus', 'Wuhan', ['China', 'virus'], 'Diamond Princess']

function matchNews(news: NewsDTO): boolean {
    for (let k of keywords) {
        if (Array.isArray(k)) {
            let count = 0;
            for (let o of k) {
                if (news.title.includes(o) || news.content.includes(o))
                    count++
            }
            if (count === k.length) return true
        } else {
            if (news.title.includes(k) || news.content.includes(k))
                return true
        }
    }
    return false
}

const url = [
    'https://rss.cbc.ca/lineup/health.xml',
    'https://globalnews.ca/health/feed/',
    'http://www.ctvnews.ca/rss/Health',
    'http://feeds.foxnews.com/foxnews/health',
    'https://news.ontario.ca/newsroom/en/rss/allnews.rss',
    'http://ontarionewswatch.com/rss.php'
]
initDB().then(db => {
    for (let u of url) {
        const rss = new RssImporter(u)
        rss.getData().then(r => {
            let items: NewsDTO[] = []
            for (let d of r) {
                if (matchNews(d)) items.push(d)
            }

            save(items).then(rs => {
                console.log('Added: '+ rs)
            })
        })
    }
})
