import React, { useState, useEffect } from 'react'
import Header from '../../Header/Header.jsx'
import Footer from '../../Footer/Footer.jsx'
import './patienthistory.css'


const Patienthistory = () => {

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const role = localStorage.getItem("role");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if(!userId){
      setError("user is not logged in");
      setLoading(false);
      return;
    }

    let url = `http://localhost:8181/bookings/patient/${userId}/appointments`;

    fetch(url).then((res) => {
      if(!res.ok){
        throw new Error("Failed to fetch data");
      }
      return res.json();
      }).then((data) => {
        setBookings(data);
        setLoading(false);
      }).catch((err) => {
        console.log(err);
        setError(err.message);
        setLoading(false);
      });
   }, [role, userId]);


  return (
    <div className="Patienthistory">
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="history-container">
        <h2>
          {role === "patient" ? "Patient History" : "Doctor History"}
        </h2>

        {/* Loading */}
        {loading && <p>Loading...</p>}

        {/* Error */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Data */}
        {!loading && !error && bookings.length === 0 && (
          <p>No history found</p>
        )}

        {!loading && !error && bookings.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Doctor Name </th>
                <th>Doctor Phone no</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((b, index) => (
                <tr key={b.bookingId || index}>
                  <td>{b.patientName || "N/A"}</td>
                  <td>{b.doctorName || "N/A"}</td>
                  <td>{b.doctorPhone || "N/A"}</td>
                  <td>{b.appointmentDate || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Footer */}
      <Footer />
      </div>
  )
}

export default Patienthistory
