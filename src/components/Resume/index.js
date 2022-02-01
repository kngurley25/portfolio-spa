import React from "react";
const resume = require('../../assets/pdf/resume.pdf');

function Resume() {
    return (
        <section className="resume-section">
            <div>
                <a href={resume} download="KristinGaito_Resume">Download</a>
            </div>
            <div>
                <h5>Technical Skills</h5>
                <ul>
                    <li>sample</li>
                    <li>sample</li>
                </ul>
            </div>
        </section>
    );
}

export default Resume;