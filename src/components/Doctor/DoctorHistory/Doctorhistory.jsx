import React, { useEffect, useState } from "react";
import Header from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx";
import "./doctorhistory.css";

const Doctorhistory = () => {

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const role = localStorage.getItem("role");
  const userId = localStorage.getItem("userId");

  useEffect(() => {

    if (!userId) {
      setError("User not logged in");
      setLoading(false);
      return;
    }

    let url = `http://localhost:8181/bookings/doctor/${userId}/appointments`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setLoading(false);
      });

  }, [role, userId]);

  return (
    <div className="doctorhistory">

      {/* Header */}
      <Header />

      {/* Content */}
      <div className="history-container">
        <h2>
          {role === "doctor" ? "Doctor History" : "Patient History"}
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
                <th>Patient</th>
                <th>Patient Phone </th>
                <th>Disease</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((b, index) => (
                <tr key={b.bookingId || index}>
                  <td>{b.patientName || "N/A"}</td>
                  <td>{b.patientPhone || "N/A"}</td>
                  <td>{b.disease || "N/A"}</td>
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
  );
};

export default Doctorhistory;