import React, { Component } from 'react';
import './reg.css'

class Signup extends React.Component {
    render() { 
        return <div>
               <div className="sign-up-htm">
                    <div className="group">
                        <label for="pass" className="label">Email Address</label>
                        <input id="pass" type="text" className="input"/>
                    </div>
                    <div className="group">
                        <label for="pass" className="label">phone number</label>
                        <input id="pass" type="tel" className="input"/>
                    </div>
                    <div className="group">
                        <label for="user" className="label">Username</label>
                        <input id="user" type="text" className="input"/>
                    </div>
                    <div className="group">
                        <label for="pass" className="label">set a Password</label>
                        <input id="pass" type="password" className="input" data-type="password"/>
                    </div>
                   
                    <div className="group">
                        <input type="submit" className="button" value="Sign Up"/>
                    </div>
                    <div className="hr"></div>
                    <div className="foot0">
                        <label for="tab-1">Already Member? </label>
            
				</div>
			</div>
        </div>;
    }
}
 
export default Signup;