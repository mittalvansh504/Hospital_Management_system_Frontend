import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-section">
          <h2 className="footer-logo">HealthCare</h2>
          <p className="footer-desc">
            A smart hospital management system providing secure access to
            patient records, doctor history, appointments, and digital healthcare services.
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Right Section */}
        <div className="footer-section">
          <h3>Account</h3>
          <Link to="/doctorsignup">Doctor Sign Up</Link>
          <Link to="/patientsignup">Patient Sign Up</Link>
        </div>

      </div>

      <hr />

      <p className="footer-copy">
        © {new Date().getFullYear()} HealthCare System. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
