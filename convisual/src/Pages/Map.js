import React from "react";
import { Row, Col, Button } from "antd";
// import ReactEcharts from "echarts-for-react";
// import echart_gl from "echarts-gl";
// import echarts from "echarts";
import consts from "../Const/Const";
import mapFetch from "../Utils/Fetcher";
import Maps from "../Maps/Map";
import ChartContainer from "./EchartContainer";
import './Map.scss'
//echarts.registerMap("na", Maps.Oceania);

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      current:"china",
    };
  }

  handleClick = e => {
    
    this.setState({
      current: e.target.getAttribute("data")
    });
  };
  

  render() {
    console.log(this.state.current);
    return (
      <div>
        <div className="MapContainer">
          <div className="3dMap">
            <div className="buttons">
              <Row  type="flex" justify="center" align="middle">
                <Col span={3}>
                  <Button block data="China" onClick={e=>this.handleClick(e)}>China</Button>
                </Col>
                <Col span={3} > 
                  <Button block data="UsaCanada" onClick={e=>this.handleClick(e)}>USA and Canada</Button>
                </Col>
                <Col span={3}> 
                  <Button block data="Asia" onClick={e=>this.handleClick(e)}>Asia</Button>
                  </Col>
                <Col span={3}> 
                  <Button block data="NorthAmerica" onClick={e=>this.handleClick(e)}>NorthAmerica</Button>
                  </Col>
                  <Col span={3}> 
                  <Button block  data="Europe" onClick={e=>this.handleClick(e)}>Europe</Button>
                  </Col>
                <Col span={3} > 
                  <Button block data="SouthAmerica" onClick={e=>this.handleClick(e)}>SouthAmerica</Button>
                  </Col>
                <Col span={3}> 
                  <Button block data="Africa" onClick={e=>this.handleClick(e)}>Africa</Button>
                  </Col>
                <Col span={3}> 
                  <Button block data="Oceania" onClick={e=>this.handleClick(e)}>Oceania</Button>
                  </Col>
                <ChartContainer className = "chart"/>
              </Row>
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
