import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CartContext } from "./CartContext"; // Import CartContext
import "../styles/ProductDetails.css";

const ItemDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [size, setSize] = useState("medium"); // Default size set to 'medium'
  const { setCartItems } = useContext(CartContext); // Use CartContext

  const item = location.state?.itemData || {
    id: "",
    name: "Item not found",
    image: "",
    price: 0,
    description: "Description not available",
    quantity: 0,
  };

  const addToCart = () => {
    // Add the item with the selected size to the cart
    setCartItems((prevItems) => [...prevItems, { ...item, size }]);
    //alert("Item added to cart");
  };

  const handleCheckout = () => {
    // Navigate to checkout page or implement checkout functionality
    alert("Proceed to checkout");
    // navigate('/checkout'); // Example: navigate to a checkout page
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="product-details">
      <img className="product-image" src={item.image} alt={item.name} />
      <h2 className="product-title">{item.name}</h2>
      <p className="product-price">${item.price.toFixed(2)}</p>
      <p className="product-description">{item.description}</p>
      <p className="product-availability">{`Available: ${item.quantity}`}</p>
      <div className="size-selector">
        <label>
          Size:
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
      </div>
      <div className="action-buttons">
        <button className="back-button" onClick={goBack}>
          Back
        </button>
        <button className="cart-button" onClick={addToCart}>
          Add to Cart
        </button>
        {/* <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button> */}
      </div>
    </div>
  );
};

export default ItemDetails;
