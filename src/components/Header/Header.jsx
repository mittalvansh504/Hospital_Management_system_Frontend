import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const syncAuth = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
      setRole(localStorage.getItem("role"));
    };

    syncAuth();
    window.addEventListener("storage", syncAuth);

    return () => window.removeEventListener("storage", syncAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setRole(null);
    navigate("/");
  };

  return (
    <div className="header">
      <h2>HealthCare</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {isLoggedIn && role === "doctor" && (
          <Link to="/doctorhistory">Doctor History</Link>
        )}

        {isLoggedIn && role === "patient" && (
          <Link to="/patienthistory">My Treatments</Link>
        )}

        {!isLoggedIn && (
          <>
            {/* Sign Up Dropdown */}
            <div className="dropdown">
              <span className="dropbtn">Sign Up ▾</span>
              <div className="dropdown-content">
                <Link to="/doctorsignup">Doctor SignUp</Link>
                <Link to="/patientsignup">Patient SignUp</Link>
              </div>
            </div>

            {/* Login Dropdown */}
            <div className="dropdown">
              <span className="dropbtn">Login ▾</span>
              <div className="dropdown-content">
                <Link to="/doctorlogin">Doctor Login</Link>
                <Link to="/patientlogin">Patient Login</Link>
              </div>
            </div>
          </>
        )}

        {isLoggedIn && (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        )}
      </nav>
    </div>
  );
};

export default Header;