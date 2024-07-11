// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';


const Footer = () => {
    return (
        <footer>
            <div className="footer-links">
                <h4>Useful Links</h4>
                <ul>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms-of-service">Terms of Services</a></li>
                </ul>
            </div>

            <div className="footer-contact">
                <h4>Contact Us</h4>
                <ul>
                    <li><a href="mailto:sabah.yusuf@outlook.com">Send us an email</a></li>
                    <li><a href="https://www.facebook.com/bnta">Facebook</a></li>
                    <li><a href="https://www.instagram.com/bnta">Instagram</a></li>
                </ul>
            </div>
            <div className="footer-copy">
                <p>© 2024 HomeChamp</p>
            </div>
        </footer>
    );
};

export default Footer;
