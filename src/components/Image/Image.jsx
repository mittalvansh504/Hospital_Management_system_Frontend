import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./image.css";

const Image = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

   const routerNavigate = useNavigate();

   useEffect(() => {
      const syncAuth = () => {
        setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
        setRole(localStorage.getItem("role"));
      };
  
      syncAuth();
      window.addEventListener("storage", syncAuth);
  
      return () => window.removeEventListener("storage", syncAuth);
    }, []);


  const navigate = () => {
    if (isLoggedIn && role === "patient") {
      routerNavigate("/appointment");
    } else {
      alert("Please Sign Up as a patient to book an appointment.");
      routerNavigate("/patientsignup");
    }
  };

  return (
  <div className="doctor-wrapper">
  <div className="doctor-card">
    <div className="doctor-img">
      <img src="/Images/Hospitalimg_1.png" alt="doctor" />
    </div>

    <div className="doctor-info">
      <h2>Vansh Mittal</h2>
      <h4>Cardiologist</h4>
      <p>MBBS</p>

      <button className="appointment-button" onClick={navigate}>
        Book Appointment
      </button>
    </div>
  </div>
</div>
  );
}

export default Image
