import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import "./doctorsignup.css";


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

      {/* Form */}
      <div className="form-data">
        <h2>Sign Up Form</h2>

        <div className="form-input">
          <form onSubmit={handleSignUp}>
            
            <label htmlFor="doctorName">Doctor Name:</label>
            <input type="text" 
              id="doctorName"
              name="doctorName"
              value={doctorName} 
              onChange={(e) =>
               setDoctorName(e.target.value)
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
              <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  required
                >
                <option value="">Select Department</option>
                  {Array.isArray(departments) &&
                    departments.map((dept) => (
                      <option
                        key={dept.departmentId}
                        value={dept.departmentId}
                        >
                        {dept.deptName}
                      </option>
                    ))}
                </select>



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
              value={confirmPassword}
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

export default SignUp;
