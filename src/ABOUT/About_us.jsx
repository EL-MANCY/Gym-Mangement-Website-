import React , { Component } from "react";
import './About_Us.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Top from "./Top";
import Sports from "./sports";
import Manger from "./manger";

class About_Us extends React.Component {
    render() { 
        return (
          <div>
<div className="body">
                     
<Top></Top>
        
<Container>
  <Sports></Sports>
</Container>
</div>
   <br></br>
<br></br>
<h1 className="cent">The Mangement Team</h1>
<Container>
  <Manger></Manger>
</Container>
       </div>
             );
    };
}
 
export default About_Us;