import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import "./home.css";
import Image from "../Image/Image.jsx";

const Home = () => {

  return (
    <div className="home">
      
      <Header />
      <hr />

      <div className="middle-container">
        <div className="middle-left">
          <p>
            A hospital is a healthcare institution providing patient treatment
            with specialized staff, equipment, and facilities for diagnosis,
            treatment, and care, serving as critical centers for emergency,
            surgical, and ongoing medical needs, while also functioning as hubs
            for medical research, education, and public health initiatives. They
            offer inpatient and outpatient services, covering various levels of
            care from basic to highly specialized, and play a crucial role in
            community health and complex care coordination, encompassing diverse
            departments and staff.{" "}
          </p>

          <p>
            A hospital is a healthcare institution providing patient treatment
            with specialized staff, equipment, and facilities for diagnosis,
            treatment, and care of the sick and injured, serving as critical
            centers for emergency care, complex conditions, medical research,
            and health education for the community, ranging from general
            hospitals to specialized facilities. They offer inpatient/outpatient
            services, coordinate care, and are organized into primary,
            secondary, and tertiary levels, focusing on therapy, custody,
            education, and research for holistic well-being.{" "}
          </p>
        </div>

        <div className="middle-right img">
          <img src="./Images/Hospitalimg_1.png" alt="" />
        </div>
      </div>

      <hr />
      <div className="middle-down">
        <h1>Doctor List</h1>
      </div>
        <Image />
        <Image />

      <hr />

      <div className="end-container">
        <Footer />  
      </div>
    </div>
  );
};

export default Home;
