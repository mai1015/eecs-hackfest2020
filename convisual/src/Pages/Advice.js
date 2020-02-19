import React from 'react';
import { Row, Col,Card,Collapse } from 'antd';
import img1 from '../img/img1.jpg';
import wh from '../img/wash_hands.jpg';
import pp from '../img/people.jpg';
import m from '../img/mask.jpg';
import meat from '../img/meat.jpg';

class Advice extends React.Component {
    render(){
        return(
            <div>
                
                <img src={img1} style={{ width: 600}}/>


                <Collapse className ='Collapse_1' defaultActiveKey={['1']} style={{ width: 600}}>
                    <Collapse.Panel header="What is a coronavirus?" key="1">
                    <p>Coronaviruses (CoV) are a large family of viruses that cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory Syndrome (SARS-CoV). A novel coronavirus (nCoV) is a new strain that has not been previously identified in humans.  </p>
                    </Collapse.Panel>
                    <Collapse.Panel header="what are the Common signs of coronavirus?" key="2">
                    <p>Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death. </p>
                    </Collapse.Panel>
                    <Collapse.Panel header="How dangerous is it?" key="3">
                    <p>As with other respiratory illnesses, infection with 2019-nCoV can cause mild symptoms including a runny nose, sore throat, cough, and fever.  It can be more severe for some persons and can lead to pneumonia or breathing difficulties.  More rarely, the disease can be fatal. Older people, and people with pre-existing medical conditions (such as, diabetes and heart disease) appear to be more vulnerable to becoming severely ill with the virus.</p>
                    </Collapse.Panel>
                    <Collapse.Panel header="Can I catch 2019-nCoV from my pet?" key="4">
                    <p>No, at present there is no evidence that companion animals or pets such as cats and dogs have been infected or have spread 2019-nCoV.</p>
                    </Collapse.Panel>
                    
                </Collapse>

                <div>
                <Row>
                    <Col xs={{ span: 4, offset: 1 }} lg={{ span: 2, offset: 3 }}>
                        <Card title="Wash your hands frequently" style={{ width: 300 }}>
                            <img src={wh} style={{ width: 150}}/>
                            <p>Wash your hands frequently with soap and water or use an alcohol-based hand rub if your hands are not visibly dirty.</p>
                        </Card>
                    </Col>

                    <Col xs={{ span: 4, offset: 1 }} lg={{ span: 2, offset: 3 }}>
                    <Card title="Maintain social distancing" style={{ width: 300 }}>
                            <img src={pp} style={{ width: 150}}/>
                    <p>Maintain at least 1 metre (3 feet) distance between yourself and other people, particularly those who are coughing, sneezing and have a fever.</p>
                    
                    </Card>
                    </Col>

                    <Col xs={{ span: 4, offset: 1 }} lg={{ span: 2, offset: 3 }}>
                    <Card title="Practice respiratory hygiene" style={{ width: 300 }}>
                            <img src={m} style={{ width: 150}}/>
                    <p>When coughing and sneezing, cover mouth and nose with flexed elbow or tissue – discard tissue immediately into a closed bin and clean your hands with alcohol-based hand rub or soap and water.</p>
                    
                    </Card>
                    </Col>

                    <Col xs={{ span: 4, offset: 1 }} lg={{ span: 2, offset: 3 }} >
                    <Card title="Avoid consumption undercooked animal products" style={{ width: 300 }}>
                    <img src={meat} style={{ width: 150}}/>
                    <p>Handle raw meat, milk or animal organs with care, to avoid cross-contamination with uncooked foods, as per good food safety practices.</p>
                    
                    </Card>
                    </Col>
                </Row>
                </div>
                
            </div>
        )
    }
}

export default Advice;