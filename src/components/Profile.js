import React from "react";

import profilePic from "./images/mypic.jpeg";

import "./styles/profile.css";

function Profile() {
    return (
        <section className="profile">
            <img className="profile_img" src={profilePic} alt="Profile pic" />

            <div className="profile_about">
                <div className="profile_about_title">About me ...</div>
                <div className="profile_about_info">Hi I am Pranav, a 25 year old software developer, living in Bengaluru, India. I am a Computer Science Engineer, currently working with awesome folks at Pthinks. Have a look at my skills or just connect with me on LinkedIn. I am always excited to do business with like minded people, lets discuss over a coffee.</div>
            </div>
        </section>
    )
}

export default Profile;