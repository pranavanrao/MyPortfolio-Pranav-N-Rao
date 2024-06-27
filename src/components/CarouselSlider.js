import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import "./header.css";

function CarouselSlider() {
    return (
        <Carousel controls={false} indicators={false} interval={3000} pause={false}>
            <Carousel.Item>
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
                    <h3 className="carousel_text">I am a C++ Developer</h3>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
                    <h3 className="carousel_text">I am an Automotive Infotainment Developer</h3>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
                    <h3 className="carousel_text">I am a Web Application Developer</h3>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
                    <h3 className="carousel_text">I am a Android Application Developer</h3>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselSlider;