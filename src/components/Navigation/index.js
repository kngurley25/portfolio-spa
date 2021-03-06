import React from "react";
import { NavLink } from "react-router-dom";
import NavigationClasses from './Navigation.css';

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink 
                    activeClassName="active"
                    isActive={() => window.location.pathname === "/"}
                    to="/"
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