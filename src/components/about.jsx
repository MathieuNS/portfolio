import React from "react";

function openPDF() {
    window.open("../mathieu_nunes_sanches_cv.pdf")
}

function About () {
    return <section class="about" id="about">
        <div class="about-content">
            <h1>Mathieu <span>NUNES SANCHES</span></h1>
            <h2 class="text-animation">I am a <span></span></h2>
            <p>7 years of experience in FX, IRD, and commodities trading and sales. Skilled in developing pricing tools, managing client portfolios, and conducting market analysis. Proficient in Python with a proven track record of mentoring team members and executing complex transactions.</p>
            
            <div class="btn-group">
                <button onClick={openPDF} class="btn">Download CV</button>
                <a href="#contact" class="btn">Contact Me</a>
            </div>
        </div>

        <div class="about-img">
            <img class="profile-photo" src={require("../../src/images/profile_photo.jpg")} alt="Mathieu NUNES SANCHES"/>
            <img class="profile-face" src={require("../../src/images/profile-face.jpg")} alt="Mathieu NUNES SANCHES"/>
        </div>
</section>
};

export default About;