import React from 'react'
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-info">
                <h1>Nahuel Grijalba</h1>
                <p>Based in your city</p>
            </div>
            <div className="footer-contact">
                <h3>Contact me</h3>
                <p>And lets get down to work</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Design By Nahuel Grijalba
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/nahuel-grijalba/" target="_blank" without rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/nahug07" target="_blank" without rel="noreferrer">
                        <i className="fab fa-github-square github-square"></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" without rel="noreferrer">
                        <i class="fab fa-whatsapp whatsapp"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
