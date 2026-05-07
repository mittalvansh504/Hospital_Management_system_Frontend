import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./appointment.css";
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Swal from "sweetalert2";

const Appointment = () => {

  const [patientName, setPatientName] = useState("");
  const [patientDob, setPatientDob] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientAddress, setPatientAddress] = useState("");

  const [department, setDepartment] = useState([]);
  const [selectedDept, setSelectedDept] = useState("");

  const [doctor, setDoctor] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const [disease, setDisease] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Load departments
  useEffect(() => {
    fetch("http://localhost:8181/departments/getalldepartment")
      .then(res => res.json())
      .then(data => setDepartment(data))
      .catch(err => console.log(err));
  }, []);

  // Load doctors based on department
  useEffect(() => {
    if (selectedDept) {
      fetch(`http://localhost:8181/doctor/by-department/${selectedDept}`)
        .then(res => res.json())
        .then(data => setDoctor(data))
        .catch(err => console.log(err));
    }
  }, [selectedDept]);

  const handleAppointment = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8181/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientName,
          patientDob,
          patientPhone,
          patientAddress,
          departmentId: Number(selectedDept),
          doctorId: Number(selectedDoctor),
          disease,
          appointmentDate
        })
      });

      const result = await response.json();

      if (!response.ok) {
        Swal.fire("Error", result.message, "error");
      } else {
        const doctorName = doctor.find(d => d.doctorId == selectedDoctor)?.doctorName;

        Swal.fire({
          title: "Appointment Confirmed!",
          html: `
            <b>Patient:</b> ${patientName} <br/>
            <b>Date:</b> ${appointmentDate} <br/>
            <b>Doctor:</b> ${doctorName}
          `,
          icon: "success",
          confirmButtonText: "View My Bookings"
        }).then(() => {
          navigate("/history");
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

            <input type="text" placeholder="Patient Name"
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
              onChange={(e) => setPatientAddress(e.target.value)} required />

            <select value={selectedDept}
              onChange={(e) => {
                setSelectedDept(e.target.value);
                setSelectedDoctor("");
              }} required>

              <option value="">Select Department</option>
              {department.map((dept) => (
                <option key={dept.departmentId} value={dept.departmentId}>
                  {dept.deptName}
                </option>
              ))}
            </select>

            <select value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)} required>

              <option value="">Select Doctor</option>
              {doctor.map((doc) => (
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