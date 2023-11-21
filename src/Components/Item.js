import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Item.css";
import { CartContext } from "./CartContext";

import "../styles/bootstrap.min.css";
import "../styles/font-awesome.min.css";
import "../styles/elegant-icons.css";
import "../styles/magnific-popup.css";
import "../styles/nice-select.css";
import "../styles/owl.carousel.min.css";
import "../styles/slicknav.min.css";
import "../styles/style.css";

const Item = ({
  id,
  image,
  name,
  price,
  description,
  quantity,
  summary,
  inCart,
  size,
  uniqueId,
}) => {
  // Added 'description' prop
  const navigate = useNavigate();
  const { setCartItems } = useContext(CartContext);

  const addToCart = () => {
    const itemId = new Date().getTime();
    setCartItems((prevItems) => [
      ...prevItems,
      {
        id: itemId,
        name,
        price,
        description,
        quantity,
        image,
        inCart,
        size,
      },
    ]);
  };

  const goToDetails = () => {
    navigate(`/item-details/${id}`, {
      state: {
        itemData: {
          id,
          image,
          name,
          price,
          description,
          quantity,
          inCart,
          size,
          uniqueId,
        }, // Pass the full item data
      },
    });
  };
  if (summary) {
    return (
      <div className="product__item">
        <img src={image} alt={name} className="item-image" />
        <h3 className="product__item__text">{name}</h3>
        <p className="item-description">{description}</p>
        <p style={{}}>Size: {size}</p>
        <p className="item-price">
          ${price.toFixed(2)} x {quantity}
        </p>

        <p className="item-total">${(price * quantity).toFixed(2)}</p>
      </div>
    );
  }

  return (
    <div className="product__item">
      <div onClick={goToDetails}>
        <img src={image} alt={name} className="item-image" />
        <h3 className="product__item__text">{name}</h3>
        <p className="item-price">${price.toFixed(2)}</p>
      </div>
      {/* <div className="cart-button" onClick={addToCart}>
        Add to Cart
      </div> */}
    </div>
  );
};

export default Item;
