import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Step 1: Import the useNavigate hook
import "../styles/Search.css";

export default function SearchBar() {
  const navigate = useNavigate(); // Step 2: Use the hook to get the navigate function

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
    let filteredResult;
    if (searchTerm.trim() === "") {
      // If search term is empty or just spaces, reset to all items
      filteredResult = items;
    } else {
      // Filter items based on the search term
      filteredResult = items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

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
