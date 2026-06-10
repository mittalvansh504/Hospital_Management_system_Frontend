import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./appointment.css";
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Swal from "sweetalert2";

const Appointment = () => {

  // const [patientName, setPatientName] = useState("");
  // const [patientDob, setPatientDob] = useState("");
  // const [patientPhone, setPatientPhone] = useState("");
  // const [patientAddress, setPatientAddress] = useState("");

  const [departments, setDepartments] = useState([]);
  const [selectedDepartmentId, setselectedDepartmentId] = useState("");

  const [doctors, setDoctors] = useState([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState("");

  const [disease, setDisease] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Load departments
  useEffect(() => {
    fetch("https://hospitalbackend-ot2y.onrender.com/departments/getAllDepartments")
      .then(res => res.json())
      .then(data => setDepartments(data))
      .catch(err => console.log(err));
  }, []);

  // Load doctors based on department
  useEffect(() => {
    if (selectedDepartmentId) {
      fetch(`https://hospitalbackend-ot2y.onrender.com/departments/getDoctorByDepartmentId/${selectedDepartmentId}`)
        .then(res => res.json())
        .then(data => setDoctors(data))
        .catch(err => console.log(err));
    }
  }, [selectedDepartmentId]);

  const handleAppointment = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(localStorage.getItem("patientId"));

    try {
      const response = await fetch("https://hospitalbackend-ot2y.onrender.com/bookings/createBooking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // patientName,
          // patientDob,
          // patientPhone,
          // patientAddress,
          patientId: localStorage.getItem("patientId"),
          departmentId: selectedDepartmentId,
          doctorId: selectedDoctorId,
          disease,
          appointmentDate
        })
      });

      const result = await response.json();

      if (!response.ok) {
        Swal.fire("Error", result.message, "error");
      } else {
        const doctorName = doctors.find(d => d.doctorId == selectedDoctorId)?.doctorName;

        Swal.fire({
          title: "Appointment Confirmed!",
          html: `
            <b>Date:</b> ${appointmentDate} <br/>
            <b>Doctor:</b> ${doctorName}
          `,
          icon: "success",
          confirmButtonText: "View My Bookings"
        }).then(() => {
          navigate("/patienthistory");
        });
      }

    } catch {
      Swal.fire("Error", "Something went wrong!", "error");
    }

    setLoading(false);
 };

  return (
    <div className="appointment-page">
      <Header />

      <div className="appointment-wrapper">

        <div className="appointment-left">
          <h1>Welcome 👨‍⚕️</h1>
          <p>Book your appointment easily and get the best healthcare service.</p>
        </div>

        <div className="appointment-right">
          <form onSubmit={handleAppointment} className="appointment-form">

            <h2>Book Appointment</h2>

            {/* <input type="text" placeholder="Patient Name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)} required />

            <input type="date"
              value={patientDob}
              onChange={(e) => setPatientDob(e.target.value)} required />

            <input type="tel" placeholder="Phone"
              value={patientPhone}
              onChange={(e) => setPatientPhone(e.target.value)} required />

            <input type="text" placeholder="Address"
              value={patientAddress}
              onChange={(e) => setPatientAddress(e.target.value)} required /> */}

            <select value={selectedDepartmentId}
              onChange={(e) => {
                setselectedDepartmentId(e.target.value);
                setSelectedDoctorId("");
              }} required>

              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept.departmentId} value={dept.departmentId}>
                  {dept.deptName}
                </option>
              ))}
            </select>

            <select value={selectedDoctorId}
              onChange={(e) => setSelectedDoctorId(e.target.value)} required>

              <option value="">Select Doctor</option>
              {doctors.map((doc) => (
                <option key={doc.doctorId} value={doc.doctorId}>
                  {doc.doctorName}
                </option>
              ))}
            </select>

            <input type="text" placeholder="Disease"
              value={disease}
              onChange={(e) => setDisease(e.target.value)} required />

            <input type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)} required />

            <button type="submit" disabled={loading}>
              {loading ? "Booking..." : "Book Appointment"}
            </button>

          </form>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Appointment;