import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import SignUp from './components/Doctor/SignUp.jsx'
import SignUpPatient from './components/Patient/SignupPatient.jsx'
import Login from './components/Doctor/Login.jsx'
import PatientLogin from './components/Patient/LoginPatient.jsx'
import Contact from './components/Contact/Contact.jsx'
import Appointment from './components/Appointment/Appointment.jsx'
import Doctorhistory from './components/Doctor/DoctorHistory/Doctorhistory.jsx'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctorsignup" element={<SignUp />} />
        <Route path="/patientsignup" element={<SignUpPatient />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patientlogin" element={<PatientLogin />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/doctorhistory" element={<Doctorhistory />} />

      </Routes>
    </div>
  )
}

export default App
