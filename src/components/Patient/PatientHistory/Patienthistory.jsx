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
    if (!userId) {
      setError("User is not logged in");
      setLoading(false);
      return;
    }

    fetch(`http://localhost:8181/bookings/patient/${userId}/appointments`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });

  }, [userId]);

  return (
    <div className="Patienthistory">

      <Header />

      <div className="history-container">
        <h2>{role === "patient" ? "My Appointments" : "Doctor History"}</h2>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && bookings.length === 0 && (
          <p>No appointments found</p>
        )}

        {!loading && bookings.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((b, index) => (
                <tr key={b.bookingId || index}>
                  <td>{b.patientName}</td>
                  <td>{b.doctorName}</td>
                  <td>{b.doctorPhone}</td>
                  <td>
                    {new Date(b.appointmentDate).toLocaleDateString()}
                  </td>
                  <td>{b.status || "Booked"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Patienthistory;