import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signUpPatient.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const SignUpPatient = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setdob] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const navigate = useNavigate();


  const handleSignUp = async(e) =>{
    e.preventDefault();

    const response = await fetch("http://localhost:8181/patient/signup", {
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
        confirmPassword
      })
    });

    const result = await response.text();
    if(!response.ok){
      alert(result);
    }
    else{
      alert("User Register Successfully");

      localStorage.setItem("isLoggedIn", "true"); // MUST be string
      localStorage.setItem("role", "patient");     // role-based access
      navigate("/");
    }
  }

  return (
  <div className="signup">

    <Header />

    <div className="form-data">

      <div className="form-input">

        {/* LEFT PANEL */}
        <div className="form-left">
          <h2>Welcome 👤</h2>
          <p>Create your patient account and manage your health easily.</p>
        </div>

        {/* RIGHT FORM */}
        <div className="form-right">
          <h2>Patient Registration</h2>

          <form onSubmit={handleSignUp}>

            <input type="text" placeholder="First Name"
              value={firstName}
              onChange={(e)=>setFirstName(e.target.value)} required />

            <input type="text" placeholder="Last Name"
              value={lastName}
              onChange={(e)=>setLastName(e.target.value)} required />

            <input type="email" placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)} required />

            <input type="date"
              value={dob}
              onChange={(e)=>setdob(e.target.value)} required />

            <input type="tel" placeholder="Phone Number"
              value={phoneNo}
              onChange={(e)=>setPhoneNo(e.target.value)} required />

            <input type="text" placeholder="Address Line 1"
              value={addressLine1}
              onChange={(e)=>setAddressLine1(e.target.value)} required />

            <input type="text" placeholder="Address Line 2"
              value={addressLine2}
              onChange={(e)=>setAddressLine2(e.target.value)} />

            <input type="password" placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)} required />

            <input type="password" placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)} required />

            <button className="submit-button">Sign Up</button>

          </form>
        </div>

      </div>

    </div>

    <div className="end-container">
      <Footer />
    </div>

  </div>
);
};

export default SignUpPatient;
