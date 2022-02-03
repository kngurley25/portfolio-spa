import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink 
                    activeClassName="active"
                    isActive={() => window.location.pathname === "/portfolio-spa"}
                    to="/portfolio-spa"
                    >
                        About Me
                    </NavLink>
                </li>
                <li>
                <NavLink 
                    activeClassName="active"
                    isActive={() => window.location.pathname === "/Project"}
                    to="/Project"
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li>
                <NavLink 
                    activeClassName="active"
                    isActive={() => window.location.pathname === "/ContactForm"}
                    to="/ContactForm"
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                <NavLink 
                    activeClassName="active"
                    isActive={() => window.location.pathname === "/Resume"}
                    to="/Resume"
                    >
                        Resume
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;