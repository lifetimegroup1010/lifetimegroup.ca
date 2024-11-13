// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS for styling
import logo from '../assets/main-logo.jpeg'; // Ensure the path is correct

function Header({ cartItemCount }) {
    return (
        <header className="header">
            <div className="logo-container">
                <Link to="/" className="logo-link">
                    <img src={logo} alt="Company Logo" className="logo-image" />
                </Link>
            </div>
            <nav className="navigation">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/cart" className="nav-link">
                    Cart <span className="cart-count">({cartItemCount})</span>
                </Link>
            </nav>
        </header>
    );
}

export default Header;
