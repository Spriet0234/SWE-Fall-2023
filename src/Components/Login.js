import React, { useState, useContext } from "react";
import "../styles/LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthProvider";
import { CartContext } from "./CartContext";

const LoginPage = () => {
  const { userName, setUser } = useContext(CartContext);

  const [loginStatus, setLoginStatus] = useState(""); // New state for login status

  const [showError, setShowError] = useState(false); // New state for showing error

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isLoggedIn, logint, logout } = useAuth();

  const handleRegister = async () => {
    try {
      // Perform the login request to your backend API
      const response = await axios.post(
        "https://wdlnvxccyg.execute-api.us-east-1.amazonaws.com/dev",
        {
          username: email,
          password: password,
        }
      );

      console.log("Response:", response); // Log the entire response for inspection

      // Parse the response body as JSON
      const responseBody = JSON.parse(response.data.body);

      if (response.status === 200) {
        // Login successful
        console.log("Login successful");
        console.log("Response message:", responseBody.message); // Access the response message
        // Redirect to the home page or the desired destination
        navigate("/"); // Use the navigate function to redirect
      } else {
        // Handle other response statuses if needed
        console.log("Login failed:", responseBody.message);
      }
    } catch (error) {
      // Handle login error
      console.error("Login error:", error);
    }
  };

  const handleLogin = async () => {
    setUser(email);
    try {
      // Perform the login request to your backend API
      const response = await axios.post(
        "https://wdlnvxccyg.execute-api.us-east-1.amazonaws.com/dev",
        {
          username: email,
          password: password,
        }
      );

      console.log("Response:", response); // Log the entire response for inspection

      // Parse the response body as JSON
      const responseBody = JSON.parse(response.data.body);

      if (response.status === 200) {
        // Login successful
        console.log("Login successful");
        console.log("Response message:", responseBody.message); // Access the response message
        // Redirect to the home page or the desired destination
        if (responseBody.message == "Login successful") {
          logint();
        } else if (responseBody.message == "Incorrect password") {
          setShowError(true);
        }

        //navigate('/'); // Use the navigate function to redirect
      } else {
        // Handle other response statuses if needed
        console.log("Login failed:", responseBody.message);
      }
    } catch (error) {
      // Handle login error
      console.error("Login error:", error);
    }
  };

  var emailArray = [];
  var passwordArray = [];

  var loginBox = document.getElementById("login");
  var regBox = document.getElementById("register");
  var forgetBox = document.getElementById("forgot");

  var loginTab = document.getElementById("lt");
  var regTab = document.getElementById("rt");

  function regTabFun(event) {
    event.preventDefault();

    regBox.style.visibility = "visible";
    loginBox.style.visibility = "hidden";
    forgetBox.style.visibility = "hidden";

    regTab.style.backgroundColor = "rgb(12, 132, 189)";
    loginTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
  }
  function loginTabFun(event) {
    event.preventDefault();

    regBox.style.visibility = "hidden";
    loginBox.style.visibility = "visible";
    forgetBox.style.visibility = "hidden";

    loginTab.style.backgroundColor = "rgb(12, 132, 189)";
    regTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
  }
  function forTabFun(event) {
    event.preventDefault();

    regBox.style.visibility = "hidden";
    loginBox.style.visibility = "hidden";
    forgetBox.style.visibility = "visible";

    regTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
    loginTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
  }

  function register(event) {
    event.preventDefault();

    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;

    if (email == "") {
      alert("Email required.");
      return;
    } else if (password == "") {
      alert("Password required.");
      return;
    } else if (passwordRetype == "") {
      alert("Password required.");
      return;
    } else if (password != passwordRetype) {
      alert("Password doesn't match, retype your password.");
      return;
    } else if (emailArray.indexOf(email) == -1) {
      emailArray.push(email);
      passwordArray.push(password);

      alert(email + "  Thanks for registering. \nTry to login now");

      document.getElementById("re").value = "";
      document.getElementById("rp").value = "";
      document.getElementById("rrp").value = "";
    } else {
      alert(email + " is already registered.");
      return;
    }
  }
  function login(event) {
    event.preventDefault();

    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;

    var i = emailArray.indexOf(email);

    if (emailArray.indexOf(email) == -1) {
      if (email == "") {
        alert("Email required.");
        return;
      }
      alert("Email does not exist.");
      return;
    } else if (passwordArray[i] != password) {
      if (password == "") {
        alert("Password required.");
        return;
      }
      alert("Password does not match.");
      return;
    } else {
      alert(email + " yor are logged in now \n welcome to our website.");

      document.getElementById("se").value = "";
      document.getElementById("sp").value = "";
      return;
    }
  }
  function forgot(event) {
    event.preventDefault();

    var email = document.getElementById("fe").value;

    if (emailArray.indexOf(email) == -1) {
      if (email == "") {
        alert("Email required.");
        return;
      }
      alert("Email does not exist.");
      return;
    }

    alert("email was send to your email. Check it in 24hr. \n Thanks");
    document.getElementById("fe").value = "";
  }
  if (isLoggedIn) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Welcome, {`${userName}`}!</h2>
        <p>You have successfully logged in.</p>
        <button
          className="btnr"
          onClick={() => navigate("/")}
          style={{ marginTop: "10px" }}
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="login-form">
        <div>Username</div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>Password</div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {showError && (
          <div style={{ color: "red" }}>Incorrect username or password</div>
        )}
        <button onClick={handleLogin}>Login</button>
        <div style={{ marginTop: 20 }}>
          <span>Don't have an account? </span>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
