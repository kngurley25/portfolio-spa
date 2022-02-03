import React, { useState } from "react";
const resume = require('../../assets/pdf/resume.pdf');

function Resume() {

    const [languages] = useState([
        'HTML',
        'CSS',
        'JavaScript'
    ]);
    const [applications] = useState([
        'Node.js',
        'Express.js',
        'MySql with Sequelize',
        'MongoDB with Mongoose',
        'React'
    ])
    return (
        <section className="resume-section">
            <div>
                <a href={resume} download="KristinGaito_Resume">Download PDF</a>
            </div>
            <div className="skill-list">
                <h4>Technical Skills</h4>
                <div>
                    <h5>Languages</h5>
                    {languages.map((skill) => {
                        return <li className="skill">{skill}</li>
                    })}
                </div>
                <div>
                    <h5>Applications</h5>
                    {applications.map((skill) => {
                        return <li className="skill">{skill}</li>
                    })}
                </div>
            </div>
        </section>
    );
}

export default Resume;