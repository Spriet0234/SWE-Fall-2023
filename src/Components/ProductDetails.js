import React from "react";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const ItemDetails = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // this will navigate back
  };

  const { id } = useParams();

  // Fetch the item details based on the ID from useParams
  // For this example, let's use a hardcoded item
  const item = {
    id: id, // Use the id from useParams
    name: "Sample Item",
    image: "url_to_image",
    price: 49.99,
    description: "This is a detailed description of the item.",
  };

  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>${item.price}</p>
      <p>{item.description}</p>

      <div>
        <button onClick={goBack}>Back</button>
        {/* ... other component content ... */}
      </div>
    </div>
  );
};

export default ItemDetails;
