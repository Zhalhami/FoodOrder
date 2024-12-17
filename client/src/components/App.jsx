import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider, CartContext } from "./CreateContext"; // Import CartContext and CartProvider
import Home from "./Home";
import Gallery from "./Gallery";
import Traning from "./Traning";
import ContactMain from "./ContactMain";
import About from "./About";
import MenuPlan from "./MenuPlan";
import Login from "./Login";
import Signup from "./Signup";
import Cart from "./Cart";
import Admin from "./Admin";

function App() {
  const [showCart, setShowCart] = useState(false); // State for showing the cart

  // Get cart state and functions from CartContext
  const { cart, addToCart, removeFromCart, isCartVisible, toggleCartVisibility, clearCart } = useContext(CartContext);

  // Handle opening and closing of the cart
  const handleOpenCart = () => setShowCart(true);

  // Handle increasing item quantity
  const handleIncrease = (item) => addToCart(item, 1);


  return (
    <Router>
      <div>
        {/* Cart button in the header */}
        {/* <button onClick={handleOpenCart}>
          Open Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
        </button> */}

        {/* Cart component */}
        {isCartVisible && (
          <Cart
          cartItems={cart}
          showCart={isCartVisible}
          handleClose={toggleCartVisibility}
          handleIncrease={handleIncrease}
          removeFromCart ={removeFromCart}
          clearCart={clearCart}
        />

        )}
        

        {/* Define the routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu-plan" element={<MenuPlan />} />
          <Route path="/training" element={<Traning />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactMain />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

function AppWrapper() {
  return (
    <CartProvider> {/* Move CartProvider to wrap App */}
      <App />
    </CartProvider>
  );
}

export default AppWrapper;
