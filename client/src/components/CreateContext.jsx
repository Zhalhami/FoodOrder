import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage on initialization
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartVisible, setCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setCartVisible((prev) => !prev);
  };

  const addToCart = (food, quantityChange) => {
    if (!food) return; // Ensure food is valid
    
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === food.name);
      if (existingItem) {
        const updatedQuantity = existingItem.quantity + quantityChange;
        if (updatedQuantity <= 0) {
          // Remove item if quantity becomes 0 or less
          return prevCart.filter((item) => item.name !== food.name);
        }
        // Update item quantity
        return prevCart.map((item) =>
          item.name === food.name
            ? { ...item, quantity: updatedQuantity }
            : item
        );
      }
      // Add new item to the cart if quantityChange > 0
      if (quantityChange > 0) {
        return [...prevCart, { ...food, quantity: quantityChange }];
      }
      return prevCart; // If quantityChange <= 0 for non-existing item, do nothing
    });
  };

  const removeFromCart = (food, quantity = 1) => {
    addToCart(food, -quantity);
  };

  const clearCart = () => setCart([]);

  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.quantity * (item.price || item.amount), 0);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalItems,
        getTotalPrice,
        isCartVisible,
        toggleCartVisibility,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
