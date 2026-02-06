import React from 'react'

import { Link } from 'react-router-dom'
import "./doctorhistory.css";


const Doctorhistory = () => {
  return (
    <div className="doctorhistory">
        {/* Header */}
      <div className="upper-container">
        <div className="upper-container-left">
          <h1>Welcome to HealthCare</h1>
        </div>
        <div className="upper-container-right">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>



        {/* Doctor History Content */}
        <div className="history-container">
            <h2 className="history-title">Doctor History</h2>
            <div className="history-content">
                <table>
                    <tr>
                        <th>Patient Name</th>
                        <th>Dieases</th>
                        <th>Check Up Date</th>
                        <th>Prescription</th>
                    </tr>

                    
                </table>
            </div>
        </div>


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
  )
}

export default Doctorhistory
