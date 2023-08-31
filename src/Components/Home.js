import React, { useState } from "react";
import "../styles/Home.css";

const Home = () => {
  // Dummy data for clothing items
  const [items, setItems] = useState([
    { id: 1, name: "T-Shirt", price: 19.99, image: "path/to/image1.jpg" },
    { id: 2, name: "Jeans", price: 49.99, image: "path/to/image2.jpg" },
    // ... more items
  ]);

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to ClothingStore</h1>
        <p>Your one-stop shop for the latest fashion!</p>
      </header>
      <section className="items-list">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>${item.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
