import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Since you mentioned you have Home.js and Login.js, I assume you want to use Login.js
// as your "Other Page". Let's import and use that.
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>{" "}
          {/* Changed "/other" to "/login" to match the route below */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />{" "}
          {/* Changed "OtherPage" to "Login" */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
