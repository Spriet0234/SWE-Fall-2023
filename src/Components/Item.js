// Item.js
import React, { useContext } from "react";
import "../styles/Item.css";
import { CartContext } from "./CartContext"; // adjust the import path as necessary

const Item = ({ image, name, price }) => {
  const { setCartItems } = useContext(CartContext);

  const addToCart = () => {
    const itemId = new Date().getTime(); // generates a unique ID based on the current time
    setCartItems((prevItems) => [...prevItems, { id: itemId, name, price }]);
  };

  return (
    <div className="item">
      <img src={image} alt={name} className="item-image" />
      <h3 className="item-name">{name}</h3>
      <p className="item-price">${price}</p>
      <div className="cart-button" onClick={addToCart}>
        Add to Cart
      </div>
    </div>
  );
};

export default Item;
