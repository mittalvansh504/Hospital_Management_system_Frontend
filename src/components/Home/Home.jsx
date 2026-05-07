import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import "./home.css";
import Image from "../Image/Image.jsx";
import Chat from "../ChatBot/Chat.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="home">

      <Header />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Smart Healthcare <span>Made Simple</span>
          </h1>
          <p>
            Manage patients, appointments, and medical records with ease using
            our modern hospital management system.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-outline"
               onClick={() => navigate("/about")}
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img src="./Images/Hospitalimg_1.png" alt="hospital" />
        </div>
      </section>

      {/* FEATURES / ABOUT */}
      <section className="middle-container" id="about">
        <div className="card">
          <h3>Advanced Care</h3>
          <p>Modern equipment & experienced doctors for better treatment.</p>
        </div>

        <div className="card">
          <h3>Digital Records</h3>
          <p>Secure patient data and easy access anytime, anywhere.</p>
        </div>

        <div className="card">
          <h3>24/7 Support</h3>
          <p>Emergency services and assistance round the clock.</p>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="doctor-section">
        <h1>Our Doctors</h1>
        <div className="doctor-list">
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
        </div>
      </section>

      {/* CHATBOT */}
      <div className="chat-floating">
        <Chat />
      </div>

      <Footer />

    </div>
  );
};

export default Home;