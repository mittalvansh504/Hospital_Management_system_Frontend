import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import "./contact.css";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [queryArea, setQueryArea] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8181/Contact/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phoneNo, queryArea })
      });

      const result = await response.text();

      if (!response.ok) {
        alert(result);
      } else {
        alert("Query submitted successfully");
        setName("");
        setEmail("");
        setPhoneNo("");
        setQueryArea("");
        navigate("/");
      }
    } catch (error) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">

      <Header />

      <div className="contact-wrapper">

        {/* LEFT IMAGE */}
        <div className="contact-image">
          <img src="./Images/Contact.jpg" alt="contact" />
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>We’d love to hear from you</p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNo}
              onChange={(e)=>setPhoneNo(e.target.value)}
              required
            />

            <textarea
              placeholder="Your Message"
              value={queryArea}
              onChange={(e)=>setQueryArea(e.target.value)}
              required
            />

            <button disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>

      </div>

      <Footer />

    </div>
  );
};

export default Contact;