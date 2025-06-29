import React from "react";

import ProfileSocialData from "./data/ProfileSocialData";

import profilePic from "./images/profile/mypic.jpeg";
import downloadImg from "./images/profile/download-circular-button.png";

import "../App.css";
import "./styles/profile.css";

function Profile() {
    return (
        <section>
            <div className="profile">
                <img className="profile_img" src={profilePic} alt="Profile pic" />

                <div className="profile_about">
                    <div className="main_heading">About me ...</div>
                    <div className="profile_about_info">Hi, I'm Pranav, a 26-year-old software developer based in Bengaluru, India. As a <b>Sr. Associate Software Developer</b>, I currently work with the talented team at <a style={{ textDecoration: "none" }} href="https://pthinks.com/" target="_blank">Pthinks</a>. Feel free to explore my skills or connect with me on LinkedIn. I'm always eager to collaborate with like-minded professionals. Let's discuss opportunities over a coffee.</div>
                </div>
            </div>

            <div className="prafile_contact">
                {ProfileSocialData.map((social, index) => (
                    <a target="_blank" href={social.link}><img key={index} className="prafile_contact_img" src={social.src} alt={social.alt} /></a>
                ))}
            </div>

            <a style={{ textDecoration: "none" }} target="_blank"
            // href="https://drive.google.com/file/d/1kwBfQ5WRGkJRnrUa53tvcEBHQVJZRgMf/view?usp=sharing"
            >
                <div className="profile_resume">
                    <img className="profile_resume_img" src={downloadImg} alt="download img" />
                    <span className="profile_resume_text">Download my resume</span>
                </div>
            </a>
        </section >
    )
}

export default Profile;