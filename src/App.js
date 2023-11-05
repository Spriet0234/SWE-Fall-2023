import { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Cart from "./Components/Cart"; // Import the Cart component
import Checkout from "./Components/Checkout";
import { CartProvider } from "./Components/CartContext"; // Import the CartProvider
import Register from "./Components/RegisterComponent";
import MensClothing from "./Components/MensClothing";
import WomensClothing from "./Components/WomensClothing";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import ItemDetails from "./Components/ProductDetails";
import SearchBar from "./Components/SearchBar";
import SearchComp from "./Components/SearchComp";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "aT-Shirt",
      price: 18.99,
      quantity: 1,

      description:
        "A classic wardrobe staple, this t-shirt is made from breathable, 100% cotton fabric with a ribbed crew neck and short sleeves. Its timeless design ensures comfort and versatility for everyday wear.",
      image:
        "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=X5WLEp3EiqJ7eQqGQPW6Vx8l7joo56cTsCmSOIaAfPI=",
    },
    {
      id: 2,
      name: "Jeans",
      price: 49.99,
      quantity: 1,

      description:
        "These jeans offer a sleek and slimming fit, thanks to their stretchy denim fabric and deep indigo wash. The quality craftsmanship and classic design make them a reliable choice for your casual and semi-formal occasions.",
      image:
        "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=X5WLEp3EiqJ7eQqGQPW6Vx8l7joo56cTsCmSOIaAfPI=",
    },
    {
      id: 3,
      name: "Shorts",
      price: 15.99,
      quantity: 1,

      description:
        "Embrace warm weather with these comfortable shorts. Crafted from lightweight, durable cotton, they feature a relaxed fit, side pockets, and a versatile design that's perfect for outdoor adventures or leisurely days.",
      image:
        "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=X5WLEp3EiqJ7eQqGQPW6Vx8l7joo56cTsCmSOIaAfPI=",
    },
    {
      id: 4,
      name: "Dress",
      price: 39.99,
      quantity: 0,

      description:
        "Elevate your style with this elegant dress, boasting a figure-flattering A-line silhouette, delicate lace detailing, and a modest V-neck. Whether for special occasions or casual gatherings, this dress effortlessly combines sophistication and charm.",
      image:
        "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=X5WLEp3EiqJ7eQqGQPW6Vx8l7joo56cTsCmSOIaAfPI=",
    },
    {
      id: 5,
      name: "Turtle neck",
      price: 39.99,
      quantity: 1,
      description:
        "Stay cozy and stylish in this turtleneck sweater. Made from soft, breathable fabric, it features a ribbed collar and cuffs for extra warmth. The classic turtleneck design adds a touch of timeless elegance to your winter wardrobe.",
      image:
        "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=X5WLEp3EiqJ7eQqGQPW6Vx8l7joo56cTsCmSOIaAfPI=",
    },
    {
      id: 6,
      name: "Chinos",
      price: 39.99,
      quantity: 0,

      description:
        "Achieve a polished look with these chinos, crafted from high-quality cotton twill. Their tailored fit, clean lines, and versatile khaki color make them a reliable choice for both business-casual and smart-casual attire.",
      image:
        "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=X5WLEp3EiqJ7eQqGQPW6Vx8l7joo56cTsCmSOIaAfPI=",
    },
    // ... more items
  ]);
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <header className="navbar">
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/womens-clothing">Women's Clothing</Link>
              <Link to="/mens-clothing">Men's Clothing</Link>
              <Link className="cart-link" to="/cart">
                Cart
              </Link>
              <Link className="login-link" to="/login">
                Login
              </Link>
            </div>
            <div className="searchbar-container">
              <SearchBar items={items} />
            </div>
          </header>
          <Routes>
            <Route path="/" element={<Home items={items} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/mens-clothing" element={<MensClothing />} />
            <Route path="/womens-clothing" element={<WomensClothing />} />
            <Route path="/item-details/:id" element={<ItemDetails />} />
            <Route
              path="/search-comp"
              element={<SearchComp key={Date.now()} />}
            />

            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
