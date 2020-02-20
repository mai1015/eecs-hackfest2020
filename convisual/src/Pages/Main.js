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
                    <div className = 'maintext2' key="main14">
                        <p>The Situation is Rapidly Evolving and We are Closely Monitoring the Outbreak,</p>
                        <p>Conducting Surveillance and Appropriate Laboratory Testing, </p>
                        <p>and Providing Public Health and Infection Control Guidance.</p>
                    </div>
            </div>
            </QueueAnim>
        )
    }


    
}

export default Main;