import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import Header from "../Header/Header.jsx";
import "./contact.css";
import Footer from "../Footer/Footer.jsx";

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
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          phoneNo,
          queryArea
        })
      });

      const result = await response.text();

      if (!response.ok) {
        alert(result);
      } else {
        alert("Query submitted successfully");

        // clear form
        setName("");
        setEmail("");
        setPhoneNo("");
        setQueryArea("");
        navigate("/");
      }
    } catch (error) {
      alert("Server error. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">

      <Header />

      {/* Contact Form */}
      <div className="middle">
        <h1>Contact Us</h1>

        <div className="form-data">
          <form onSubmit={handleSubmit}>

            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Phone No</label>
            <input
              type="tel"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              required
            />

            <label>Query</label>
            <input
              type="text"
              value={queryArea}
              onChange={(e) => setQueryArea(e.target.value)}
              required
            />

            <button className="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
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

export default Contact;
