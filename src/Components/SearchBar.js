import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Step 1: Import the useNavigate hook
import "../styles/Search.css";

export default function SearchBar() {
  const navigate = useNavigate(); // Step 2: Use the hook to get the navigate function

  const [items, setItems] = useState([
    {
      id: 1,
      name: "T-Shirt",
      price: 18.99,
      description:
        "A classic wardrobe staple, this t-shirt is made from breathable, 100% cotton fabric with a ribbed crew neck and short sleeves. Its timeless design ensures comfort and versatility for everyday wear.",
      image:
        "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=X5WLEp3EiqJ7eQqGQPW6Vx8l7joo56cTsCmSOIaAfPI=",
    },
    {
      id: 2,
      name: "Jeans",
      price: 49.99,
      description:
        "These jeans offer a sleek and slimming fit, thanks to their stretchy denim fabric and deep indigo wash. The quality craftsmanship and classic design make them a reliable choice for your casual and semi-formal occasions.",
      image:
        "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=X5WLEp3EiqJ7eQqGQPW6Vx8l7joo56cTsCmSOIaAfPI=",
    },
    {
      id: 3,
      name: "Shorts",
      price: 15.99,
      description:
        "Embrace warm weather with these comfortable shorts. Crafted from lightweight, durable cotton, they feature a relaxed fit, side pockets, and a versatile design that's perfect for outdoor adventures or leisurely days.",
      image:
        "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=X5WLEp3EiqJ7eQqGQPW6Vx8l7joo56cTsCmSOIaAfPI=",
    },
    {
      id: 4,
      name: "Dress",
      price: 39.99,
      description:
        "Elevate your style with this elegant dress, boasting a figure-flattering A-line silhouette, delicate lace detailing, and a modest V-neck. Whether for special occasions or casual gatherings, this dress effortlessly combines sophistication and charm.",
      image:
        "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=X5WLEp3EiqJ7eQqGQPW6Vx8l7joo56cTsCmSOIaAfPI=",
    },
    {
      id: 5,
      name: "Turtle neck",
      price: 39.99,
      description:
        "Stay cozy and stylish in this turtleneck sweater. Made from soft, breathable fabric, it features a ribbed collar and cuffs for extra warmth. The classic turtleneck design adds a touch of timeless elegance to your winter wardrobe.",
      image:
        "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=X5WLEp3EiqJ7eQqGQPW6Vx8l7joo56cTsCmSOIaAfPI=",
    },
    {
      id: 6,
      name: "Chinos",
      price: 39.99,
      description:
        "Achieve a polished look with these chinos, crafted from high-quality cotton twill. Their tailored fit, clean lines, and versatile khaki color make them a reliable choice for both business-casual and smart-casual attire.",
      image:
        "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=X5WLEp3EiqJ7eQqGQPW6Vx8l7joo56cTsCmSOIaAfPI=",
    },
    // ... more items
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = () => {
    let filteredResult;
    if (searchTerm.trim() === "") {
      // If search term is empty or just spaces, reset to all items
      filteredResult = items;
    } else {
      // Filter items based on the search term in both name and description
      filteredResult = items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    console.log(filteredResult);
    setFilteredItems(filteredResult);
    navigate("/search-comp", { state: { filteredItems: filteredResult } });
  };

  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search for a product..."
      aria-label="Product search"
      aria-describedby="search-button"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === "Enter") handleSearch();
      }}
    />
  );
}
