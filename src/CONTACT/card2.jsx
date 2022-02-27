import React, { Component } from 'react';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Card2
 extends React.Component {
    render() { 
        return (<div>
             <div className="containerX">
  <div className="card" style={{width:"auto"}}>
    <img src="https://th.bing.com/th/id/R.db61f92aa3a869fda3d3ca482d4febbd?rik=yfWlSBHmcGa21g&pid=ImgRaw&r=0" alt="Person" className="card__image"></img>
    <p className="card__name"> SHOP</p>
    

    <p>WE HAVE MANY EQUIPMENTS </p>
    <br></br>
    <br></br>
   <br></br>
   <br></br>
   <br></br>
    <button className="btn draw-border"><p className='small'>SHOP</p></button>

  </div></div>
        </div>);
    }
}
 
export default Card2
;