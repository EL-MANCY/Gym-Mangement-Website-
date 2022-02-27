import React, { Component } from 'react';
import './project.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Comp1 extends React.Component {
    render() { 
        return <div>
            <div class="compbox">
    <Col><p className="compname">Map the System Competition</p>
    
    <p className="comptext"> 
     Registration Open! Map the System is a global competition 
     that allows you to deeply explore an issue that matters to 
     you and share your findings with the world by thinking 
     differently about social and environmental change. No 
     experience in systems mapping is necessary.   </p>
     
     </Col>
    <Col><img  class ="compimg" src={window.location.origin + '/images/maps.JPG'}/></Col>
    </div>
        </div>;
    }
}
 
export default Comp1;