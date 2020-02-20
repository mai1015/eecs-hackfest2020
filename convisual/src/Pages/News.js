import React from "react";
import { Row, Col, Carousel, Card } from "antd";
import axios from "axios";
import "./News.scss";

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
    let imgHolder = ""
    return this.state.news ? (
      <div>
      <Row type="flex" justify="space-between" align="middle">
      <Col span={4}>
      {this.state.news.map((ele, idx) => (
          <Card
          style={{ width: "20em", height: "18em",marginRight:"2em", marginTop:"1em" }}
          
          hoverable
          cover={
            <image
              variant="top"
              src={
                ele.cover === undefined
                  ? ""
                  : ele.cover
              }
              onError={e => {
                e.target.onError = null;
                e.target.src = imgHolder;
              }}
            />
          }
        >
          {console.log(ele)}
          <Card.Meta
            title={ele.title}
            extra={<a href='ele.url'>More</a>}
            description={
              <div>
                <h4 style={{ color: "#e77641" }}>
                  {"$" + ele.price}
                </h4>
                <hr />
                <p>{ele.content}</p>
              </div>
            }
          />
        </Card>
        
      ))}
      </Col>
      </Row>
      </div>
    ) : (
      <div>Loading</div>
    );
  }
}

export default News;
