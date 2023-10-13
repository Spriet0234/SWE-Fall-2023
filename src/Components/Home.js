import React, { useState } from "react";
import "../styles/Home.css";
import Item from "./Item";

const Home = () => {
  // Dummy data for clothing items
  const [items, setItems] = useState([
    {
      id: 1,
      name: "T-Shirt",
      price: 19.99,
      image:
        "https://i.pinimg.com/originals/90/fb/9d/90fb9d912e9663ca4ed575dee7dd73ac.jpg",
    },
    {
      id: 2,
      name: "Jeans",
      price: 49.99,
      image:
        "https://i.pinimg.com/originals/90/fb/9d/90fb9d912e9663ca4ed575dee7dd73ac.jpg",
    },
    {
      id: 1,
      name: "Shorts",
      price: 15.99,
      image:
        "https://i.pinimg.com/originals/90/fb/9d/90fb9d912e9663ca4ed575dee7dd73ac.jpg",
    },
    {
      id: 2,
      name: "Dress",
      price: 39.99,
      image:
        "https://i.pinimg.com/originals/90/fb/9d/90fb9d912e9663ca4ed575dee7dd73ac.jpg",
    },
    // ... more items
  ]);

  const onProductClick = (itemName) => {
    console.log(`${itemName} clicked!`);
    // Add additional logic here for when an item is clicked
  };

  return (
    <div>
      <div className="home-page">
        <header className="home-header">
          <h1>Clothing Store</h1>
          <p>Your one-stop shop for the latest fashion!</p>
        </header>
      </div>
      <section className="items-list">
        {items.map((item) => (
          <Item
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            onProductClick={() => onProductClick(item.name)}
          />
        ))}
      </section>
      <section>
        <div className="btn-group" role="group" aria-label="...">
          <button type="button" className="btn btn-default">1</button>
          <button type="button" className="btn btn-default">2</button>
          <button type="button" className="btn btn-default">3</button>
          <button type="button" className="btn btn-default">4</button>
          <button type="button" className="btn btn-default">5</button>
          <button type="button" className="btn btn-default">6</button>
          <button type="button" className="btn btn-default">7</button>
          <button type="button" className="btn btn-default">8</button>
          <button type="button" className="btn btn-default">9</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
