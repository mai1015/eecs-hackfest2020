import consts from '../Const/Const'
const option = consts.fetchoption.getoptions;

const myFetch = (query) =>{
  return new Promise((resolve, reject) => {
    fetch(query,option).then(res => {
      resolve(res);
    }).catch(reject)
  })
}

export default myFetch;