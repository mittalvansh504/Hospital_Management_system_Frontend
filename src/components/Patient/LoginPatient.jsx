import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import "./loginpatient.css";

const Login = () => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8181/patient/loginpatient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email : email,
          password : password
        })
      });

      // ✅ Convert to JSON (IMPORTANT)
      const result = await response.json();

      if (!response.ok) {
        alert(result.message || "Login failed");
        return;
      }

      // ✅ Store required data in localStorage
      localStorage.setItem("userId", result.patientId); // 🔥 VERY IMPORTANT
      localStorage.setItem("role", "patient");
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

        <h2>Patient Login 🏥</h2>
        <p className="subtitle">Access your health dashboard</p>

        <form onSubmit={handleSubmit} className="login-form">

          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          <p className="login-extra">
            Don’t have an account? <a href="/signup">Register</a>
          </p>

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