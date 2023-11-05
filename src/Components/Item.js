import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Item.css";
import { CartContext } from "./CartContext";

const Item = ({ id, image, name, price, description, quantity }) => {
  // Added 'description' prop
  const navigate = useNavigate();
  const { setCartItems } = useContext(CartContext);

  const addToCart = () => {
    const itemId = new Date().getTime();
    setCartItems((prevItems) => [
      ...prevItems,
      { id: itemId, name, price, description, quantity, image },
    ]);
  };

  const goToDetails = () => {
    navigate(`/item-details/${id}`, {
      state: {
        itemData: { id, image, name, price, description, quantity }, // Pass the full item data
      },
    });
  };

  return (
    <div className="item">
      <div onClick={goToDetails}>
        <img src={image} alt={name} className="item-image" />
        <h3 className="item-name">{name}</h3>
        <p className="item-price">${price.toFixed(2)}</p>
      </div>
      <div className="cart-button" onClick={addToCart}>
        Add to Cart
      </div>
    </div>
  );
};

export default Item;
