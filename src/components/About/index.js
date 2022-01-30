import React from "react";
import profilePic from '../../assets/images/profile-pic.jpg';

function About() {
    return (
        <section>
            <h3>About Me</h3>
            <div className="about-section">
                <img src={profilePic} className="profile-pic" alt="profile"></img>
                <div>
                    <p>
                        Hello! My name is Kristin Gaito. I am practicing skills toward web development.
                        I have an engineering background and am excited to jump into the world of programming! 
                    </p>
                    <p>
                        Spicy jalapeno bacon ipsum dolor amet sunt doner andouille tail magna. Cow pork boudin, shankle cupidatat elit do fatback beef eiusmod esse. Id flank ground round est ut pork belly enim reprehenderit exercitation landjaeger pork. Nisi tri-tip ut, pig occaecat cupidatat lorem ham short ribs fugiat cillum sint ball tip landjaeger. Excepteur frankfurter veniam biltong pork belly lorem brisket beef ribs ea shankle fugiat culpa eiusmod ut qui. Buffalo beef alcatra incididunt ut pork chop jowl fatback swine nisi.
                    </p>
                </div>
            </div> 
        </section>
    )
}

export default About;