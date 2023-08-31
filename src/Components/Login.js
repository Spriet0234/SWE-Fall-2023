import React, { useState } from "react";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle your login logic here, e.g., API call, form validation, etc.
    console.log("Logging in with", email, password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <a href="#forgot-password" className="forgot-password-link">
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
