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

    fetch(
      `https://hospitalbackend-f2ja.onrender.com/bookings/doctor/getAllAppointmentsForDoctor/${userId}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("No Bookings Found");
        }
        return res.json();
      })
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

  }, [userId]);

  const markVisited = async (bookingId) => {

    try {

      const response = await fetch(
        `https://hospitalbackend-f2ja.onrender.com/bookings/markVisited/${bookingId}`,
        {
          method: "PUT",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      setBookings((prev) =>
        prev.map((booking) =>
          booking.bookingId === bookingId
            ? { ...booking, status: "VISITED" }
            : booking
        )
      );

      alert("Patient marked as visited");

    } catch (error) {
      console.error(error);
      alert("Failed to update status");
    }
  };

  return (
    <div className="doctorhistory">

      <Header />

      <div className="history-container">

        <h2>
          {role === "doctor"
            ? "Doctor Appointments"
            : "Patient History"}
        </h2>

        {loading && <p>Loading...</p>}

        {error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )}

        {!loading && !error && bookings.length === 0 && (
          <p>No appointments found</p>
        )}

        {!loading && !error && bookings.length > 0 && (

          <table>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Patient Phone</th>
                <th>Disease</th>
                <th>Appointment Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {bookings.map((b, index) => (

                <tr key={b.bookingId || index}>

                  <td>{b.patientName || "N/A"}</td>

                  <td>{b.patientPhone || "N/A"}</td>

                  <td>{b.disease || "N/A"}</td>

                  <td>
                    {b.appointmentDate
                      ? new Date(
                          b.appointmentDate
                        ).toLocaleDateString()
                      : "N/A"}
                  </td>

                  <td>
                    <span
                      className={
                        b.status === "VISITED"
                          ? "status-visited"
                          : "status-booked"
                      }
                    >
                      {b.status || "BOOKED"}
                    </span>
                  </td>

                  <td>
                    {b.status === "VISITED" ? (
                      <span className="status-visited">
                        Completed
                      </span>
                    ) : (
                      <button
                        onClick={() =>
                          markVisited(
                            b.bookingId
                          )
                        }
                      >
                        Mark Visited
                      </button>
                    )}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

      <Footer />

    </div>
  );
};

export default Doctorhistory;