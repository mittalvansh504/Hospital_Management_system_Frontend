import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Image from "../Image/Image.jsx";

const Home = () => {


  return (
    <div className="home">
      <div className="upper-container">
        <div className="upper-container-left">
          <h1>Welcome to HealthCare</h1>
        </div>

        <div className="upper-container-right">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/doctorhistory">Doctor History</Link>
          <div className="hover-container">    
            <span className="sign-up-span">Sign Up</span>
              <div className="hidden-links">
                <Link to="/doctorsignup">Doctor</Link>
                <Link to="/patientsignup">Patient</Link>
            </div>
          </div>     
          <div className="hover-container">    
            <span className="login-span">Login</span>
              <div className="hidden-links">
                <Link to="/login">Doctor</Link>
                <Link to="/patientlogin">Patient</Link>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="middle-container">
        <div className="middle-left">
          <p>
            A hospital is a healthcare institution providing patient treatment
            with specialized staff, equipment, and facilities for diagnosis,
            treatment, and care, serving as critical centers for emergency,
            surgical, and ongoing medical needs, while also functioning as hubs
            for medical research, education, and public health initiatives. They
            offer inpatient and outpatient services, covering various levels of
            care from basic to highly specialized, and play a crucial role in
            community health and complex care coordination, encompassing diverse
            departments and staff.{" "}
          </p>

          <p>
            A hospital is a healthcare institution providing patient treatment
            with specialized staff, equipment, and facilities for diagnosis,
            treatment, and care of the sick and injured, serving as critical
            centers for emergency care, complex conditions, medical research,
            and health education for the community, ranging from general
            hospitals to specialized facilities. They offer inpatient/outpatient
            services, coordinate care, and are organized into primary,
            secondary, and tertiary levels, focusing on therapy, custody,
            education, and research for holistic well-being.{" "}
          </p>
        </div>

        <div className="middle-right img">
          <img src="./Images/Hospitalimg_1.png" alt="" />
        </div>
      </div>

      <hr />
      <div className="middle-down">
        <h1>Doctor List</h1>
      </div>
        <Image />
        <Image />

      <hr />

      <div className="end-container">
        <footer className="footer">
            <div className="footer-top">
            <h1 className="footer-logo">HealthCare</h1>
            <p className="footer-tagline">Your health, our priority.</p>
            </div>

            <div className="footer-links">
            <a href="About">About Us</a>
            <a href="Contact">Contact</a>
            <a href="SignUP">Sign Up</a>
            <a href="Login">Login</a>
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

export default Home;
