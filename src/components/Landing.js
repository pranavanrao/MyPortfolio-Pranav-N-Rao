import React from "react";

import Header from './Header';
import Profile from './Profile';
import Skills from './Skills';
import ContactMe from "./ContactMe";
import Work from "./Work";

function Landing() {
    return (
        <>
            <Header />

            <Profile />

            <Skills />

            <Work />

            <ContactMe />
        </>
    )
}

export default Landing;