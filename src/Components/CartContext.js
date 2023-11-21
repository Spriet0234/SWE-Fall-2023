import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [userName, setUserName] = useState("");

  const setUser = (u) => {
    setUserName(u);
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Generate a unique ID for the new cart item
      const uniqueId = uuidv4();
      const newItemWithUniqueId = { ...item, uniqueId };

      // Add the new item with a unique ID to the cart
      return [...prevItems, newItemWithUniqueId];
    });
  };

  const removeFromCart = (uniqueId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.uniqueId !== uniqueId)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        userName,
        setUser,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
