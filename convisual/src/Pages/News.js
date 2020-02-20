import React from "react";
import { Row, Col, Carousel, Card } from "antd";
import axios from "axios";
import "./News.scss";
import imgHolder from "../img/unknow.png";
import QueueAnim from "rc-queue-anim";

class News extends React.Component {
  state = {
    news: null
  };

  componentWillMount() {
    axios.get("http://localhost:8000/api/news").then(r => {
      this.setState({
        news: r.data
      });
    });
  }

  render() {
    return this.state.news ? (
        <QueueAnim delay={300} className="queue-simple">
        <div key="ani1">
        <Row type="flex" justify="space-between" align="middle" key="ani1">
      
      {this.state.news.map((ele, idx) => (
        <Col span={6}>
          <Card
          style={{ width: "25em", height: "35em", marginTop:"4em", marginLeft:"1.5em"}}
          hoverable
          extra={<a href='ele.url'>Read More</a>}
          cover={
            <img
              alt="cover"
              src={
                ele.cover
                  ? ele.cover
                  : imgHolder
              }
              onError={e => {
                e.target.onError = null;
                e.target.src = imgHolder;
              }}
              style={{ maxwidth: 200, maxHeight:240 }}
            />
          }
        >
          {console.log(ele)}
          <Card.Meta
            title={ele.title}
            description={
              <div>
                <h4 style={{ color: "#e77641" }}>
                </h4>
                <hr />
                <p>[{ele.date}] {ele.content}</p>
              </div>
            }
          />
        </Card>
        </Col>
      ))}
      
      </Row>
      </div>
      </QueueAnim>
    ) : (
      <div>Loading</div>
    );
  }
}

export default News;
