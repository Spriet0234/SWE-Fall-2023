import React from "react";
import "../styles/MensClothing.css";
import Item from "./Item";

const MensClothing = () => {
  const mensProducts = [
    {
      name: "Shirt",
      price: 29.99,
      image:
        "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=X5WLEp3EiqJ7eQqGQPW6Vx8l7joo56cTsCmSOIaAfPI=",
    },
    {
      name: "Jeans",
      price: 49.99,
      image:
        "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=X5WLEp3EiqJ7eQqGQPW6Vx8l7joo56cTsCmSOIaAfPI=",
    },
    // Add more products as needed
  ];

  return (
    <div className="mens-clothing-container">
      <h1>Men's Clothing</h1>
      <div className="mens-products">
        {mensProducts.map((product) => (
          <Item
            key={product.name}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MensClothing;
