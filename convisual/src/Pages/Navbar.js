import React from "react";
//import './Navbar.scss'
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
        <Menu mode="horizontal">
          <Menu.Item key="Main">
            <Link to="/">
              <a>Main</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="Map">
            <Link to="/map">
              <a>Map</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="Advice">
            <Link to="/advice">
              <a>Advice</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="News">
            <Link to="/news">
              <a>News</a>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
