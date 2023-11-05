import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // If you're using react-router v6+

const AddItemForm = ({ addItem }) => {
  const navigate = useNavigate(); // If you're using react-router v6+

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState("");
  const [itemAdded, setItemAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new item object with the current state values
    const newItem = { name, price, description, quantity, image };
    // This is where you would handle updating the items array.
    addItem(newItem);
    // Set the item added flag to true to switch to the confirmation screen
    setItemAdded(true);
    // Do not reset form here, it should be done after confirmation or when going back to home
  };

  const handleBackToHome = () => {
    // Reset form and navigate back to home
    setName("");
    setPrice(0);
    setDescription("");
    setQuantity(1);
    setImage("");
    setItemAdded(false); // Make sure to reset the added state as well
    navigate("/"); // Adjust the route as needed for your home page
  };

  if (itemAdded) {
    return (
      <div>
        <h2>Your item has been added!</h2>
        <div>
          <p>Name: {name}</p>
          <p>Price: ${price.toFixed(2)}</p>
          <p>Description: {description}</p>
          <p>Quantity: {quantity}</p>
          <img src={image} alt={name} />
        </div>
        <button onClick={handleBackToHome}>Go Back to Home</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Item</h2>
      <div>
        <label htmlFor="itemName">Name:</label>
        <input
          type="text"
          id="itemName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="itemPrice">Price:</label>
        <input
          type="text"
          id="itemPrice"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          required
          pattern="^[0-9]*\.?[0-9]*$"
          title="Please enter a valid number."
        />
      </div>
      <div>
        <label htmlFor="itemDescription">Description:</label>
        <input
          id="itemDescription"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="itemQuantity">Quantity:</label>
        <input
          type="text"
          id="itemQuantity"
          value={quantity}
          pattern="^[0-9]*\.?[0-9]*$"
          onChange={(e) => setQuantity(e.target.value)}
          required
          min="1"
        />
      </div>
      <div>
        <label htmlFor="itemImage">Image URL:</label>
        <input
          type="text"
          id="itemImage"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
