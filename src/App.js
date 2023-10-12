import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Checkout from "./Components/Checkout"; // Step 1: Import the Checkout component
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/checkout">Checkout</Link> {/* Step 3: Add a Link to the checkout page */}
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} /> {/* Step 4: Add a Route for the checkout page */}
          </Routes>
        </div>
      </Router>
  );
}

export default App;
