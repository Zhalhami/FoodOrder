import React, { useContext } from "react";
import { CartContext } from './CreateContext';
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
  // Accessing cart state and actions from CartContext
  const { cart, showCart, handleShowCart, handleCloseCart, handleIncrease, removeFromCart } = useContext(CartContext);
  

  // Calculate the total number of items in the cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="wrapper">
      {/* Passing cartCount and handleShowCart from context */}
      <Header cartCount={cartCount} handleShowCart={handleShowCart} />

      {/* Cart component with all cart-related props */}
      <Cart
        cartItems={cart}
        showCart={showCart}
        handleClose={handleCloseCart}
        handleIncrease={handleIncrease}
        removeFromCart={removeFromCart}
      />

      {/* Main content */}
      <div style={{ flex: '1', marginTop: '50px' }}>
        <Landing />
        <Features />
        <Card />
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
