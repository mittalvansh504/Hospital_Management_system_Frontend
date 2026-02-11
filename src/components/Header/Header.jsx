import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  // Sync header with login state
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

        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/doctorsignup">Doctor Sign Up</Link>
            <Link to="/patientsignup">Patient Sign Up</Link>
            <Link to="/doctorlogin">Doctor Login</Link>
            <Link to="/patientlogin">Patient Login</Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
