import { useLocation } from "react-router-dom";
import Item from "./Item";

export default function SearchComp() {
  const location = useLocation();
  const filteredItems = location.state?.filteredItems || [];

  // You can now use the filteredItems in your component
  const onProductClick = (itemName) => {
    console.log(`${itemName} clicked!`);
    // Add additional logic here for when an item is clicked
  };
  console.log(filteredItems);

  return (
    <div>
      <div>Results:</div>
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
}
