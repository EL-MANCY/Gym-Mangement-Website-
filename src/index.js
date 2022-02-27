import React from 'react';
import ReactDOM  from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Contact from './Contact';
import {BrowserRouter} from 'react-router-dom';
import Maincomponnent from './Maincomponnent';
import './home.css';

ReactDOM.render(<BrowserRouter>
    <Maincomponnent/>
</BrowserRouter>,document.querySelector("#root"));

