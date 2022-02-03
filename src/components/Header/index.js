import React from "react";
import Navigation from "../Navigation";
import HeaderClasses from './Header.css';

function Header() {
    return (
        <header className={HeaderClasses.header}>
            <h1>Kristin Gaito</h1>
            <Navigation></Navigation>
        </header>
    );
}

export default Header;