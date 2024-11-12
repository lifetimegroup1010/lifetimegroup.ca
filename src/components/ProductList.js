// src/components/ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

function ProductList({ products }) {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <Link to={`/product/${product.id}`} className="product-link">
                        <img src={product.image} alt={product.name} className="product-image" />
                    </Link>
                    <h3>{product.name}</h3>
                    <Link to={`/product/${product.id}`} className="view-details-button">
                        View Details
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
