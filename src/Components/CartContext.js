import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Make sure to install this library with npm install uuid

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [userName, setUserName] = useState("");

  const setUser = (u) => {
    setUserName(u);
  };

  const addToCart = (newItem) => {
    setCartItems((prevItems) => {
      console.log("Attempting to add item:", newItem);

      // Check if the item already exists in the cart
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        // If the item exists, increment the 'inCart' quantity
        const updatedCartItems = prevItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, inCart: item.inCart + 1 }
            : item
        );
        console.log(
          "Item already in cart, incremented quantity:",
          updatedCartItems
        );
        return updatedCartItems;
      } else {
        // If the item does not exist, add it with 'inCart' set to 1
        const updatedCartItems = [...prevItems, { ...newItem, inCart: 1 }];
        console.log("Item not in cart, added new item:", updatedCartItems);
        return updatedCartItems;
      }
    });
  };

  // Function to remove items from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Make sure to include all necessary values and functions here
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
