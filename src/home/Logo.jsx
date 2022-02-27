import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
class Logo extends React.Component {
    render() { 
        return <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <div className='logo'>
                <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon><br/>
                <div>EAGLES</div><br/><br/>
                <div>FULL CHARGE</div>
            </div>
        </div>;
    }
}
 
export default Logo;