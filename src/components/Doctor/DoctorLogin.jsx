import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header.jsx";
import "./doctorlogin.css";
import Footer from "../Footer/Footer.jsx";

const Login = () => {

  const [email, setEmail] = React.useState("");
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
          doctorEmail: email,
          password: password
        })
      });

      const result = await response.json();

      if (!response.ok) {
        console.log(result.message || "Login failed");
        return;
      }
      console.log("Login Response:", result);

      // ✅ VERY IMPORTANT FIX
      localStorage.setItem("userId", result.doctorId); // 🔥 MUST
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

      <div className="login-data">
        <h2>Doctor Login</h2>

        <form onSubmit={handleLogin} className="login-input">

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

      <div className="end-container">
        <Footer />
      </div>
    </div>
  );
};

export default Login;