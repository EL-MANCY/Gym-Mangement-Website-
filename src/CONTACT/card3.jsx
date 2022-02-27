import React, { Component } from 'react';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Card3 extends React.Component {
    render() { 
        return (<div>
             <div className="containerX">
  <div className="card" style={{width:"auto"}}>
    <img src="https://th.bing.com/th/id/OIP.Qx92gjYlbsPbj_W4MvOGvAHaGm?pid=ImgDet&rs=1" alt="Person" className="card__image"></img>
    <p className="card__name"> TRAINERS</p>

    <p className='small'>WE HAVE MANY TRAINERS</p>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
    <button className="btn draw-border"><p className='small'>ABOUT US</p></button>

  </div></div>

        </div>);
    }
}
 
export default Card3;