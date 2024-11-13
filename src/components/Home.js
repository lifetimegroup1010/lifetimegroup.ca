// src/components/Home.js
import React from 'react';
import HeroSection from './HeroSection';
import ProductList from './ProductList'; // Import ProductList to show products
import products from '../data/products'; // Import products data
import './Home.css';

import posPaper from '../assets/pos-paper.jpeg';
import ads from '../assets/Ads.jpeg';
import aboutImage from '../assets/Bussines card.jpeg';
import ads4 from '../assets/ads4.jpeg'; // New garbage bag image

function Home({ addToCart }) {
    const slides = [
        { image: posPaper, caption: 'Best Quality T-shirt Bag' },
        { image: ads, caption: 'Best Quality Thermal Rolls' },
        { image: aboutImage, caption: 'Discover Our Future Plans and Products' },
        { image: ads4, caption: 'Durable Garbage & Recycle Bags' } // New slide
    ];

    return (
        <div className="home">
            <div className="home-background"></div> {/* Background Image Layer */}
            <div className="home-content">
                <HeroSection slides={slides} />
                <h2 className="home-product-title">Our Products</h2> {/* Bold Title */}
                <div className="home-product-list">
                    <ProductList products={products} addToCart={addToCart} /> {/* Pass products data */}
                </div>
                {/* Inquiry Form Section */}
                <div className="inquiry-form">
                    <h2 className="inquiry-title">Inquiry Form</h2> {/* Form Title */}
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSehg4S8PcLJBjhU4bwMMTbvFmcNW52Gn-2ZFHCQOCjPgRsC2w/viewform?embedded=true"
                        width="100%"
                        height="600"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="Inquiry Form"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default Home;
