import React from "react";

import ProfileSocialData from "./data/ProfileSocialData";

import profilePic from "./images/profile/mypic.jpeg";

import "./styles/profile.css";

function Profile() {
    return (
        <section>
            <div className="profile">
                <img className="profile_img" src={profilePic} alt="Profile pic" />

                <div className="profile_about">
                    <div className="profile_about_title">About me ...</div>
                    <div className="profile_about_info">Hi, I'm Pranav, a 25-year-old software developer based in Bengaluru, India. As a <b>Sr. Associate Software Developer</b>, I currently work with the talented team at <a style={{ textDecoration: "none" }} href="https://pthinks.com/" target="_blank">Pthinks</a>. Feel free to explore my skills or connect with me on LinkedIn. I'm always eager to collaborate with like-minded professionals. Let's discuss opportunities over a coffee.</div>
                </div>
            </div>

            <div className="prafile_contact">
                {ProfileSocialData.map((social, index) => (
                    <a target="_blank" href={social.link}><img key={index} className="prafile_contact_img" src={social.src} alt={social.alt} /></a>
                ))}
            </div>
        </section>
    )
}

export default Profile;