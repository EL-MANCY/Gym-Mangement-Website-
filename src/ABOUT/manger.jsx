import React , { Component } from "react";
import './About_Us.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Manger extends React.Component {
    render() { 
        return (<div>
             <Row>
    <Col>
    
    <Container>
  <Row>
    <Col xs={12} md={8}>
    <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="https://img-aws.ehowcdn.com/750x400p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/1f240420eef046b987f4bf77fa48860a.jpg?type=webp" alt="Avatar" className="fb"></img>
    </div>
    <div className="flip-card-back">
      <h1>John Doe</h1> 
      <p>Gym Constructor</p> 
      <p>The GodFather Of The Place</p>
    </div>
  </div>
</div>
    </Col>
    <Col xs={6} md={4}>
    <br></br>
<p>Before diving into the practical gym tips for beginners, remember that the most important exercise catalyst is confidence. Whether you're lifting 100 pounds or 1 pound, you should be proud of yourself for showing up at the gym at all! Don't be intimidated by others or scared to ask for help.</p>
    </Col>
  </Row>
  <br></br>
<Row>
    
    <Col xs={6} md={4}>
    <br></br>
  <p>  If you're not sweating by the end of your workout, perhaps you aren't pushing yourself hard enough. Try to reach an "out of breath" state at least once during your workout by incorporating high-intensity movements like sprinting, jumping jacks, burpees or squat jumps.</p>

</Col>
    <Col xs={12} md={8}>
    <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="https://www.reviewagym.com/images/gym-manager-job.jpg" alt="Avatar" className="fb"></img>
    </div>
    <div className="flip-card-back">
      <h1>Mike Smith</h1> 
      <p>The Co_Leader of The Gym</p> 
      <p>Has Many Important Jobs</p>
    </div>
  </div>
</div>

    </Col>
  </Row>

  
</Container>

    </Col>
    <Col>
    
    <Container>
  <Row>
    <Col xs={12} md={8}>
    <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="https://www.witseducation.com/fit/wp-content/uploads/2015/06/fitness-business-management.jpg" alt="Avatar" className="fb"></img>
    </div>
    <div className="flip-card-back">
      <h1>John Dan</h1> 
      <p>Place Manger</p> 
      <p>Manage The Gym</p>
    </div>
  </div>
</div>
    </Col>
    <Col xs={6} md={4}>
<br></br>
<p>Losing weight, gaining strength, boosting endurance and increasing flexibility are all long-term goals — so don't expect to reach ultimate strength in a single week. Be realistic about the goals you set for yourself. For example, see if you can add five more pounds to your shoulder press or shave ten seconds off of your mile time within a month.</p>

    </Col>
  </Row>
  <br></br>

<Row>
    
    <Col xs={6} md={4}>
<br></br>
<p>Working out won't yield results if your diet isn't in check, too. Replace unhealthy foods with healthy alternatives and try to cut back on sugar. A good place to start is following the USDA's recommendation of filling at least half of your plate with fruits and vegetables</p> 
   </Col>
    <Col xs={12} md={8}>
    <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="https://www.eu-startups.com/wp-content/uploads/2020/11/TransferGo-founder-1024x682.jpg" alt="Avatar" className="fb"></img>
    </div>
    <div className="flip-card-back">
      <h1>Jonny Han</h1> 
      <p>The Manger Assistant</p> 
      <p>Has Many Solutions to Any Problem</p>
    </div>
  </div>
</div>
    </Col>
  </Row>

  
  
</Container>

    
    </Col>
  </Row>
 
        </div>);
    }
}
 
export default Manger;