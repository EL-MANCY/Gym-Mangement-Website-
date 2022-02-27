import React, { Component } from 'react';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Card1 extends React.Component {
    render() { 
        return (<div>
  <div className="containerX">
  <div className="card" style={{width:"auto"}}>
    <img src="https://th.bing.com/th/id/OIP.M8dF8_s6IzSVdK0B6kefQQHaEB?pid=ImgDet&rs=1" alt="Person" className="card__image"></img>
    <p className="card__name"> EVENTS</p>

    <p className='small'>WE HAVE MANY EVENTS AS WELL AS COMPETITIONS</p>
    <br></br><br></br><br></br><br></br>
    <button className="btn draw-border"><p className='small'>EVENTS</p></button>

  </div></div>
        </div>);
    }
}
 
export default Card1;