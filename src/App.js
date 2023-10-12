import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Checkout from "./Components/Checkout";
import "./App.css";
import "./styles/CRT.css"

function App() {
  return (
    <Router>
        <div className="App">
          <nav>
            <header>
              <Link to="/">
                <div className="nav-link">Home</div>
              </Link>
              <Link to="/login">
                <div className="nav-link">Login</div>
              </Link>
              <Link to="/checkout">
                <div className="nav-link">Checkout</div>
              </Link>
            </header>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
