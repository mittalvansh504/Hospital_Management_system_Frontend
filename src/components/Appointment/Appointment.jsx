import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./appointment.css";
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

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

  const navigate = useNavigate();

  // ✅ Load departments
  useEffect(() => {
    fetch("http://localhost:8181/departments/getalldepartment")
      .then(res => res.json())
      .then(data => setDepartment(data))
      .catch(err => console.log(err));
  }, []);

  // ✅ Load doctors based on department ID
  useEffect(() => {
  console.log("Selected Department:", selectedDept);

    if (selectedDept) {
      fetch(`http://localhost:8181/doctor/by-department/${selectedDept}`)
        .then(res => res.json())
        .then(data => {
          console.log("Doctors fetched:", data);
          setDoctor(data);
        })
        .catch(err => console.log(err));
    }
  }, [selectedDept]);


  const handleAppointment = async (e) => {
    e.preventDefault();

    if (!selectedDept || !selectedDoctor) {
      alert("Please select department and doctor");
      return;
    }

    const response = await fetch("http://localhost:8181/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
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

    const result = await response.text();

    if (!response.ok) {
      alert(result);
    } else {
      alert("Appointment booked successfully!");
      navigate("/");
    }
  };

  return (
    <div className='appointment'>
      <Header />

      <div className="appointment-content">
        <h2>Book an Appointment</h2>
        <form onSubmit={handleAppointment} className="appointment-form">

          <label>Patient Name:</label>
          <input type="text" value={patientName}
            onChange={(e) => setPatientName(e.target.value)} required />

          <label>Patient Date of Birth:</label>
          <input type="date" value={patientDob}
            onChange={(e) => setPatientDob(e.target.value)} required />

          <label>Patient Phone:</label>
          <input type="tel" value={patientPhone}
            onChange={(e) => setPatientPhone(e.target.value)} required />

          <label>Patient Address:</label>
          <input type="text" value={patientAddress}
            onChange={(e) => setPatientAddress(e.target.value)} required />

          {/* Department Dropdown */}
          <label>Select Department:</label>
          <select value={selectedDept}
            onChange={(e) => {
              setSelectedDept(e.target.value);
              setSelectedDoctor(""); // reset doctor
            }}
            required>
            <option value="">-- Select Department --</option>
            {department.map((dept) => (
              <option key={dept.departmentId} value={dept.departmentId}>
                {dept.deptName}
              </option>
            ))}
          </select>

          {/* Doctor Dropdown */}
          <label>Select Doctor:</label>
          <select value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            required>
            <option value="">-- Select Doctor --</option>
            {doctor.map((doc) => (
              <option key={doc.doctorId} value={doc.doctorId}>
                {doc.doctorName}
              </option>
            ))}
          </select>

          <label>Diseases:</label>
          <input type="text" value={disease}
            onChange={(e) => setDisease(e.target.value)} required />

          <label>Appointment Date:</label>
          <input type="date" value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)} required />

          <button type="submit">Book Appointment</button>
        </form>
      </div>

      <Footer />
    </div>
  )
}

export default Appointment;
