import React, { useEffect, useState } from "react";
import "./image.css";


const Image = () => {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);


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
      window.location.href = "/appointment";
    } else {
      alert("Please Sign Up as a patient to book an appointment.");
      window.location.href = "/patientsignup";
    }
  }



  return (
    <div className="Image">
      <div className="middle-down">
          <div className="middle-down-doctor-data">
            <div className="middle-down-doctor-data-img">
              <img src="/Images/Hospitalimg_1.png" alt="" />
            </div>
            <div className="middle-down-doctor-data-info">
              <div className="doctor-data">
                <h2>Vansh Mittal</h2>
                <h2>Cardiologist</h2>
                <p>MBBS</p>
              </div>
            </div>
          </div>  
          <button className='appointment-button' onClick={navigate}>
              Appointment
          </button>        
        </div>
    </div>
  )
}

export default Image
