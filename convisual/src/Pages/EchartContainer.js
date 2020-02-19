import React from 'react';
import { Row, Col } from 'antd';
import ReactEcharts from 'echarts-for-react';
import echart_gl from 'echarts-gl';
import echarts from 'echarts'
import consts from '../Const/Const'
import mapFetch from '../Utils/Fetcher'
import Maps from '../Maps/Map'
import './Map.scss'
echarts.registerMap("na", Maps.Oceania);

class ChartContainer extends React.Component {
    render(){
        
          return(
              <div>
                <div className = "chart">
                  <ReactEcharts
                      option = {consts.gl}
                      style={{height:600,width:1024}}
                  />
                </div>
              </div>
          )
      }
}

export default ChartContainer;

