import React, { Component } from 'react';
import './App.css'
import Row from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';

class Comp3 extends React.Component {
    render() { 
        return <div>
            <Row>
                    <Col>
<div className='component'>
    <img src="https://5.imimg.com/data5/FS/RF/GG/SELLER-51274080/whey-protein-supplement-500x500.jpg" alt="picerror" className='pic' />
    <br />
    <p className='protein'>WHEY PROTEIN</p>
    <p className='description'>
        220 gm protein
        <br />
        85 gm carbohydrates
        <br />
        22 gm fats
    </p>
    <div className='price'>
        <div >40 $</div>
    </div>
</div>
</Col>
<Col>
<div className='component'>
    <img src="https://www.tiendafitness.online/wp-content/uploads/2019/08/41btrM6XxnL.jpg" alt="picerror" className='pic' />
    <br />
    <p className='protein'>WHEY PROTEIN</p>
    <p className='description'>
        330 gm protein
        <br />
        50 gm carbohydrates
        <br />
        45 gm fats
    </p>
    <div className='price'>
        <div >65 $</div>
    </div>
</div>
</Col>
<Col>
<div className='component'>
    <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1610111894-51n9tpoIGwL.jpg" alt="picerror" className='pic' />
    <br />
    <p className='protein'>COMBAT PROTEIN POWDER</p>
    <p className='description'>
        370 gm protein
        <br />
        110 gm carbohydrates
        <br />
        45 gm fats
    </p>
    <div className='price'>
        <div >90 $</div>
    </div>
</div>
</Col>
</Row>
        </div>;
    }
}
 
export default Comp3;