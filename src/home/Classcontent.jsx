import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Classcard from './Classcard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from "@fortawesome/free-solid-svg-icons"
class Classcontent extends React.Component {
    render() { 
        return <React.Fragment>

            <Row className='spaceLine'>
                <Col xs={2}>
                    <div className='lineHead1'>What We Offer</div>
                    <div className='lineHead2'>Our Classes</div>
                </Col>
                <Col xs={10}><hr className='Line'/></Col>
            </Row>
            <Container>
            <Row>
                <Col lg={4} md={12} sm={12}><Classcard imageName="img/classCard/img1.png" alt="Personal Trainer" divContent="Personal Trainer"/></Col>
                <Col lg={4} md={12} sm={12}><Classcard imageName="img/classCard/img2.jfif" alt="Body Building" divContent="Body Building"/></Col>
                <Col lg={4} md={12} sm={12}><Classcard imageName="img/classCard/img3.png" alt="Gymnastic Rings" divContent="Gymnastic Rings"/></Col>
            </Row><br/><br/>
            <Row>
               <Col lg={4} md={12} sm={12}><Classcard imageName="img/classCard/img4.png" alt="Crossfit" divContent="Crossfit"/></Col>
               <Col lg={4} md={12} sm={12}><Classcard imageName="img/classCard/img5.png" alt="Core" divContent="Core"/></Col>
               <Col lg={4} md={12} sm={12}><Classcard imageName="img/classCard/img6.png" alt="Fitness" divContent="Fitness"/></Col>
            </Row>
            </Container>
            <div className='buttonArrow'>Book Class <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></div>
        </React.Fragment>;
    }
}
 
export default Classcontent;