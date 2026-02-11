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

      <Header />

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
        <Footer />
      </div>
    </div>
  );
};

export default SignUpPatient;
