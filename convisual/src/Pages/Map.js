import React from 'react';
import { Row, Col } from 'antd';
import ReactEcharts from 'echarts-for-react';
import consts from '../Const/Const'

class Map extends React.Component {

    

    render(){
        return(
            <div>
                <ReactEcharts
                    option = {consts.gl}
                />
            </div>
        )
    }
}

export default Map;