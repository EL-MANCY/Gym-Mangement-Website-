import React, { Component } from 'react';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card1 from './card1';
import Card2 from './card2';
import Card3 from './card3';
import Form from './form';
import Faq from './faq';
import Intro from './intro';


class Contact extends React.Component {
    render() { 
        return (<div>
          <Intro></Intro>

<Container>
  <Row>
               <Col xs={12} md={8}>
    <Container>
 <Row>
    <Col>
<Card1></Card1>
    </Col>
    <Col>
<Card2></Card2>
    </Col>
    <Col>
<Card3></Card3>
    </Col>
  </Row>
    </Container>

               </Col>
<Col xs={6} md={4}>
   <Form></Form>
 </Col>
  </Row>
</Container>


<div>
<Faq></Faq>

</div>

        </div>);
    }
}
 
export default Contact;
