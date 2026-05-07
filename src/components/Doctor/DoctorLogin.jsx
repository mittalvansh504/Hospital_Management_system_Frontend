import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header.jsx";
import "./doctorlogin.css";
import Footer from "../Footer/Footer.jsx";

const Login = () => {

  const [doctorEmail, setDoctorEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8181/doctor/loginDoctor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          doctorEmail: doctorEmail,
          password: password
        })
      });

      const result = await response.json();

      if (!response.ok) {
        console.log(result.message || "Login failed");
        return;
      }
      console.log("Login Response:", result);

      // VERY IMPORTANT FIX
      localStorage.setItem("userId", result.doctorId); // MUST
      localStorage.setItem("role", "doctor");
      localStorage.setItem("isLoggedIn", "true");

      alert("Login Successful");
      navigate("/");

    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
  <div className="login">

    <Header />

    <div className="login-container">

      <div className="login-card">

        <h2>Doctor Login 👨‍⚕️</h2>
        <p className="subtitle">Welcome back! Please login to continue</p>

        <form onSubmit={handleLogin} className="login-form">

          <div className="input-group">
            <input
              type="email"
              value={doctorEmail}
              onChange={(e) => setDoctorEmail(e.target.value)}
              required
              placeholder=" "
            />
            <label>Email Address</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder=" "
            />
            <label>Password</label>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

        </form>

      </div>

    </div>

    <div className="end-container">
      <Footer />
    </div>

  </div>
);
};

export default Login;