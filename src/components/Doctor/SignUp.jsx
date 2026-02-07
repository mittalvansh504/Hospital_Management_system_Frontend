import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";


const SignUp = () => {

  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [doctorEmail, setDoctorEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [doctorDob, setDoctorDob] = useState("");
  const [degree, setDegree] = useState("");
  const [department, setDepartment] = useState("");
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
        doctorFirstName, 
        doctorLastName, 
        doctorEmail,
        phoneNo, 
        doctorDob,
        degree,
        department, 
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
            
            <label htmlFor="doctorFirstName">First Name:</label>
            <input type="text" 
              id="doctorFirstName"
              name="doctorFirstName"
              value={doctorFirstName} 
              onChange={(e) =>
               setDoctorFirstName(e.target.value)
              }
              required 
            />

            <label htmlFor="doctorLastName">Last Name:</label>
            <input type="text"
              id="doctorLastName"
              name="doctorLastName" 
              value={doctorLastName}
              onChange={(e) => 
                setDoctorLastName(e.target.value)
              } 
              required 
            />

            <label htmlFor="doctorEmail">Email:</label>
            <input type="email" 
              id="doctorEmail"
              name="doctorEmail"
              value={doctorEmail}
              onChange={(e) =>
                setDoctorEmail(e.target.value)
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

            <label htmlFor="doctorDob">Date of Birth:</label>
            <input type="date"
              id="doctorDob"
              name="doctorDob" 
              value={doctorDob} 
              onChange={(e) =>
                setDoctorDob(e.target.value)
              }
              required 
            />


            <label htmlFor="degree">Degree:</label>
            <input type="text" 
              id="degree" 
              name="degree" 
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              required
            />


            <label htmlFor="department">Department:</label>
            <input type="text" 
              id="department" 
              name="department" 
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
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

export default SignUp;
