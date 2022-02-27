import React, { Component } from 'react';
import './project.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Head from './head';
import Comp1 from './comp1';
import Comp2 from './comp2';
import { Card } from 'react-bootstrap';
import CC from './cc';
 
class EVENTS extends React.Component {
    state={};
    render() { 
        return(
         <div>
           <Head></Head>  
       
<Container>

  <Row>
  <Comp1></Comp1>
  </Row>
  
  <Row>
  <Comp2></Comp2>
  </Row>
</Container>

<div class="EVENT">
    <p >UPCOMING  EVENTS</p>
    <div class="linemain"></div>
    </div>




    <Container>
      <CC></CC>
   <br></br>
</Container>



</div>



    )
    }
}
 
export default EVENTS;