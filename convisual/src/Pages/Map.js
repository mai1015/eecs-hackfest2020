import React from 'react';
import { Row, Col } from 'antd';
import ReactEcharts from 'echarts-for-react';
import echart_gl from 'echarts-gl';
import echarts from 'echarts'
import consts from '../Const/Const'
import mapFetch from '../Utils/Fetcher'
// import china from 'echarts/map/json/china'
import china from '../Maps/china'
echarts.registerMap('china',china);

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
                    style={{height: '600px'}}
                />
            </div>
        )
    }
}

export default Map;