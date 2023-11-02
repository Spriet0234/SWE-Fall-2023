import { useState } from "react";
import { FaShoppingBag  } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Cart from "./Components/Cart"; // Import the Cart component
import Checkout from './Components/Checkout';
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
  return (
    <CartProvider>
      {/* Wrap your application within the CartProvider */}
      <Router>
        <div className="App">
          <div className="top-banner">
            <img className="banner-image" src="Logo.png" alt="Banner Image" />
          </div>
          <header className="navbar">
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/womens-clothing">Women's Clothing</Link>
              <Link to="/mens-clothing">Men's Clothing</Link>


            </div>

            <div className="nav-links">
              <div className="searchbar-container">
                <SearchBar />
              </div>
              <Link className="login-link" to="/login">
                <FaUserCircle /> {/* Render the avatar icon */}
              </Link>
              <Link className="cart-link" to="/cart">
                <FaShoppingBag /> {/* Render the shopping bag icon */}
              </Link>
            </div>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
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
