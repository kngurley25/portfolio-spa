import React from "react";
import profilePic from '../../assets/images/profile-pic.jpg';

function About() {
    return (
        <section>
            <img src={profilePic} className="profile-pic" alt="profile"></img>
        </section>
    )
}

export default About;