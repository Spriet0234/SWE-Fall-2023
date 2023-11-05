import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Make sure to install this library with npm install uuid

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const itemToAdd = {
      ...item,
      id: uuidv4(), // This should generate a unique id for each item
    };
    console.log("Adding item with ID:", itemToAdd); // Log the ID of the new item
    setCartItems((prevItems) => [...prevItems, itemToAdd]);
  };

  // Function to remove items from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Make sure to include all necessary values and functions here
  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
