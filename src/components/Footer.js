// src/components/Footer.js

import React from 'react';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Company Information */}
                <div className="footer-section">
                    <h3>Life Time Group CA</h3>
                    <p>2179 Dunwin Dr, Unit 15, Mississauga, ON L5L 1X2</p>
                    <p>
                        Phone: <a href="tel:+16478844589">(647) 884-4589</a>
                    </p>
                    <p>
                        Email: <a href="mailto:info@lifetimegroup.ca">info@lifetimegroup.ca.com</a>
                    </p>
                </div>

                {/* Business Hours */}
                <div className="footer-section">
                    <h3>Business Hours</h3>
                    <ul>
                        <li>
                            <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
                        </li>
                        <li>
                            <strong>Saturday:</strong> 10:00 AM - 2:00 PM
                        </li>
                        <li>
                            <strong>Sunday:</strong> Closed
                        </li>
                    </ul>
                </div>

                {/* Social Media Links (Optional) */}
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <p>
                        <a href="" className="social-link" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                        <a href="" className="social-link" target="_blank" rel="noopener noreferrer">
                            Twitter
                        </a>
                        <a href="" className="social-link" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>
                    &copy; {currentYear} Life Time Group CA. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
