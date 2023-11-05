import React, { useState } from "react";

const AddItemForm = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new item object
    const newItem = { name, price, description, quantity, image };
    // This is where you would handle updating the items array.
    onAddItem(newItem);

    // Reset form
    setName("");
    setPrice("");
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
          type="number"
          id="itemPrice"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="itemDescription">Description:</label>
        <textarea
          id="itemDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="itemQuantity">Quantity:</label>
        <input
          type="number"
          id="itemQuantity"
          value={quantity}
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
