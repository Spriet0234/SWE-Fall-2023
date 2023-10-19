import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Item.css";
import { CartContext } from "./CartContext";

const Item = ({ id, image, name, price }) => {
  const { setCartItems } = useContext(CartContext);

  const addToCart = (event) => {
    event.stopPropagation(); // This prevents navigation when adding to cart
    const itemId = new Date().getTime();
    setCartItems((prevItems) => [...prevItems, { id: itemId, name, price }]);
  };

  return (
    <Link
      to={`/item-details/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="item">
        <img src={image} alt={name} className="item-image" />
        <h3 className="item-name">{name}</h3>
        <p className="item-price">${price}</p>
        <div className="cart-button" onClick={addToCart}>
          Add to Cart
        </div>
      </div>
    </Link>
  );
};

export default Item;
