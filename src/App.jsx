import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import SignUpDoctor from './components/Doctor/DoctorSignUp.jsx'
import SignUpPatient from './components/Patient/SignupPatient.jsx'
import DoctorLogin from './components/Doctor/DoctorLogin.jsx'
import PatientLogin from './components/Patient/LoginPatient.jsx'
import Contact from './components/Contact/Contact.jsx'
import Appointment from './components/Appointment/Appointment.jsx'
import Doctorhistory from './components/Doctor/DoctorHistory/Doctorhistory.jsx'
import Patienthistory from './components/Patient/PatientHistory/Patienthistory.jsx'
import PrivateRoute from './components/Private/PrivateRoute.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/header" element={<Header />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctorsignup" element={<SignUpDoctor />} />
      
      <Route path="/patientsignup" element={<SignUpPatient />} />
      <Route path="/doctorlogin" element={<DoctorLogin />} />
      <Route path="/patientlogin" element={<PatientLogin />} />

      {/* Protected Routes */}
      <Route path="/doctorhistory" element={<PrivateRoute role="doctor"><Doctorhistory /></PrivateRoute>}/>

      <Route path="/patienthistory" element={<PrivateRoute role="patient"><Patienthistory /></PrivateRoute>}/>

      <Route path="/appointment" element={<Appointment />} />

      <Route path="/footer" element={<Footer />} />
      
    </Routes>
  )
}

export default App
