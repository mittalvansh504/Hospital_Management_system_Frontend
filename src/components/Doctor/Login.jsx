import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8181/health/login", {

      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const result = await response.text();
    if(!response.ok){
      alert(result);
    }
    else{
      alert("Login Successful");
      navigate("/");
    }
  }


  return (
    <div className="login">

      {/* Header */}
      <div className="upper-container">
        <div className="upper-container-left">
          <h1>Welcome to HealthCare</h1>
        </div>

        <div className="upper-container-right">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>

      {/* Login Form */}
      <div className="login-data">
        <h2>Login Form</h2>

        <form onSubmit={handleLogin} className="login-input">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email}
          onChange={(e) => setEmail(e.target.value)}
           required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} 
          onChange={(e) => setPassword(e.target.value)}
          required />

          {/* IMPORTANT: class name fixed */}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="end-container">
        <footer className="footer">
          <div className="footer-top">
            <h1 className="footer-logo">HealthCare</h1>
            <p className="footer-tagline">Your health, our priority.</p>
          </div>

          <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </div>

          <hr className="footer-divider" />

          <p className="footer-copy">
            &copy; 2024 HealthCare. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
