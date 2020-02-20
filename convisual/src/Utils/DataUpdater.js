import consts from "../Const/Const";
import Fetcher from "./Fetcher";
const query = consts.queries;
const updater = (graphType, contentName, optionFile) => {
  switch (grpahType) {
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
};

geo3dUpdater = (contentName, optionFile) => {
  if (contentName === "UsaCanada") {
    return new Promise((resolve, reject) => {
      Promise.all([Fetcher(query.Usa), Fetcher(query.Canada)])
        .then(r => {
          let newOption = { ...optionFile };
          let newItem = newOption.series[0];
          let newData = [...r[0], ...r[1]];

          newItem.data = newData;

          newOption.series[0] = newItem.data;
          resolve(newOption);
        })
        .catch(reject);
    });
  } else {
    return new Promise((resolve, reject) => {
      Fetcher(query[contentName])
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

scatterUpdater = (contentName, optionFile) => {};

axisUpdater = (contentName, optionFile) => {};

export default Updater;
