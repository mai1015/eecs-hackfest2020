import React from 'react';
import { Row, Col , Carousel} from 'antd';
import './News.scss';

class News extends React.Component {
    render(){
        return(
            <div>
                <Carousel className = 'carousel1' autoplay style={{ width: 600,height:100}}>
                <div>
                <h3>1</h3>
                </div>
                <div>
                <h3>2</h3>
                </div>
                <div>
                <h3>3</h3>
                </div>
                <div>
                <h3>4</h3>
                </div>
                </Carousel>
            </div>
        )
    }
}

export default News;