// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import ScrollToTop from './components/ScrollToTop';

import './App.css';

function App() {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Function to add items to the cart
    const addToCart = (product, selectedOption, quantity) => {
        if (!selectedOption) {
            toast.error('Please select a size before adding to cart.');
            return;
        }

        console.log('Adding to cart:', product, selectedOption, quantity);

        const existingItem = cartItems.find(
            (item) =>
                item.id === product.id && item.selectedOption.size === selectedOption.size
        );

        if (existingItem) {
            setCartItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === product.id && item.selectedOption.size === selectedOption.size
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            );
            toast.info(`Quantity updated for ${product.name} (${selectedOption.size}).`);
        } else {
            setCartItems((prevItems) => [
                ...prevItems,
                { ...product, selectedOption, quantity }
            ]);
            toast.success(`${product.name} (${selectedOption.size}) added to cart!`);
        }
    };

    // Function to remove items from the cart
    const removeFromCart = (id, size) => {
        setCartItems((prevItems) =>
            prevItems.filter(
                (item) => item.id !== id || item.selectedOption.size !== size
            )
        );
        toast.info('Item removed from cart.');
    };

    // Function to update the quantity of items in the cart
    const updateCartItemQuantity = (id, size, newQuantity) => {
        if (newQuantity <= 0) return;
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.selectedOption.size === size
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <Header cartItemCount={cartItems.length} />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home addToCart={addToCart} />} />
                        <Route path="/about" element={<About />} />
                        <Route
                            path="/cart"
                            element={
                                <Cart
                                    cartItems={cartItems}
                                    removeFromCart={removeFromCart}
                                    updateCartItemQuantity={updateCartItemQuantity}
                                />
                            }
                        />
                        <Route
                            path="/product/:id"
                            element={<ProductDetail addToCart={addToCart} />}
                        />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </main>
                <Footer />
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </div>
        </Router>
    );
}

export default App;
