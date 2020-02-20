import React from 'react';
import './Main.scss';
import { Row, Col,Carousel, Card } from 'antd';
import mainpage from '../img/main.jpg';
import QueueAnim from 'rc-queue-anim'

class Main extends React.Component {
    render(){
        return(
            <QueueAnim delay={300} className = "queue-simple">
            <div className= "showarea">

            </div>
            </QueueAnim>
        )
    }


    
}

export default Main;