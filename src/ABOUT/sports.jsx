import React , { Component } from "react";
import './About_Us.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Sports extends React.Component {
    render() { 
        return (<div>
            <Row>
  <div className="rowy">

    <Col><div className="columny">
    <div className="cardy">
      <img src=".\t4.jpg" alt="Jane" className="image"></img>
      <div className="containery">
      <h2>Tom Hardy</h2>
      <p className="titley">Fitness Trainer</p>
        <p className="p">Fitness tranning provides fitness guidance to help clients to improve their physical condition .Fitness Trainer creates tailored fitness , wellness plans for clients.</p>
        <p><button className="buttony">Contact</button></p>
      </div>
    </div>
  </div></Col>
    <Col><div className="columny">
    <div className="cardy">
      <img src="https://th.bing.com/th/id/OIP.e1l6FN9HBKxphBZK2duUgQHaEK?pid=ImgDet&rs=1" alt="Jane" className="image"></img>
      <div className="containery">
        <h2>Scarle John</h2>
        <p className="title">Aerobics Trainer</p>
        <p className="p">Aerobics exercise provides cardiovascular conditioning ,and The term aerobics actually means with oxygen so it organizes the breathe and oxygen .</p>
        <p><button className="buttony">Contact</button></p>
      </div>
    </div>
  </div></Col>
  <Col><div className="columny">
    <div className="cardy">
      <img src="https://cdn.pttoday.co.uk/wp-content/uploads/2019/06/Corrective-Exercise-800x445.jpg" alt="Jane" className="image"></img>
      <div className="containery">
        <h2>Dane John</h2>
        <p className="title">Kick Boxing Trainer</p>
        <p className="p">The Trainning to boost cardiovascular fitness, build better muscle tone and cause improvements in coordination and balance </p>
        <p><button className="buttony">Contact</button></p>
      </div>
    </div>
  </div></Col>
  </div>
  </Row>
  <Row>
  <div className="rowy">

    <Col><div className="columny">
    <div className="cardy">
      <img src=".\t7.jpg" alt="Jane" className="image"></img>
      <div className="containery">
        <h2>Ande Garf</h2>
        <p className="title">Strength trainer</p>
        <p className="p">physical exercise that uses resistance in the form of your own body weight, allows for neurogenesis and neuroplasticity to take place.</p>
        <p><button className="buttony">Contact</button></p>
      </div>
    </div>
  </div></Col>
    <Col><div className="columny">
    <div className="cardy">
      <img src=".\t8.jpg" alt="Jane" className="image"></img>
      <div className="containery">
        <h2>Ema watson </h2>
        <p className="title">Free Weight Trainer</p>
        <p className="p">Free weight exercise guides and programs to improve any key component of fitness and completely transform your body,Gives energy, work on weight loss.</p>
        <p><button className="buttony">Contact</button></p>
      </div>
    </div>
  </div></Col>
  <Col><div className="columny">
    <div className="cardy">
      <img src=".\t9.jpg" alt="Jane" className="image"></img>
      <div className="containery">
      <h2 >Emy Stone</h2>
      <p className="title">POWER YOGA Trainer</p>
      <p className="p">Power Yoga exercise perform the various stretching poses, promote mindfulness in addition to overall wellbeing ,Good for the health and give strength .</p>
        <p><button className="buttony">Contact</button></p>
      </div>
    </div>
  </div></Col>
 </div>
  </Row>
  
        </div>);
    }
}
 
export default Sports;