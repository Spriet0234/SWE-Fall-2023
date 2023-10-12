import React from "react";
import "../styles/Item.css"; // Assuming you've renamed the CSS file to Item.css

const Item = ({ image, name, price, onProductClick }) => {
  return (
    <div className="item" onClick={onProductClick}>
      <img src={image} alt={name} className="item-image" />
      <h3 className="item-name">{name}</h3>
      <p className="item-price">${price}</p>{" "}
      <div className="cart-button">Add to Cart</div>
    </div>
  );
};

export default Item;
