import React, { Component } from 'react';
import './project.css';

class Head extends React.Component {
    render() { 
        return <div>
                <div  class="bgphoto">
         <img class="img" src={window.location.origin + '/images/cta-bg.jpg'} / >
         <div class="imgtext">Events & Competitions</div>    
     </div> 



    <div className="COMPETITION">
<p >UPCOMING  COMPETITIONS</p>
<div className="line"></div> 
</div> 
        </div>;
    }
}
 
export default Head;