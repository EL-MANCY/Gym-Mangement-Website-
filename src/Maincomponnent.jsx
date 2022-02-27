import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './CONTACT/Contact';
import About_Us from './ABOUT/About_us';
import NavBar from './NavBar';
import Homme from './home/Homme';
import EVENTS from './EVENTS/EVENTS';
import REG from './REG/REG';
import Foot from './FOOT';
import Shop from './SHOP/Shop';

class Maincomponnent extends React.Component {
    render() { 
        return <React.Fragment>
            <div>
            <NavBar/>
                <Routes>
                    <Route path="/" exact element={<Homme/>}/>
                    <Route path="/events" exact element={<EVENTS/>}/>

                    <Route path="/reg" exact element={<REG/>}/>

                    <Route path="/about" exact element={<About_Us/>}/>
                    <Route path="/contact" exact element={<Contact/>}/>

                    <Route path="/shop" exact element={<Shop/>}/>


                </Routes>
                <Foot></Foot>
            </div>
        </React.Fragment>;
    }
}
 
export default Maincomponnent;