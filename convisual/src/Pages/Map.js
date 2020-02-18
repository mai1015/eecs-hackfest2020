import React from 'react';
import { Row, Col } from 'antd';
import ReactEcharts from 'echarts-for-react';
import echart_gl from 'echarts-gl';
import echarts from 'echarts'
import consts from '../Const/Const'
import mapFetch from '../Utils/Fetcher'
import china from '../Maps/china.json'

echarts.registerMap('china',china);

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