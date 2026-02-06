import React from "react";
import { Link } from "react-router-dom";
import "./loginpatient.css";

const Login = () => {
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

        <form method="post" className="login-input">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

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
