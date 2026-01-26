import React, { createContext, useContext, useState } from "react";

// 1️⃣ Create context
const CartContext = createContext();

// 2️⃣ Export custom hook
export const useCart = () => useContext(CartContext);

// 3️⃣ Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // stores cart items

  // Add product to cart
  const addToCart = (product) => {
    // avoid duplicates
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
