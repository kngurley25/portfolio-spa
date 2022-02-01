import React from "react";
import profilePic from '../../assets/images/profile-pic.jpg';

function About() {
    return (
        <section>
            <div className="about-section">
                <img src={profilePic} className="profile-pic" alt="profile"></img>
                <div>
                    <p>
                        Hello! My name is Kristin Gaito. I am practicing skills toward web development.
                        I have an engineering background and am excited to jump into the world of programming! 
                    </p>
                    <p>
                        I graduated from Kansas State University with a degree in architectural engineering and am a licensed professional electrical engineer. 
                        I'm planning to transition from creating engineering construction documents to developing web applications with the training I've received from KU Coding Bootcamp. 
                        KU Coding Bootcamp has provided me exposure to front-end and back-end web development tools and concepts. 
                        I'm looking forward to building upon on this knowledge as I continue with a career in web development.
                    </p>
                </div>
            </div> 
        </section>
    )
}

export default About;