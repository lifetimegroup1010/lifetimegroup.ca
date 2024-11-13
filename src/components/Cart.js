// src/components/Cart.js
import React from 'react';
import './Cart.css';

function Cart({ cartItems, removeFromCart, updateCartItemQuantity }) {
    const calculateTotalPrice = () => {
        return cartItems
            .reduce((acc, item) => {
                if (item.selectedOption) {
                    const itemTotal = item.selectedOption.price * item.quantity;
                    return acc + itemTotal;
                }
                return acc;
            }, 0)
            .toFixed(2);
    };

    const handleQuantityChange = (e, item) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (newQuantity > 0) {
            updateCartItemQuantity(item.id, item.selectedOption.size, newQuantity);
        }
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <div className="item-info">
                                <p>
                                    <strong>{item.name}</strong>{' '}
                                    {item.selectedOption ? `(${item.selectedOption.size})` : ''}
                                </p>
                                <div className="quantity-control">
                                    <label htmlFor={`quantity-${index}`}>Quantity:</label>
                                    <input
                                        type="number"
                                        id={`quantity-${index}`}
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(e, item)}
                                    />
                                </div>
                                {item.selectedOption && (
                                    <p>
                                        Price per Unit: ${item.selectedOption.price.toFixed(2)}
                                    </p>
                                )}
                                {item.selectedOption && (
                                    <p>
                                        Total: $
                                        {(item.selectedOption.price * item.quantity).toFixed(2)}
                                    </p>
                                )}
                            </div>
                            <button
                                className="remove-button"
                                onClick={() =>
                                    removeFromCart(item.id, item.selectedOption.size)
                                }
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h3>Total Price: ${calculateTotalPrice()}</h3>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
