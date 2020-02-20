import RssImporter from "./data/import/RssImporter";

const keywords = ['COVID', 'coronavirus', 'Wuhan', ['China', 'virus'], 'Diamond Princess']
// const rss = new RssImporter('https://rss.cbc.ca/lineup/health.xml')
// const rss = new RssImporter('https://globalnews.ca/health/feed/')
// const rss = new RssImporter('http://www.ctvnews.ca/rss/Health')
// const rss = new RssImporter('http://feeds.foxnews.com/foxnews/health')
// const rss = new RssImporter('https://news.ontario.ca/newsroom/en/rss/allnews.rss')
const rss = new RssImporter('http://ontarionewswatch.com/rss.php')
rss.getData().then(r => {
    console.log(r)
})
