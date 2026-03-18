import React from 'react'

import Header from '../../Header/Header.jsx'
import Footer from '../../Footer/Footer.jsx'
import './patienthistory.css'


const Patienthistory = () => {
  return (
    <div className="Patienthistory">
      {/* Header */}
      <Header />



        {/* Doctor History Content */}
        <div className="history-container">
            <h2 className="history-title">Doctor History</h2>
            <div className="history-content">
                <table>
                    <tr>
                        <th>Patient Name</th>
                        <th>Doctor Name</th>
                        <th>Doctor Phone</th>
                        <th>Appointment Date</th>
                    </tr>
                </table>
            </div>
        </div>


       <div className="end-container">
        <Footer />
      </div>
    </div>
  )
}

export default Patienthistory
