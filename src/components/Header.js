import React from "react";
import CarouselSlider from "./CarouselSlider";
import "./header.css";
import ProfileImage from "../resources/img_avatar.png";

function Header() {
    return (
        <header className="App-header">
            <div className="Header-section-title">
                <div className="Header-title">PRANAV N RAO</div>
                <div className="Header-title-designation">Sr. Software Developer</div>
            </div>
            <img src={ProfileImage} className="Header-profile-image"></img>
        </header>
    );
}

export default Header;