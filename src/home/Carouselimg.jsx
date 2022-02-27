import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Carouselimage extends React.Component {
    render() { 
        return <React.Fragment>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 Carousel-img"
                    src="img/carousel/img1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>YOUR GOALS</h3>
                    <p>JUST BECOME EASER WITH US</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 Carousel-img"
                    src="img/carousel/img2.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>ARE YOU READY</h3>
                    <p>TO GET FIT ,STRONG &MOTIVATED!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 Carousel-img"
                    src="img/carousel/img3.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>GO HARD OR GO HOME</h3>
                    <p>THERE IS NO TIME TO WASTE</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 Carousel-img"
                    src="img/carousel/img4.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>BRING OUT THE FIGHTER IN YOU</h3>
                    <p>WE WILL HELP YOU TO DO THAT</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </React.Fragment>;
    }
}
 
export default Carouselimage;