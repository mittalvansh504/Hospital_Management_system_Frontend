import React from 'react'
import { Link } from 'react-router-dom'
import "./appointment.css";
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'


const Appointment = () => {
  return (
    <div className='appointment'>
      <Header />

        {/* Appointment Content */}

        <div className="appointment-content">
            <h2>Book an Appointment</h2>
            <form method="post" className="appointment-form">
                <label htmlFor="patientName">Patient Name:</label>
                <input type="text" id="patientName" name="patientName" required />

                <label htmlFor="patientEmail">Patient Email:</label>
                <input type="email" id="patientEmail" name="patientEmail" required />

                <label htmlFor="doctor">Select Doctor:</label>
                <select id="doctor" name="doctor" required>
                    <option value="">--Select Doctor--</option>
                    <option value="dr_smith">Dr. John Smith - Cardiologist</option>
                    <option value="dr_jones">Dr. Emily Jones - Dermatologist</option>

                    <option value="dr_brown">Dr. Michael Brown - Neurologist</option>
                    <option value="dr_davis">Dr. Sarah Davis - Pediatrician</option>
                    <option value="dr_miller">Dr. David Miller - General Practitioner</option>
                </select>

                <label htmlFor="diseases">Diseases:</label>
                <input type="text" id="diseases" name="diseases" required />


                <label htmlFor="patientDob">Patient Date of Birth:</label>
                <input type="date" id="patientDob" name="patientDob" required />

                <label htmlFor="patientPhone">Patient Phone:</label>
                <input type="tel" id="patientPhone" name="patientPhone" required />

                <label htmlFor="patientAddress">Patient Address:</label>
                <input type="text" id="patientAddress" name="patientAddress" required />

                <label htmlFor="appointmentDate">Appointment Date:</label>
                <input type="date" id="appointmentDate" name="appointmentDate" required />
                
                <button type="submit">Book Appointment</button>

            </form>
        </div>


      <div className="end-container">
        <Footer />
      </div>
    </div>
  )
}

export default Appointment
