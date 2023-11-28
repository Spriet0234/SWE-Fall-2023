import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Item from "./Item";
import SearchResults from "./SearchBar";
import "../styles/SearchComp.css";

export default function SearchComp({ items }) {
  const location = useLocation();
  const initialItems = location.state?.filteredItems || [];

  const [filteredItems, setFilteredItems] = useState(items);
  const [priceFilter, setPriceFilter] = useState("...");
  const [availableFilter, setAvailableFilter] = useState(false);




  useEffect(() => {
    if (location.state?.filteredItems) {
      setFilteredItems(location.state.filteredItems);
    }
    else
    {
      setInitialItems();
    }
  }, [location.state]);

  useEffect(() => {
    let newFilteredItems = [...initialItems];

    // Sorting by price
    if (priceFilter === "low-to-high") {
      newFilteredItems.sort((a, b) => a.price - b.price);
    } else if (priceFilter === "high-to-low") {
      newFilteredItems.sort((a, b) => b.price - a.price);
    }
    else if (priceFilter === "...") {
      newFilteredItems = items;
    }

    // Filtering by availability based on quantity
    if (availableFilter) {
      newFilteredItems = newFilteredItems.filter((item) => item.quantity > 0);
    }

    setFilteredItems(newFilteredItems);
  }, [priceFilter, availableFilter]);


  const setInitialItems = () => {
    const initialItems = location.state?.filteredItems || items;
    setFilteredItems(initialItems);
  };
  // Event handler for when an item is clicked
  const onProductClick = (itemName) => {
    console.log(`${itemName} clicked!`);
    // Add additional logic here for when an item is clicked
  };

  return (
    <div className="component-container">
      {/* <SearchBar items={items} /> */}
      <div className="filter-container">
        <div>
          <label>Sort by price:
            <select
              className="sort-select"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="...">...</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </label>
          <label className="availability-checkbox">
            Show available items only
            <input
                type="checkbox"
                checked={availableFilter}
                onChange={(e) => setAvailableFilter(e.target.checked)}
            />
          </label>
        </div>
      </div>

      <div className="results-heading">Results:</div>
      <section className="items-display">
        {filteredItems?.map((item) => (
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
