import consts from '../Const/Const'
const option = consts.fetchoption.getoptions;

const myFetch = (query) =>{
    fetch(query,option)
    .then(res => {
      //console.log(res)
      return res.json()
    })
}

export default myFetch;