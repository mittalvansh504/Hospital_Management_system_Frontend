import React from 'react'
import { Link } from "react-router-dom";
import './contact.css';


const Contact = () => {


  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const [queryArea, setQueryArea] = React.useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    const response = fetch("http://localhost:8181/Contact/send", {

      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name,
        email,
        phoneNo,
        queryArea
      })
    })
    const result = response.text();
    if(!response.ok){
      alert(result);
    }
    else{
      alert("Query Submitted Successfully");
    }
  };


    
  return (
    <div className="contact">
      {/* Header */}
      <div className="upper-container">
        <div className="upper-container-left">
          <h1>Welcome to HealthCare</h1>
        </div>

        <div className="upper-container-right">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>


        <div className="middle">
            <h1>Contact us</h1>
            <div className="form-data">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                     id="name" 
                     name="name"
                     onChange={(e) => 
                      setName(e.target.value)}
                    required/>

                    <label htmlFor="email">Email</label>
                    <input type="email" 
                      id="email"
                      name="email" 
                      onChange={(e)=>
                      setEmail(e.target.value)}
                    required/>

                    <label htmlFor="phoneNo">Phone No</label>
                    <input type="tel" 
                      id="phoneNo" 
                      name="phoneNo" 
                      onChange={(e) =>
                      setPhoneNo(e.target.value)}
                    required/>

                    <label htmlFor="queryArea">Query</label>
                    <input className="query" 
                      type="text" 
                      id="queryArea" 
                      name="queryArea" 
                      onChange={(e) =>
                      setQueryArea(e.target.value)}
                    required/>

                    <button className="submit">
                        Submit
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

export default Contact;
