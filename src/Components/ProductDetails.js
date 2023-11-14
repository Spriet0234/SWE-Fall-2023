import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "../styles/ProductDetails.css";

const ItemDetails = () => {
  const navigate = useNavigate();
  const location = useLocation(); // use the useLocation hook

  const goBack = () => {
    navigate(-1); // this will navigate back
  };

  // Retrieve the item data passed as state
  const item = location.state?.itemData || {
    id: "", // default values to avoid potential errors if state isn't passed
    name: "Item not found",
    image: "",
    price: 0,
    description: "Description not available",
  };
  console.log(item.description);

  return (
    <div className="product-details">
      <img className="product-image" src={item.image} alt={item.name} />
      <h2 className="product-title">{item.name}</h2>
      <p className="product-price">${item.price.toFixed(2)}</p>
      <p className="product-description">{item.description}</p>
      <p className="product-availability">{`Available: ${item.quantity}`}</p>
      <div className="action-buttons">
        <button className="back-button" onClick={goBack}>
          Back
        </button>
        {/* ... other component content ... */}
      </div>
    </div>
  );
};

export default ItemDetails;
