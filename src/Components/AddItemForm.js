import React, { useState } from "react";

const AddItemForm = ({ addItem }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    // Reset form
    setName("");
    setPrice(); // Should be setPrice(0) or setPrice('')
    setDescription("");
    setQuantity(1);
    setImage(""); // Previously setImage() without a value

    e.preventDefault();
    // Create a new item object
    const newItem = { name, price, description, quantity, image };
    // This is where you would handle updating the items array.
    addItem(newItem);

    // Reset form
    setName("");
    setPrice();
    setDescription("");
    setQuantity(1);
    setImage("");
  };

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
