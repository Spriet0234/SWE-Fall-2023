import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Step 1: Import the useNavigate hook
import "../styles/Search.css";

export default function SearchBar({ items }) {
  const navigate = useNavigate(); // Step 2: Use the hook to get the navigate function

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
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredItems(filteredResult);
    navigate("/search-comp", { state: { filteredItems: filteredResult } });
  };

  useEffect(() => {
    // Call handleSearch when the component is mounted
    handleSearch();
  }, []);

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
