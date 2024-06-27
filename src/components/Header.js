import React from "react";

import CarouselSlider from "./CarouselSlider";
import moon from "../resources/moon.png";
import helmet from "../resources/astronaut-helmet.png";
import saturn from "../resources/saturn.png";
import spaceman from "../resources/spaceman.png";

import "./header.css";

function Header() {
    return (
        <div>
            <img className="moon_img" src={moon} alt="moon" />
            <img className="helmet_img" src={helmet} alt="astronaut helmet" />
            <img className="saturn_img" src={saturn} alt="saturn planet" />
            <img className="spaceman_img" src={spaceman} alt="spaceman" />
            <header className="header">
                <div className="header_section_title">
                    <div className="header_title">PRANAV N RAO</div>
                    <div className="header_title_designation">Sr. Software Developer</div>
                    <CarouselSlider />
                </div>
            </header>
        </div>
    );
}

export default Header;