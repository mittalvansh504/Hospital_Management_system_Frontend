import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, Calendar, GraduationCap, MapPin, Lock, Hospital } from "lucide-react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";


import "./doctorsignup.css";




const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    doctorName: "",
    doctorEmail: "",
    phoneNo: "",
    doctorDob: "",
    degree: "",
    selectedDepartment: "",
    addressLine1: "",
    addressLine2: "",
    password: "",
    confirmPassword: ""
  });

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8181/departments/getalldepartment")
      .then(res => res.json())
      .then(data => setDepartments(data))
      .catch(err => console.error("Error fetching departments:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const response = await fetch("http://localhost:8181/doctor/registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        departmentIds: [Number(formData.selectedDepartment)]
      })
    });

    const result = await response.text();
    if (!response.ok) {
      alert(result);
    } else {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "doctor");
      alert("Sign Up Successful");
      navigate("/");
    }
  };

  return (
    <div className="signup-page">
      <Header />
      
      <main className="form-container">
        <div className="form-card">
          {/* Left Side: Aesthetic Panel */}
          <div className="form-left">
            <div className="overlay">
              <h2>Welcome to the Network</h2>
              <p>Join our community of healthcare professionals and manage your practice seamlessly.</p>
              <div className="features">
                <div className="feature-item">✓ Secure Patient Records</div>
                <div className="feature-item">✓ Real-time Scheduling</div>
                <div className="feature-item">✓ Professional Networking</div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="form-right">
            <h2>Doctor Registration</h2>
            <form onSubmit={handleSignUp} className="signup-form">
              <div className="input-grid">
                <div className="input-group">
                  <User size={18} />
                  <input type="text" name="doctorName" placeholder="Full Name" onChange={handleChange} required />
                </div>

                <div className="input-group">
                  <Mail size={18} />
                  <input type="email" name="doctorEmail" placeholder="Email Address" onChange={handleChange} required />
                </div>

                <div className="input-group">
                  <Phone size={18} />
                  <input type="tel" name="phoneNo" placeholder="Phone Number" onChange={handleChange} required />
                </div>

                <div className="input-group">
                  <Calendar size={18} />
                  <input type="date" name="doctorDob" onChange={handleChange} required />
                </div>

                <div className="input-group">
                  <GraduationCap size={18} />
                  <input type="text" name="degree" placeholder="Medical Degree (e.g. MD, MBBS)" onChange={handleChange} required />
                </div>

                <div className="input-group">
                  <Hospital size={18} />
                  <select name="selectedDepartment" onChange={handleChange} required>
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept.departmentId} value={dept.departmentId}>{dept.deptName}</option>
                    ))}
                  </select>
                </div>

                <div className="input-group full-width">
                  <MapPin size={18} />
                  <input type="text" name="addressLine1" placeholder="Clinic/Home Address Line 1" onChange={handleChange} required />
                </div>

                <div className="input-group">
                  <Lock size={18} />
                  <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                </div>

                <div className="input-group">
                  <Lock size={18} />
                  <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
                </div>
              </div>

              <button type="submit" className="submit-btn">Create Account</button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};


export default SignUp;