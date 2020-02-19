import React from "react";
import './Navbar.scss'
import { Row, Col, Menu, Icon } from "antd";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  state = {
    current: "Main"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div>
        <Menu className = 'nvbar' mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]} style={{ height : 70}}>
          <Menu.Item key="Main" className = 'main'>
            <Link className = 'text1' to="/">
              <Icon type="home" />
              Main Page
            </Link>
          </Menu.Item>
          <Menu.Item key="Map" className = 'map' >
            <Link className = 'text1' to="/map">
              <Icon type="global" />
              Infection Map
            </Link>
          </Menu.Item>
          <Menu.Item key="Advice" className = 'advice'>
            <Link className = 'text1' to="/advice">
            <Icon type="file-text" />
              Details & Advice
            </Link>
          </Menu.Item>
          <Menu.Item key="News" className = 'news'>
            <Link className = 'text1' to="/news">
              <Icon type="read" />
              Latest News
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
