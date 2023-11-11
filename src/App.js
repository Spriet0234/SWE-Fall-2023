import React, { useState, useEffect } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import Shop from "./Components/Shop"; // Import the Cart component
import Checkout from "./Components/Checkout";
import { CartProvider } from "./Components/CartContext"; // Import the CartProvider
import Register from "./Components/RegisterComponent";
import MensClothing from "./Components/MensClothing";
import WomensClothing from "./Components/WomensClothing";
import AddItemForm from "./Components/AddItemForm";
import { AuthProvider } from "./Components/AuthProvider"; // adjust the import path as necessary

import "./styles/bootstrap.min.css";
import "./styles/font-awesome.min.css";
import "./styles/elegant-icons.css";
import "./styles/magnific-popup.css";
import "./styles/nice-select.css";
import "./styles/owl.carousel.min.css";
import "./styles/slicknav.min.css";
import "./styles/style.css";
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
import axios from "axios"; // Import axios for making HTTP requests

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        "https://fzp30pyckc.execute-api.us-east-1.amazonaws.com/dev"
      );

      // Parse the JSON string in the body property
      const responseBody = JSON.parse(response.data.body);

      console.log("Response Body:", responseBody);

      // Move the setItems call outside the fetchItems function
      setItems(responseBody.Items);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching items:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Call fetchItems inside a separate function to use async/await
    const fetchData = async () => {
      await fetchItems();
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

  const addItem = (newItem) => {
    setItems((prevItems) => [
      ...prevItems,
      { ...newItem, id: prevItems.length + 1 },
    ]);
  };

  console.log("Items in App component:", items);
  function transformNewItemToOldFormat(newItem) {
    return {
      id: newItem.ID.S, // Assuming that ID is unique and a string
      name: newItem.ITEM.S,
      price: parseFloat(newItem.PRICE.S), // Convert string to float
      quantity: parseInt(newItem.QTY.S, 10), // Convert string to integer
      description: newItem.DESCRIPTION.S,
      image: newItem.IMAGE.S,
    };
  }

  const newItems = items;

  const oItems = newItems.map(transformNewItemToOldFormat);

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <meta charSet="UTF-8" />
          <meta name="description" content="Male_Fashion Template" />
          <meta name="keywords" content="Male_Fashion, unica, creative, html" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* Google Font */}
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <div className="top-banner">
            <img className="banner-image" src="/Logo.png" alt="Banner Image" />
          </div>

          {/* Header Section Begin */}
          <header className="header">
            <div className="header__top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-7"></div>
                  <div className="col-lg-6 col-md-5">
                    <div className="header__top__right">
                      <div className="nav-links">
                        <div className="searchbar-container">
                          <SearchBar items={oItems} />
                        </div>
                        <Link className="login-link" to="/login">
                          <FaUserCircle /> {/* Render the avatar icon */}
                        </Link>
                        <Link className="cart-link" to="/cart">
                          <FaShoppingBag /> {/* Render the shopping bag icon */}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-3">
                  <div className="header__logo">
                    <img src="../public/Logo.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <nav className="header__menu mobile-menu">
                    <ul>
                      <li className="active">
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/Shop">Shop</Link>
                      </li>
                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link to="/contacts">Contacts</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="canvas__open">
                <i className="fa fa-bars" />
              </div>
            </div>
          </header>

          <Routes>
            <Route path="/" element={<Home items={oItems} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/mens-clothing" element={<MensClothing />} />
            <Route path="/womens-clothing" element={<WomensClothing />} />
            <Route path="/item-details/:id" element={<ItemDetails />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/search-comp" element={<SearchComp />} />
            <Route
              path="/add-item"
              element={<AddItemForm addItem={addItem} />}
            />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
