import React from "react";
import { Row, Col, Button } from "antd";
import ReactEcharts from "echarts-for-react";
import echart_gl from "echarts-gl";
import echarts from "echarts";
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
      current:"China"
    };
  }

  handleClick = e => {
    const current = e.target.getAttribute("data")
    this.setState({
      current: current
    });
  };

  render() {
    console.log("tets"+consts.axis);
    echarts.registerMap(this.state.current,Maps[this.state.current]);
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
                  {/* <ReactEcharts
                    option = {this.state.gl}
                    style={{height:600,width:1024}}
                    shouldSetOption={this.shouldSetOption}
                  /> */}
                  <ChartContainer type={"geo3d"} content={this.state.current} options={consts.gl} className="3dmap" style={{width:1920,height:700 }}/>
                  <ChartContainer type={"scatter"} content={""} options={consts.sc} className="scattermap" style={{ width: 600, height:500 }}/>
                  <ChartContainer type={"axis"} content={""} options={consts.axis} className="axismap" style={{ width: 500, height:500 }}/>
              </Row>
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
