import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">LOGO</div> 
                <p>Shaping future business leaders with technological expertise</p>
                <div className="social-icons">
                    <a href="#">🔗</a>
                    <a href="#">🔗</a>
                    <a href="#">🔗</a>
                </div>
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Faculty</a></li>
                        <li><a href="#">Admissions</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p>📍 123 University Avenue, City, State 12345</p>
                    <p>📞 +1 (555) 123-4567</p>
                    <p>📧 info@bbaca.edu</p>
                </div>
            </div>
            <p className="footer-bottom">
               
                © 2024 BBA(CA) Department. All rights reserved.  <br/>
Developed by Final Year TYBBA(CA) Students, Batch 2025.

            </p>
        </footer>
    );
}

export default Footer;
