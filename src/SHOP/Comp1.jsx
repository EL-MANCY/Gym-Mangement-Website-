import React, { Component } from 'react';
import './App.css'
import Row from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';

class Comp1 extends React.Component {
    render() { 
        return <div>
            <Row>
                    <Col>
<div className='component'>
    <img src="https://eugenicsnutrition.com/wp-content/uploads/2017/09/8-2.jpg" alt="picerror" className='pic' />
    <br />
    <p className='protein'>WHEY PROTEIN BLEND</p>
    <p className='description'>
        200 gm protein
        <br />
        70 gm carbohydrates
        <br />
        20 gm fats
    </p>
    <div className='price'>
        <div >70 $</div>
    </div>
</div>
</Col>
<Col>
<div className='component'>
    <img src="https://img2.hkrtcdn.com/12134/prd_1213351-MuscleBlaze-100-Whey-Protein-Supplement-Powder-with-Digestive-Enzyme-4-lb-54-Servings-Rich-Milk-Chocolate_o.jpg" alt="picerror" className='pic' />
    <br />
    <p className='protein'>WHEY PROTEIN</p>
    <p className='description'>
        300 gm protein
        <br />
        100 gm carbohydrates
        <br />
        30 gm fats
    </p>
    <div className='price'>
        <div >85 $</div>
    </div>
</div>
</Col>
<Col>
<div className='component'>
    <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1540224175-mh-pro-7-1540224167.png?crop=1.00xw:0.801xh;0,0.100xh&resize=480:*" alt="picerror" className='pic' />
    <br />
    <p className='protein'>NAKED WHEY PROTEIN</p>
    <p className='description'>
        150 gm protein
        <br />
        50 gm carbohydrates
        <br />
        17 gm fats
    </p>
    <div className='price'>
        <div >60 $</div>
    </div>
</div>
</Col>
</Row>
        </div>;
    }
}
 
export default Comp1;