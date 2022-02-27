import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
class Trainers extends React.Component {
    render() { 
        return <React.Fragment>
            <Container>
                <Row className='spaceLine' style={{margin:"60px 0px"}}>
                    <Col xs={3}>
                        <div className='lineHead1'>Train With Experts</div>
                        <div className='lineHead2'>Team Leaders</div>
                    </Col>
                    <Col xs={9}><hr className='Line'/></Col>
                </Row>
                <Row className='trrainer'>
                        <Card className='trainerCard'>
                            <Card.Img variant="top" src="img/trainers/img1.jpg"/>
                            <Card.Body>
                                <div>Kevin Joy</div><br/>
                                <div>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className='trainerCard'>
                            <Card.Img variant="top" src="img/trainers/img2.jpg"/>
                            <Card.Body>
                                <div>James Neely</div><br/>
                                <div>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>
            </Container>
        </React.Fragment>;
     }
}
 
export default Trainers;