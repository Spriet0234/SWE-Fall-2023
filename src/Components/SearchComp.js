import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Item from "./Item";

export default function SearchComp() {
  const location = useLocation();
  const initialItems = location.state?.filteredItems || [];

  const [filteredItems, setFilteredItems] = useState(initialItems);
  const [priceFilter, setPriceFilter] = useState(""); // "low-to-high" or "high-to-low"
  const [availableFilter, setAvailableFilter] = useState(false); // true for available items only, false for all

  useEffect(() => {
    if (location.state?.filteredItems) {
      setFilteredItems(location.state.filteredItems);
    }
  }, [location.state]);

  // You can now use the filteredItems in your component
  const onProductClick = (itemName) => {
    console.log(`${itemName} clicked!`);
    // Add additional logic here for when an item is clicked
  };
  console.log(filteredItems);
  useEffect(() => {
    let newFilteredItems = [...initialItems];

    if (priceFilter === "low-to-high") {
      newFilteredItems.sort((a, b) => a.price - b.price);
    } else if (priceFilter === "high-to-low") {
      newFilteredItems.sort((a, b) => b.price - a.price);
    }

    if (availableFilter) {
      newFilteredItems = newFilteredItems.filter((item) => item.available);
    }

    setFilteredItems(newFilteredItems);
  }, [priceFilter, availableFilter]);
  function toggleDropdown() {
    const dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.style.display =
      dropdownContent.style.display === "none" ? "block" : "none";
  }

  return (
    <div>
      <div>
        <label>Sort by price:</label>
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={availableFilter}
            onChange={(e) => setAvailableFilter(e.target.checked)}
          />
          Show available items only
        </label>
      </div>
      <div>Results:</div>
      <section style={{ display: "flex", flexWrap: "wrap", margin: 10 }}>
        {filteredItems.map((item) => (
          <div key={item.id} className="item-container">
            <Item
              image={item.image}
              name={item.name}
              price={item.price}
              description={item.description}
              quantity={item.quantity}
              onProductClick={() => onProductClick(item.name)}
            />
          </div>
        ))}
      </section>
    </div>
  );
}
