import React, { Component } from 'react';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Form extends React.Component {
    render() { 
        return (<div> <h3>Contact Form</h3>

            <div className="container1">
              <form action="/action_page.php">
                <label className='font' for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
            
                <label  className='font' for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
            
                <label  className='font' for="country">Country</label>
                <select id="country" name="country">
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
            
                <label  className='font' for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
            
                <input type="submit" value="Submit"></input>
              </form>
              </div></div>);
    }
}
 
export default Form;