// src/components/About.js
import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-page">
            <div className="about-banner">
                <h1>About Us</h1>
            </div>

            <div className="about-content">
                <section className="company-overview">
                    <h2>Our Company</h2>
                    <p>
                        Welcome to our wholesale e-commerce platform, your trusted source for high-quality thermal
                        receipt rolls and custom-sized paper products. Based in Mississauga, Ontario, we are dedicated
                        to providing businesses with reliable and cost-effective solutions for their point-of-sale and
                        printing needs.
                    </p>
                </section>

                <section className="mission-vision">
                    <h2>Our Mission & Vision</h2>
                    <p>
                        Our mission is to streamline your business operations by offering top-notch thermal receipt
                        rolls and exceptional customer service. We envision becoming a leading supplier in the industry,
                        expanding our product range to meet the evolving needs of our clients.
                    </p>
                </section>

                <section className="future-plans">
                    <h2>Future Plans</h2>
                    <p>
                        As we grow, we plan to expand our inventory to include a variety of dry cleaning supplies such
                        as safety pins, collar garment covers, garment plastics, and tailor chalks. Stay tuned for these
                        new additions that will provide even more value to your business.
                    </p>
                </section>

                <section className="contact-info">
                    <h2>Contact Us</h2>
                    <p>
                        Have questions or need a custom quote? Feel free to reach out to us!
                    </p>
                    <ul>
                        <li>
                            <strong>Address:</strong> 2179 Dunwin Dr, Unit 15, Mississauga, ON L5L 1X2
                        </li>
                        <li>
                            <strong>Phone:</strong> <a href="tel:+16478844589">(647) 884-4589</a>
                        </li>
                        <li>
                            <strong>Email:</strong> <a href="mailto:info@lifetimegroupca.com">info@lifetimegroupca.com</a>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default About;
