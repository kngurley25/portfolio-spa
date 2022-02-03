import React from "react";

import { GoMarkGithub } from 'react-icons/go';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsStackOverflow } from 'react-icons/bs';

function Footer() {
    return (
        <footer>
            <div>
                <a href="https://github.com/kngurley25" target="_blank"><GoMarkGithub></GoMarkGithub></a>
                <a href="https://www.linkedin.com/in/kristin-gaito-gurley-pe-69041569/" target="_blank"><AiFillLinkedin></AiFillLinkedin></a>
                <a href="https://stackoverflow.com/users/16674518/kristin-gaito" target="_blank"><BsStackOverflow></BsStackOverflow></a>
            </div>
        </footer>
    );
}

export default Footer;