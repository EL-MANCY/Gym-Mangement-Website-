import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons';
class Statecard extends React.Component {
    render() { 
        return <React.Fragment>
            <div><FontAwesomeIcon icon={this.props.logoo}></FontAwesomeIcon></div>
        </React.Fragment>;
    }
}
 
export default Statecard;