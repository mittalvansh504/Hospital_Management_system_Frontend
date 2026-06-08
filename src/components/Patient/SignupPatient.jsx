import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signUpPatient.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const SignUpPatient = () => {

  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [patientDOB, setPatientDOB] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const navigate = useNavigate();


  const handleSignUp = async(e) =>{
    e.preventDefault();

    const response = await fetch("http://localhost:8182/patient/addPatient", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        patientName,
        email,
        phoneNo, 
        patientDOB,
        fatherName,
        motherName,
        permanentAddress,
        currentAddress,
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

            <input type="text" placeholder="Patient Name"
              value={patientName}
              onChange={(e)=>setPatientName(e.target.value)} required />

            <input type="email" placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)} required />
            
            <input type="tel" placeholder="Phone Number"
              value={phoneNo}
              onChange={(e)=>setPhoneNo(e.target.value)} required />

            <input type="date"
              value={patientDOB}
              onChange={(e)=>setPatientDOB(e.target.value)} required />

            <input type="text" placeholder="Father's Name"
              value={fatherName}
              onChange={(e)=>setFatherName(e.target.value)} required />

            <input type="text" placeholder="Mother's Name"
              value={motherName}
              onChange={(e)=>setMotherName(e.target.value)} required />

        
            <input type="text" placeholder="Permanent Address"
              value={permanentAddress}
              onChange={(e)=>setPermanentAddress(e.target.value)} required />

            <input type="text" placeholder="Current Address"
              value={currentAddress}
              onChange={(e)=>setCurrentAddress(e.target.value)} />

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
