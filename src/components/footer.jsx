import React from "react";



function Footer() {
    return <footer class="footer">
            <div class="footer-items">
                <p><span>© Mathieu NUNES SANCHES / {new Date().getFullYear()}</span></p>

                <div className="social">
                    <a href="https://github.com/MathieuNS" target="_blank"> <i class="bx bxl-github"></i></a>
                    <a href="https://www.linkedin.com/in/mathieuns/" target="_blank"> <i class="bx bxl-linkedin"></i></a>
                </div>

            </div>
        
            </footer>
}

export default Footer;