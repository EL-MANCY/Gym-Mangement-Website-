import React, { Component } from 'react';
import './App.css'
import Row from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';

class  Comp2 extends React.Component {

    render() { 
        return <div>
            <Row>
                    <Col>
<div className='component'>
    <img src="https://sc04.alicdn.com/kf/U2a2a2ff16f47426083abbb472e9ddc644.jpg" alt="picerror" className='pic' />
    <br />
    <p className='protein'>WHEY PROTEIN BLEND</p>
    <p className='description'>
        250 gm protein
        <br />
        80 gm carbohydrates
        <br />
        25 gm fats
    </p>
    <div className='price'>
        <div >55 $</div>
    </div>
</div>
</Col>
<Col>
<div className='component'>
    <img src="https://cdn.nutrabay.com/wp-content/uploads/2020/08/NB-NUT-1013-09-01-510x510.jpg" alt="picerror" className='pic' />
    <br />
    <p className='protein'>ISOLATE WHEY PROTEIN</p>
    <p className='description'>
        400 gm protein
        <br />
        100 gm carbohydrates
        <br />
        10 gm fats
    </p>
    <div className='price'>
        <div >75 $</div>
    </div>
</div>
</Col>
<Col>
<div className='component'>
    <img src="https://cdn.shoplightspeed.com/shops/614503/files/25860172/nutrabio-100-whey-protein-isolate.jpg" alt="picerror" className='pic' />
    <div className='txt'>
        <br />
        <p className='protein'>WHEY PROTEIN ISOLATE</p>
        <p className='description'>
            200 gm protein
            <br />
            70 gm carbohydrates
            <br />
            20 gm fats
        </p>
        <div className='price'>
            <div >35 $</div>
        </div>
    </div>
</div>
</Col>
</Row>
        </div>;
    }
}
 
export default Comp2;