import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Carouselimage from './Carouselimg';
import Classcontent from './Classcontent';
import Logo from './Logo';
import State from './State';
import Trainers from './Trainers';
class Homme extends React.Component {
    render() { 
        return <React.Fragment>
            <Container>
                <Row>
                    <Carouselimage/>
                    <Classcontent/>
                </Row>
            </Container>
            <State/>
            <Logo/>
            <Trainers/>
        </React.Fragment>;
    }
}
export default Homme;