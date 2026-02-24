import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header.jsx";
import "./doctorlogin.css";
import Footer from "../Footer/Footer.jsx";

const Login = () => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8181/doctor/loginDoctor", {

      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        doctorEmail : email,
        password : password
      })
    });

    const result = await response.json();
    if(!response.ok){
      alert(result);
    }
    else{
      localStorage.setItem("isLoggedIn", "true"); // MUST be string
      localStorage.setItem("role", "doctor");     // role-based access

      
      alert("Login Successful");
      navigate("/");
    }
  }


  return (
    <div className="login">

      {/* Header */}
      <Header />

      {/* Login Form */}
      <div className="login-data">
        <h2>Login Form</h2>

        <form onSubmit={handleLogin} className="login-input">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email}
          onChange={(e) => setEmail(e.target.value)}
           required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} 
          onChange={(e) => setPassword(e.target.value)}
          required />

          {/* IMPORTANT: class name fixed */}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="end-container">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
