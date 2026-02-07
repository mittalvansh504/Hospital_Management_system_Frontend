import React from 'react'
import "./image.css";


const Image = () => {

  const navigate = () => {
    window.location.href = "/appointment";
  }



  return (
    <div className="Image">
      <div className="middle-down">
          <div className="middle-down-doctor-data">
            <div className="middle-down-doctor-data-img">
              <img src="/Images/Hospitalimg_1.png" alt="" />
            </div>
            <div className="middle-down-doctor-data-info">
              <div className="doctor-data">
                <h2>Vansh Mittal</h2>
                <h2>Cardiologist</h2>
                <p>MBBS</p>
              </div>
            </div>
          </div>  
          <button className='appointment-button' onClick={navigate}>
              Appointment
          </button>        
        </div>
    </div>
  )
}

export default Image
