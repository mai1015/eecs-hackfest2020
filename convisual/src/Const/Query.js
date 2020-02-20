const BaseQuery = "http://localhost:8000/"

const Query = {
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

export default Query