import React, { useContext } from "react";
import { CartContext } from './CreateContext';

function Header() {
  const { cart, toggleCartVisibility, isCartVisible } = useContext(CartContext);

  // Calculate the total cart count
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <h1><i className="fas fa-hamburger"></i> Foodorder</h1>
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/menu-plan">Menus</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/training">Training</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/gallery">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
          <div style={{ position: "relative" }}>
            <button type="button" className="btn" onClick={toggleCartVisibility}>
              <i className="fa-solid fa-cart-shopping fa-beat fa-xl"></i>
              {cartCount > 0 && (
                <div 
                  className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                  style={{
                    color: "white",
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    transform: "translate(25%, 25%)"
                  }}
                >
                  {cartCount}
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
