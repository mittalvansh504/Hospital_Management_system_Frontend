import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signUpPatient.css";


const SignUpPatient = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setdob] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");


  const navigate = useNavigate();


  const handleSignUp = async(e) =>{
    e.preventDefault();

    const response = await fetch("http://localhost:8181/Doctor/registration", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        firstName, 
        lastName, 
        email,
        dob,
        phoneNo, 
        addressLine1,
        addressLine2,
        password,
        confirmpassword
      })
    });

    const result = await response.text();
    if(!response.ok){
      alert(result);
    }
    else{
      alert("User Register Successfully");
      navigate("/");
    }
  }

  return (
    <div className="signup">

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

      {/* Form */}
      <div className="form-data">
        <h2>Sign Up Form</h2>

        <div className="form-input">
          <form onSubmit={handleSignUp}>
            
            <label htmlFor="FirstName">First Name:</label>
            <input type="text" 
              id="firstName"
              name="firstName"
              value={firstName} 
              onChange={(e) =>
               setFirstName(e.target.value)
              }
              required 
            />

            <label htmlFor="lastName">Last Name:</label>
            <input type="text"
              id="lastName"
              name="lastName" 
              value={lastName}
              onChange={(e) => 
                setLastName(e.target.value)
              } 
              required 
            />

            <label htmlFor="email">Email:</label>
            <input type="email" 
              id="email"
              name="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required 
            />

            <label htmlFor="dob">Date of Birth:</label>
            <input type="date"
              id="dob"
              name="dob" 
              value={dob} 
              onChange={(e) =>
                setdob(e.target.value)
              }
              required 
            />


            <label htmlFor="phoneNo">Phone Number:</label>
            <input type="tel" 
              id="phoneNo" 
              name="phoneNo" 
              value={phoneNo} 
              onChange={(e) =>
                setPhoneNo(e.target.value)
              }
              required
            />



            <label htmlFor="addressLine1">Address Line 1:</label>
            <input type="text" 
              id="addressLine1" 
              name="addressLine1" 
              value={addressLine1}
              onChange={(e) =>
                setAddressLine1(e.target.value)
              }
              required
            />

            <label htmlFor="addressLine2">Address Line 2:</label>
            <input type="text"
              id="addressLine2" 
              name="addressLine2" 
              value={addressLine2}
              onChange={(e) => 
                setAddressLine2(e.target.value)
              }
            />

            <label htmlFor="password">Password:</label>
            <input type="password" 
              id="password" 
              name="password" 
              value={password}
              onChange={(e) => 
                setPassword(e.target.value)
              }
              required 
            />

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmpassword}
              onChange={(e) =>
              setConfirmPassword(e.target.value)}
              required
            />

            <button className="submit-button" type="submit">
              Sign Up
            </button>
          </form>
        </div>
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

export default SignUpPatient;
