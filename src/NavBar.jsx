import React, { Component } from 'react';
import './CONTACT/App.css'
class Navbar extends React.Component {
    render() { 
        return (
       
    <div id="container">

      <nav>
        <div id="logo">
          Eagles Gym
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/reg">Registration</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/contact">Contact</a></li>
          
        </ul>
      </nav>
    </div>
            
            
        );
    }
}

 
export default Navbar;