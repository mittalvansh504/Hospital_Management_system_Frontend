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

      {/* Header */}
      <Header />

      {/* Login Form */}
      <div className="login-data">
        <h2>Login Form</h2>

        <form onSubmit={handleSubmit} className="login-input">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

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