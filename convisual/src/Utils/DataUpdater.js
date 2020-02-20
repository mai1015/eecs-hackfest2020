import consts from "../Const/Const";
import Fetcher from "./Fetcher";



const query = consts.queries;
const updater = (graphType, contentName, optionFile) => {
  switch (graphType) {
    case "geo3d":
      return geo3dUpdater(contentName, optionFile);
      break;
    case "scatter":
      return scatterUpdater(contentName, optionFile);
      break;
    case "axis":
      return axisUpdater(contentName, optionFile);
      break;
    default:
      return {};
  }
  return null;
};

const geo3dUpdater = (contentName, optionFile) => {
  if (contentName === "UsaCanada") {
    return new Promise((resolve, reject) => {
      Promise.all([Fetcher(query.QueryLatest.Usa), Fetcher(query.QueryLatest.Canada)])
        .then(async r => {
          let newOption = { ...optionFile };
          let newItem = newOption.series[0];
          let newData = []
          for(let item of await r[0].json()){
              newData.push(item)
          }
          for(let item of await r[1].json()){
            newData.push(item)
        }
        //   let newData = [...r[0], ...r[1]];

          newItem.data = newData;
          console.log("newData: $o",newData)
          newOption.series[0].data = newItem.data;
          console.log("newoption: $o",newOption)
          resolve(newOption);
        })
        .catch(reject);
    });
  } else {
    return new Promise((resolve, reject) => {
      Fetcher(query.QueryLatest[contentName])
        .then(r=> r.json())
        .then(r => {
          let newOption = { ...optionFile };
          let newItem = newOption.series[0];
          let newData = [...r];

          newItem.data = newData;

          newOption.series[0].data = newItem.data;
          
          resolve(newOption);
        })
        .catch(reject);
    });
  }
};

const scatterUpdater = (contentName, optionFile) => {return new Promise(resolve => resolve(consts.sc))};

const axisUpdater = (contentName, optionFile) => {return new Promise(resolve => resolve(consts.axis))};

export default updater;
