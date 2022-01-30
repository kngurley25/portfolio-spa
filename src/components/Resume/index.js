import React from "react";
const resume = require('../../assets/pdf/resume.pdf');

function Resume() {
    return (
        <section>
            <div>
                <a href={resume} download="KristinGaito_Resume">Download my resume</a>
            </div>
        </section>
    );
}

export default Resume;