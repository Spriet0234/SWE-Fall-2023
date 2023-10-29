import React, { useState, useContext } from "react";
import "../styles/Home.css";
import Item from "./Item";
import { CartContext } from "./CartContext";

const Home = () => {
  const { addToCart } = useContext(CartContext);

  // Dummy data for clothing items
  const [items, setItems] = useState([
    {
      id: 1,
      name: "T-Shirt",
      price: 19.99,
      image:
        "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=X5WLEp3EiqJ7eQqGQPW6Vx8l7joo56cTsCmSOIaAfPI=",
    },
    {
      id: 2,
      name: "Jeans",
      price: 49.99,
      image:
        "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=X5WLEp3EiqJ7eQqGQPW6Vx8l7joo56cTsCmSOIaAfPI=",
    },
    {
      id: 3,
      name: "Shorts",
      price: 15.99,
      image:
        "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=X5WLEp3EiqJ7eQqGQPW6Vx8l7joo56cTsCmSOIaAfPI=",
    },
    {
      id: 4,
      name: "Dress",
      price: 39.99,
      image:
        "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=X5WLEp3EiqJ7eQqGQPW6Vx8l7joo56cTsCmSOIaAfPI=",
    },
    {
      id: 5,
      name: "Turtle neck",
      price: 39.99,
      image:
        "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=X5WLEp3EiqJ7eQqGQPW6Vx8l7joo56cTsCmSOIaAfPI=",
    },
    {
      id: 6,
      name: "Chinos",
      price: 39.99,
      image:
        "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=X5WLEp3EiqJ7eQqGQPW6Vx8l7joo56cTsCmSOIaAfPI=",
    },
    // ... more items
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      // If search term is empty or just spaces, reset to all items
      setFilteredItems(items);
    } else {
      // Filter items based on the search term
      const result = items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(result);
    }
  };

  const onProductClick = (itemName) => {
    console.log(`${itemName} clicked!`);
    // Add additional logic here for when an item is clicked
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    console.log(`Added ${item.name} to the cart!`);
  };

  return (
    <div>
      <div className="home-page">
        <header className="home-header">
          <h1>Clothes Shopping Site</h1>
          <p>Your one-stop shop for the latest fashion!</p>
          <p>Free shipping on orders over $50!</p>
        </header>

        {/* <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a product..."
            aria-label="Product search"
            aria-describedby="search-button"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="search-button"
              onClick={handleSearch}
            >
              Enter
            </button>
          </div>
        </div> */}
      </div>
      <section style={{ display: "flex", flexWrap: "wrap", margin: 10 }}>
        {filteredItems.map((item) => (
          <div key={item.id} className="item-container">
            <Item
              image={item.image}
              name={item.name}
              price={item.price}
              onProductClick={() => onProductClick(item.name)}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
