import React from 'react';
import { Row, Col,Card,Collapse } from 'antd';

class Advice extends React.Component {
    render(){
        return(
            <div>
                this is advice

                <Collapse defaultActiveKey={['1']} style={{ width: 300 }}>
                    <Collapse.Panel header="What is a coronavirus?" key="1">
                    <p>Coronaviruses (CoV) are a large family of viruses that cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory Syndrome (SARS-CoV). A novel coronavirus (nCoV) is a new strain that has not been previously identified in humans.  </p>
                    </Collapse.Panel>
                    <Collapse.Panel header="what are the Common signs of coronavirus?" key="2">
                    <p>Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death. </p>
                    </Collapse.Panel>
                    <Collapse.Panel header="This is panel header 3" key="3" disabled>
                    <p>hello</p>
                    </Collapse.Panel>
                </Collapse>

                <div>
                    <Card title="Wash your hands frequently" style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    </Card>
                    <Card title="Maintain social distancing" style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    </Card>
                </div>
                
            </div>
        )
    }
}

export default Advice;