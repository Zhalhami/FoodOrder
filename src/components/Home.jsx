import React, { useState } from "react";
import Header from "./Header";
import Cart from "./Cart";
import Landing from "./Landing";
import Features from "./Features";
import Card from "./Card";
import Mission from "./Mission";
import Carousel from "./Carousel";
import Sponsor from "./Sponsor";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const addToCart = (food, quantity = 1) => {
        setCart(prevCart => {
            const itemInCart = prevCart.find(item => item.name === food.name);
            if (itemInCart) {
                return prevCart.map(item =>
                    item.name === food.name
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                ).filter(item => item.quantity > 0);
            } else {
                return [...prevCart, { ...food, quantity }];
            }
        });
    };

    const handleIncrease = (food) => {
        addToCart(food, 1);
    };

    const removeFromCart = (food, quantity = 1) => {
        setCart(prevCart => {
            const itemInCart = prevCart.find(item => item.name === food.name);
            if (itemInCart.quantity > 1) {
                return prevCart.map(item =>
                    item.name === food.name
                        ? { ...item, quantity: item.quantity - quantity }
                        : item
                );
            } else {
                return prevCart.filter(item => item.name !== food.name);
            }
        });
    };

    const handleCloseCart = () => setShowCart(false);
    const handleShowCart = () => setShowCart(true);

    return (
        <div className="wrapper">
            <Header cartCount={cart.reduce((total, item) => total + item.quantity, 0)} handleShowCart={handleShowCart} />
            <Cart
                cartItems={cart}
                showCart={showCart}
                handleClose={handleCloseCart}
                handleIncrease={handleIncrease}
                removeFromCart={removeFromCart}
            />
            <div style={{flex:'1', marginTop:'80px'}}>
            <Landing />
            <Features />
            <Card addToCart={addToCart} cartItems={cart} />
            <Mission />
            <Carousel />
            <Sponsor />
            <Contact />
            <Footer />
            </div>
        </div>
    );
}

export default Home;
