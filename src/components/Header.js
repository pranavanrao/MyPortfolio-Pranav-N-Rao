import React from "react";

import CarouselSlider from "./CarouselSlider";
import moon from "./images/header/moon.png";
import helmet from "./images/header/astronaut-helmet.png";
import saturn from "./images/header/saturn.png";
import spaceman from "./images/header/spaceman.png";

import "./styles/header.css";

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