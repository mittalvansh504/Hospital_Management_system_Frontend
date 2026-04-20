import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import "../Doctor/doctorsignup.css";

const SignUp = () => {
  const [doctorName, setDoctorName] = React.useState("");
  const [doctorEmail, setDoctorEmail] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const [doctorDob, setDoctorDob] = React.useState("");
  const [degree, setDegree] = React.useState("");
  const [departments, setDepartments] = React.useState([]);
  const [selectedDepartment, setSelectedDepartment] = React.useState("");
  const [addressLine1, setAddressLine1] = React.useState("");
  const [addressLine2, setAddressLine2] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

    React.useEffect(() => {
    fetch("http://localhost:8181/departments/getalldepartment")
      .then(res => res.json())
      .then(data => {
        console.log("Departments:", data); // 🔥 check this
        setDepartments(data);
      })

      .catch(err => console.error(err));
    }, []);


  const navigate = useNavigate();

  const handleSignUp = async(e) =>{
    e.preventDefault();
    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }

    const response = await fetch("http://localhost:8181/doctor/registration", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },

      body: JSON.stringify({
        doctorName,
        doctorEmail,
        phoneNo,
        doctorDob,  
        degree,
        departmentIds: [Number(selectedDepartment)],
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
      localStorage.setItem("isLoggedIn", "true"); // MUST be string
      localStorage.setItem("role", "doctor");     // role-based access

      alert("Sign Up Successful");
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
          <h2>Welcome 👨‍⚕️</h2>
          <p>Join our healthcare platform and grow your practice.</p>
        </div>

        {/* RIGHT FORM */}
        <div className="form-right">
          <h2>Doctor Registration</h2>

          <form onSubmit={handleSignUp}>

            <div className="input-group">
              <input type="text" placeholder=" " value={doctorName}
                onChange={(e)=>setDoctorName(e.target.value)} required />
              <label>Doctor Name</label>
            </div>

            <div className="input-group">
              <input type="email" placeholder=" " value={doctorEmail}
                onChange={(e)=>setDoctorEmail(e.target.value)} required />
              <label>Email</label>
            </div>

            <div className="input-group">
              <input type="tel" placeholder=" " value={phoneNo}
                onChange={(e)=>setPhoneNo(e.target.value)} required />
              <label>Phone</label>
            </div>

            <div className="input-group">
              <input type="date" placeholder=" " value={doctorDob}
                onChange={(e)=>setDoctorDob(e.target.value)} required />
              <label>DOB</label>
            </div>

            <div className="input-group">
              <input type="text" placeholder=" " value={degree}
                onChange={(e)=>setDegree(e.target.value)} required />
              <label>Degree</label>
            </div>

            <div className="input-group">
              <select value={selectedDepartment}
                onChange={(e)=>setSelectedDepartment(e.target.value)} required>
                <option value=""></option>
                {departments.map((dept)=>(
                  <option key={dept.departmentId} value={dept.departmentId}>
                    {dept.deptName}
                  </option>
                ))}
              </select>
              <label>Department</label>
            </div>

            <div className="input-group">
              <input type="text" placeholder=" " value={addressLine1}
                onChange={(e)=>setAddressLine1(e.target.value)} required />
              <label>Address Line 1</label>
            </div>

            <div className="input-group">
              <input type="text" placeholder=" " value={addressLine2}
                onChange={(e)=>setAddressLine2(e.target.value)} />
              <label>Address Line 2</label>
            </div>

            <div className="input-group">
              <input type="password" placeholder=" " value={password}
                onChange={(e)=>setPassword(e.target.value)} required />
              <label>Password</label>
            </div>

            <div className="input-group">
              <input type="password" placeholder=" " value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)} required />
              <label>Confirm Password</label>
            </div>

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

export default SignUp;

