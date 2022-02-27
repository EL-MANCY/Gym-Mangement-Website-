import React, { Component } from 'react';
import './project.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Comp2 extends React.Component {
    render() { 
        return <div>
            <div class="compbox2"> 
    <Col><img  class ="compimg2" src={window.location.origin + '/images/maps.JPG'}/></Col>
    <Col><p className="compname2">Map the System Competition</p> 
    <p className="comptext2"> 
     Registration Open! Map the System is a global competition 
     that allows you to deeply explore an issue that matters to 
     you and share your findings with the world by thinking 
     differently about social and environmental change. No 
     experience in systems mapping is necessary.   </p>
     </Col>
     </div>
        </div>;
    }
}
 
export default Comp2;