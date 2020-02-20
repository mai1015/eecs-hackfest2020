import consts from '../Const/Const'
import Fetcher from "./Fetcher"

const updater = (graphType,contentName,optionFile)=>{
    switch(grpahType){
        case "geo3d":
            return geo3dUpdater(contentName,optionFile)
            break;
        case "scatter":
            return scatterUpdater(contentName,optionFile) 
            break;
        case "axis":
            return axisUpdater(contentName,optionFile)
            break;
        default:
            return {}
    }
}

geo3dUpdater = (contentName,optionFile)=>{

}

scatterUpdater = (contentName,optionFile)=>{

}

axisUpdater = (contentName,optionFile)=>{

}




export default Updater;