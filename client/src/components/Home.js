import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  const features = [
    "High-precision furnace indicators",
    "Durable, industry-grade materials",
    "Easy installation & maintenance",
    "Trusted by leading steel manufacturers",
  ];

  const clients = [
    "Tata Steel",
    "JSW Steel",
    "SAIL",
    "Essar Steel",
    "Bhushan Steel",
  ];

  return (
    <>
      <header className="home-header">
        <div className="logo-section">
          <img
            src="https://cdn-icons-png.flaticon.com/512/482/482239.png"
            alt="Six Sense Logo"
            className="logo-img"
          />
          <h1>Six Sense</h1>
        </div>
        <div className="auth-buttons">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </header>

      <section className="company-details">
        <h2>About Six Sense</h2>
        <p>
          Six Sense, located in Airoli, Navi Mumbai, Maharashtra, specializes
          in manufacturing premium furnace temperature indicators. With a
          decade of experience, we empower industries to achieve precise
          thermal monitoring.
        </p>
      </section>

      <section className="features-section">
        <h2>Features</h2>
        <ul>
          {features.map((f, idx) => (
            <li key={idx}>{f}</li>
          ))}
        </ul>
      </section>

      <section className="clients-section">
        <h2>Our Clients</h2>
        <div className="clients-list">
          {clients.map((client, idx) => (
            <div key={idx} className="client-card">
              {client}
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: contact@sixsense.com</p>
        <p>Phone: +91 9876543210</p>
        <p>Address: Airoli, Navi Mumbai, Maharashtra, India</p>
      </section>

      <Footer />
    </>
  );
};

export default Home;
