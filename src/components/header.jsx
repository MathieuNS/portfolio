import React from "react";


function activateMenu(){
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function Header () {

    return <header class="header">
        <a href="#about" class="logo">Mathieu
            <span> NUNES SANCHES</span><br/><p class="subtitle">Fx & Commodity Trader</p>
        </a>

        <i class='bx bx-menu' id="menu-icon" onClick={activateMenu}></i>
    
        <nav class="navbar">
            <a href="#about" class='active'>About</a>
            <a href="#workexperiences">Work Experiences</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact me</a>
        </nav>
    </header>
}

export default Header;