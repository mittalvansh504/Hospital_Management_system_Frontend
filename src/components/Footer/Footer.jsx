import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="footer-container">

        <div className="footer-section fade-in">
          <h2 className="footer-logo">🏥 HealthCare</h2>
          <p className="footer-desc">
            Smart hospital system for secure records, appointments & digital care.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>

        <div className="footer-section fade-in delay1">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-section fade-in delay2">
          <h3>Account</h3>
          <Link to="/doctorsignup">Doctor</Link>
          <Link to="/patientsignup">Patient</Link>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} HealthCare • All rights reserved
      </div>
    </footer>
  );
};

export default Footer;