import React from 'react';
import { Row, Col } from 'antd';
import ReactEcharts from 'echarts-for-react';
import echart_gl from 'echarts-gl';
import echarts from 'echarts'
import consts from '../Const/Const'
import mapFetch from '../Utils/Fetcher'
import China from 'echarts/map/json/china'
// import China from '../Maps/china'
import Canada from '../Maps/newCanada'
import USA from '../Maps/USA'
import NorthAmerica from '../Maps/northamerica.geo'
import usacanada from '../Maps/usacanada'
//echarts.registerMap('china',china);nn
echarts.registerMap('na',usacanada);


consts.gl.geo3D.environment = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0, color: '#333' // 天空颜色
  }, {
    offset: 0.7, color: '#333' // 地面颜色
  }, {
    offset: 1, color: '#333' // 地面颜色
  }], false)



class Map extends React.Component {
 
    
    render(){
        return(
            <div>
                <ReactEcharts
                    option = {consts.gl}
                    style={{height: '800px'}}
                />
            </div>
        )
    }
}

export default Map;