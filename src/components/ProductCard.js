// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; // Import the CSS file for styling

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
            </Link>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
        </div>
    );
}

export default ProductCard;
