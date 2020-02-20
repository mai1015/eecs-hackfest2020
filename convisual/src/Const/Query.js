const BaseQuery = "localhost:8000/"

const QuerySeries = {
    China:BaseQuery+"api/series/CN",
    Usa:BaseQuery+"api/series/US",
    Canada:BaseQuery+"api/series/CA",
    Asia:BaseQuery+"api/series?c=AS",
    Europe:BaseQuery+"api/series?c=EU",
    NorthAmerica:BaseQuery+"api/series?c=NA",
    SouthAmerica:BaseQuery+"api/series?c=SA",
    Africa:BaseQuery+"api/series?c=AF",
    Oceania:BaseQuery+"api/series?c=OC",

}


const QueryLatest = {
    China:BaseQuery+"api/latest/CN",
    Usa:BaseQuery+"api/latest/US",
    Canada:BaseQuery+"api/latest/CA",
    Asia:BaseQuery+"api/latest?c=AS",
    Europe:BaseQuery+"api/latest?c=EU",
    NorthAmerica:BaseQuery+"api/latest?c=NA",
    SouthAmerica:BaseQuery+"api/latest?c=SA",
    Africa:BaseQuery+"api/latest?c=AF",
    Oceania:BaseQuery+"api/latest?c=OC",

}

export default Query