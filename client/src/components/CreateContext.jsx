import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartVisible, setCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setCartVisible((prev) => !prev);
  };

  const addToCart = (food, quantityChange) => {
    if (!food) return;
  
    setCart((prevCart) => {
      // Find the existing item by name
      const existingItem = prevCart.find((item) => item.name === food.name);
  
      if (existingItem) {
        const updatedQuantity = existingItem.quantity + quantityChange;
  
        // Remove item if quantity is reduced to zero or below
        if (updatedQuantity <= 0) {
          return prevCart.filter((item) => item.name !== food.name);
        }
  
        // Update quantity for the existing item
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
  
      // Do nothing if quantityChange <= 0 for non-existing item
      return prevCart;
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
