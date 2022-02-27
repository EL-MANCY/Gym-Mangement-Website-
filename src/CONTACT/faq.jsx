import React, { Component } from 'react';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Faq extends React.Component {
    render() { 
        return (<div>
            <div className='color'>    
        <h1> FREQUENTLY ASKED QUESTION</h1>
        <hr></hr>
        </div>
        <div className = "content-q">
        <h1 className='pad'>You Could Search Here</h1>  
        <input type="search" name="search" className="search2" placeholder="Search..." ></input>
        <button name="Search" className="SearchhB">Search</button>
            <br></br><br></br><br></br><br></br>


        <div className="dropdown">
            <p className='ma'>Can I freeze my membership? </p>
            <hr  ></hr>
                <div className="dropdown-content">
            <p className='pa'>You can freeze your membership in the Member Area for just £5 per month. Please note, if you freeze within 4 working days before your monthly payments is due, we may not be able to stop the direct debit..</p>
                </div>
        </div>

        <br></br>

        <div className="dropdown">    
        <p className='ma'> How busy will The Gym be at certain times? </p>
            <hr  ></hr>
                <div className="dropdown-content">
            <p className='pa'>When your gym is open, you will be able to check out how busy your gym is through our website – live! Simply sign into the members area to check how busy your gym is.

To ensure that you get the most out of your experience, we’d recommend that you come down to The Gym at a time that is less busy so that you will not need to queue for as long. 

Our gyms in England and Scotland are now open. Gyms in Wales will reopen on 3rd May.</p>                </div>
        </div>
        <br></br>


        <div className="dropdown">    
        <p className='ma'> Are you still open 24/7? </p>
            <hr  ></hr>
                <div className="dropdown-content">
            <p className='pa'>The majority of our gyms are now 24/7 once more! That means any time noon or night, you can find your fit.  To check the opening times of your gym.</p>                </div>
        </div>
        <br></br>


        <div className="dropdown">    
        <p className='ma'> Are classNamees still running?</p>
            <hr  ></hr>
                <div className="dropdown-content">
            <p className='pa'>Our classNamees are now running in the majority of the gyms with some exceptions. Please check your Gym home page for timetable information.
Please note, in Scotland and Wales our classNamees are running at reduced capacity with COVID secure procedures in place in accordance with Government and industry guidance..</p>                </div>
        </div>
        <br></br>


        <div className="dropdown">    
        <p className='ma'> Am I required to socially distance while training? </p>
            <hr  ></hr>
                <div className="dropdown-content">
            <p className='pa'>You’re required to follow social distancing guidelines applicable in Scotland (2m) and Wales (1m). While social distancing isn't currently a requirement in England, please respect other members if they choose to distance whilst training.</p>                </div>
        </div>  
        <br></br>

        <div className="dropdown">    
        <p className='ma'>I require a carer/helper to attend the gym with me due to a medical condition – is this allowed? </p>
            <hr  ></hr>
                <div className="dropdown-content">
            <p className='pa'>This is absolutely allowed. We ask that you attend the gym between 8am and 8pm Monday to Friday or 9am and 5pm Saturday and Sunday so that one of team can get this set up on our system. If this isn't possible, please contact us and we can help arrange this via an alternative means.</p>                </div>
        </div>  
<br></br>


        <div className="dropdown">    
        <p className='ma'> What do I do if I feel unwell? </p>
            <hr  ></hr>
                <div className="dropdown-content">
            <p className='pa'>If you are unwell, symptomatic or have tested positive for coronavirus, do not attend the gym and follow government regulation on isolating for the minimum period of time, and only return after this minimum period if you are feeling well again.</p>                </div>
        </div>   
<br></br>
          <div className="dropdown">    
        <p className='ma'> Can I change my 'home' gym? </p>
            <hr  ></hr>
                <div className="dropdown-content">
            <p className='pa'>You can change your home gym via the Member Area.</p>                </div>
        </div>        
        
        


</div>




        </div>);
    }
}
 
export default Faq;