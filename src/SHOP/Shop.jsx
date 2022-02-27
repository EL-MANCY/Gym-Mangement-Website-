import React, { Component } from 'react';
import './App.css'
import { Container } from 'react-bootstrap';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';

class Shop extends React.Component {
    render() { 
        return (
            <Container>
<br />
        <Comp1></Comp1>
<br />
<br />
<br />
        <Comp2></Comp2>        
<br />
<br />
<br />
                <Comp3></Comp3>
<br />
</Container>
        );
    }
}
 
export default Shop;
