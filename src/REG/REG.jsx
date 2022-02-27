import React, { Component } from 'react';
import './reg.css'
import Signin from './signin';
import Signup from './signup';

class REG extends React.Component {
    render() { 
        return (<div>
        
    <br></br>
    <br></br>
    <br></br>

    <div className="login-wrap">
        <div className="login-html">
            <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Sign In</label>
            <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Sign Up</label>
            <div className="login-form">
               
<Signin></Signin>

<Signup></Signup>
             
		</div>
	</div>
</div>
        </div>);
    }
}
 
export default REG;