import React from 'react';
import { Row, Col } from 'antd';
import ReactEcharts from 'echarts-for-react';
import echart_gl from 'echarts-gl';
import echarts from 'echarts'
import consts from '../Const/Const'
import mapFetch from '../Utils/Fetcher'
import Maps from '../Maps/Map'
import PropTypes from 'prop-types';
import { bind, clear } from 'size-sensor';
import './Map.scss'

class ChartContainer extends React.Component {
  constructor(props){
    console.log(props)
    super(props)
    this.echartsLib = echarts; // the echarts object.
    this.echartsElement = null; // echarts div element
    this.echarObj = null;
    
    this.state = {
      content: props.content
    }
  }
    // first add
    componentDidMount() {
      this.rerender();
    }

    componentWillUpdate() {
      
      this.rerender();
    }

    componentWillReceiveProps(){
      this.rerender();
    }

    componentWillMount(){
      echarts.registerMap(this.props.content, Maps[this.props.content]);
    }


    componentWillUnmount() {
      this.dispose();
    }
    dispose = () => {
      if (this.echartsElement) {
        try {
          clear(this.echartsElement);
        } catch (e) {
          console.warn(e);
        }
        // dispose echarts instance
        this.echartsLib.dispose(this.echartsElement);
      }
    };
  // switchComponent(e){
  //    if(e === "geo3d"){
  //      return <ReactEcharts
  //      option = {consts.gl}
  //      style={{height:600,width:1024}}
  //       />
  //    }else if(e === ""){

  //    }
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps)
  //   let gl = {...this.state.gl}
  //   gl.geo3D.map = nextProps.content
  //   this.setState({content: nextProps.content, gl});
  // }
  rerender(){
         console.log(this.props.content)
        
         const echartObj = this.renderEchartDom();
         if (this.echartsElement) {
          bind(this.echartsElement, () => {
            try {
              echartObj.resize();
            } catch (e) {
              console.warn(e);
            }
          });
        }
      }
    
    getEchartsInstance = () => this.echartsLib.getInstanceByDom(this.echartsElement) ||
      this.echartsLib.init(this.echartsElement, this.props.theme, this.props.opts);

      // render the dom
  renderEchartDom = () => {
    // init the echart object
    let gl = {...consts.gl}
    gl.geo3D.map = this.props.content
    console.log(this.props)
    
    const echartObj = this.getEchartsInstance();
    
    // set the echart option
    // echartObj.setOption(gl, this.props.notMerge || true, this.props.lazyUpdate || false);
    echartObj.setOption({}, true, false);
    echartObj.setOption(gl, true, false);
    // set loading mask
    if (this.props.showLoading) echartObj.showLoading(this.props.loadingOption || null);
    else echartObj.hideLoading();

    return echartObj;
  };

  render() {
    const { style, className } = this.props;
    const newStyle = {
      height: 600,
      width: 1080,
      ...style,
    };
   
    // for render
    return (
      <div
        ref={(e) => { this.echartsElement = e; }}
        style={newStyle}
        className={`${className}`}
      />
    );
  }
}

ChartContainer.propTypes = {
  option: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  echarts: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  notMerge: PropTypes.bool,
  lazyUpdate: PropTypes.bool,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  className: PropTypes.string,
  theme: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  onChartReady: PropTypes.func,
  showLoading: PropTypes.bool,
  loadingOption: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  onEvents: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  opts: PropTypes.shape({
    devicePixelRatio: PropTypes.number,
    renderer: PropTypes.oneOf(['canvas', 'svg']),
    width: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([null, undefined, 'auto'])
    ]),
    height: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([null, undefined, 'auto'])
    ]),
  }),
  shouldSetOption: PropTypes.func,
};

ChartContainer.defaultProps = {
  echarts: {},
  notMerge: true,
  lazyUpdate: false,
  style: {},
  className: '',
  theme: null,
  onChartReady: () => {},
  showLoading: false,
  loadingOption: null,
  onEvents: {},
  opts: {},
  shouldSetOption: () => true,
};

export default ChartContainer;



