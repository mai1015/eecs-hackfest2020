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
      Promise.all([Fetcher(query.Usa), Fetcher(query.Canada)])
        .then(r=>[r.json(), r.json()])
        .then(r => {
          let newOption = { ...optionFile };
          let newItem = newOption.series[0];
          let newData = [...r[0].series, ...r[1].series];

          newItem.data = newData;

          newOption.series[0] = newItem.data;
          resolve(newOption);
        })
        .catch(reject);
    });
  } else {
    return new Promise((resolve, reject) => {
      Fetcher(query[contentName])
        .then(r=> r.json())
        .then(r => {
          let newOption = { ...optionFile };
          let newItem = newOption.series[0];
          let newData = [...r];

          newItem.data = newData;

          newOption.series[0] = newItem.data;
          resolve(newOption);
        })
        .catch(reject);
    });
  }
};

const scatterUpdater = (contentName, optionFile) => {return new Promise(resolve => resolve(consts.scatter))};

const axisUpdater = (contentName, optionFile) => {return new Promise(resolve => resolve(consts.axis))};

export default updater;
