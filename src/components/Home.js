// src/components/Home.js
import React from 'react';
import HeroSection from './HeroSection';
import ProductList from './ProductList'; // Import ProductList to show products
import products from '../data/products'; // Import products data
import './Home.css';

// Import slide images
import posPaper from '../assets/pos-paper.jpeg';
import ads from '../assets/Ads.jpeg';
import aboutImage from '../assets/Bussines card.jpeg';

function Home({ addToCart }) {
    const slides = [
        { image: posPaper, caption: 'Best Quality POS Paper Rolls - Starting at $9.99' },
        { image: ads, caption: 'Promote Your Business with Our Advertising Solutions' },
        { image: aboutImage, caption: 'Discover Our Future Plans and Products' },
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
            </div>
        </div>
    );
}

export default Home;
