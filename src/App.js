import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Cart from "./Components/Cart"; // Import the Cart component

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="navbar">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/womens-clothing">Women's Clothing</Link>
            <Link to="/mens-clothing">Men's Clothing</Link>
            <Link className="cart-link" to="/cart">Cart</Link>
          </div>
          
            
          <Link className="login-link" to="/login">
            Login
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} /> {/* Cart Route */}
          {/* You can create corresponding components for these routes if required */}
          <Route
            path="/womens-clothing"
            element={<div>Women's Clothing Page</div>}
          />
          <Route
            path="/mens-clothing"
            element={<div>Men's Clothing Page</div>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
