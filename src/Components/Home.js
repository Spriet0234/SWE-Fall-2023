import React, { useState, useContext } from "react";
import "../styles/Home.css";
import Item from "./Item";
import { CartContext } from "./CartContext";

const Home = ({ items }) => {
  const { addToCart } = useContext(CartContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const onProductClick = (itemName) => {
    console.log(`${itemName} clicked!`);
    // Add additional logic here for when an item is clicked
  };

  return (
    <div>
      <div className="home-page">
        <header className="home-header">
          <h1>Clothes Shopping Site</h1>
          <p>Your one-stop shop for the latest fashion!</p>
          <p>Free shipping on orders over $50!</p>
        </header>
      </div>
      <section style={{ display: "flex", flexWrap: "wrap", margin: 10 }}>
        {filteredItems.map((item) => (
          <div key={item.id} className="item-container">
            <Item
              image={item.image}
              name={item.name}
              price={item.price}
              description={item.description}
              quantity={item.quantity}
              onClick={() => onProductClick(item.description)}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
