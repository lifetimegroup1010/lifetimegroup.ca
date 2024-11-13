// src/components/HeroSection.js
import React, { useState, useEffect } from 'react';
import './HeroSection.css';

function HeroSection({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = slides.length;

    // Automatic slideshow effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
        }, 5000); // Slide changes every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [length]);

    // Manual controls
    const nextSlide = () => setCurrentIndex((currentIndex + 1) % length);
    const prevSlide = () => setCurrentIndex((currentIndex - 1 + length) % length);

    return (
        <div className="hero-section">
            <button className="arrow left-arrow" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="arrow right-arrow" onClick={nextSlide}>
                &#10095;
            </button>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
                >
                    {index === currentIndex && (
                        <>
                            <img
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                className="hero-image"
                            />
                            {slide.caption && (
                                <div className="hero-caption">
                                    <h2>{slide.caption}</h2>
                                </div>
                            )}
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default HeroSection;
