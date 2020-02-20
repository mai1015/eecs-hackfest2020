import React from 'react';
import './Main.scss';
import { Row, Col,Carousel, Card } from 'antd';
import mainpage from '../img/main.jpg';
import QueueAnim from 'rc-queue-anim'

class Main extends React.Component {
    render(){
        return(
            <QueueAnim delay={1000} className = "queue-simple">
            <div className= "showarea" key="main1">
                <div className = 'maintext1'><p>Photo by Health Issues India</p></div>
            </div>
            </QueueAnim>
        )
    }


    
}

export default Main;