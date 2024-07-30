import React from "react";

function Header () {

    return <header class="header">
        <a href="#about" class="logo">Mathieu
            <span> NUNES SANCHES</span><br/><p class="subtitle">Fx & Commodity Trader</p>
        </a>

        <i class='bx bx-menu' id="menu-icon"></i>
    
        <nav class="navbar">
            <a href="#about" class='active'>About</a>
            <a href="#workexperiences">Work Experiences</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact me</a>
        </nav>
    </header>
}

export default Header;