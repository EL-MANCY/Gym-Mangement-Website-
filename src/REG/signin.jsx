import React, { Component } from 'react';
import './reg.css'


class Signin extends React.Component {
    render() { 
        return <div>
             <div className="sign-in-htm">
                    <div className="group">
                        <label for="user" className="label">Username</label>
                        <input id="user" type="text" className="input"/>
                    </div>
                    <div className="group">
                        <label for="pass" className="label">Password</label>
                        <input id="pass" type="password" className="input" data-type="password"/>
                    </div>
                    <div className="group">
                        <input id="check" type="checkbox" className="check" checked/>
                        <label for="check"><span className="icon"></span> Keep me Signed in</label>
                    </div>
                    <div className="group">
                        <input type="submit" className="button" value="Sign In"/>
                    </div>
                    <div className="hr"></div>
                    <div className="foot0">
                        <a href="#forgot">Forgot Password?</a>
                    </div>
                </div>
        </div>;
    }
}
 
export default Signin;