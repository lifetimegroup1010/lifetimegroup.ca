// src/components/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import './ProductDetail.css';

function ProductDetail({ addToCart }) {
    const { id } = useParams();
    const product = products.find((item) => item.id === parseInt(id));
    const [selectedOption, setSelectedOption] = useState(null);
    const [quantity, setQuantity] = useState(1);

    // Scroll to the top of the page when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) return <p>Product not found! <a href="/">Go back to Home</a></p>;

    const handleOptionChange = (e) => {
        const option = product.options.find(opt => opt.size === e.target.value);
        setSelectedOption(option);
    };

    const getPrice = () => (selectedOption ? selectedOption.price : 'N/A');

    return (
        <div className="product-detail">
            <div className="product-detail-left">
                <img src={product.image} alt={product.name} className="product-image" />

                <div className="size-selection">
                    <label htmlFor="size-select">Select Size:</label>
                    <select id="size-select" onChange={handleOptionChange} defaultValue="">
                        <option value="" disabled>Select Size</option>
                        {product.options.map((option, index) => (
                            <option key={index} value={option.size}>
                                {option.size} - {option.quantity}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="quantity-selection">
                    <label htmlFor="quantity-input">Quantity:</label>
                    <input
                        id="quantity-input"
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => {
                            const value = parseInt(e.target.value, 10);
                            if (!isNaN(value) && value > 0) {
                                setQuantity(value);
                            } else {
                                setQuantity(1); // Default to 1 if invalid
                            }
                        }}
                    />
                </div>

                <p className="product-price">Price: ${getPrice()}</p>

                <button
                    onClick={() => selectedOption && addToCart(product, selectedOption, quantity)}
                    disabled={!selectedOption}
                    className="add-to-cart-button"
                >
                    Add to Cart
                </button>
            </div>

            <div className="product-detail-right">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <ul>
                    {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProductDetail;
