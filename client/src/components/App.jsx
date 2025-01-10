import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider, CartContext } from "./CreateContext"; // Import CartContext and CartProvider
import Home from "./Home";
import Gallery from "./Gallery";
import Traning from "./Traning";
import ContactMain from "./ContactMain";
import About from "./About";
import MenuPlan from "./MenuPlan";
import AuthForm from "./AuthForm";
import Cart from "./Cart";
import Admin from "./Admin";
import PrivateRoute from "../PrivateRoutes";

function App() {
  const [showCart, setShowCart] = useState(false);
  const { cart, addToCart, removeFromCart, isCartVisible, toggleCartVisibility, clearCart } = useContext(CartContext);
  const handleOpenCart = () => setShowCart(true);
  const handleIncrease = (item) => addToCart(item, 1);


  return (
    <Router>
      <div>
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu-plan" element={<MenuPlan />} />
          <Route path="/training" element={<Traning />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactMain />} />
          <Route path="/auth" element={<AuthForm/>} />
          <Route path="/admin" element={<PrivateRoute> <Admin /> </PrivateRoute>}/>
        </Routes>
      </div>
    </Router>
  );
}

function AppWrapper() {
  return (
    <CartProvider>
      <App />
    </CartProvider>
  );
}

export default AppWrapper;
