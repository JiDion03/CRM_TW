import React from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";
import MyNavbar from "../../components/MyNavbar/MyNavbar";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div>
      <MyNavbar></MyNavbar>
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-headline">
            Simplify NGO Operations with Our CRM
          </h1>
          <p className="hero-subheading">
            Manage resources, volunteers, events, and donations all in one
            place.
          </p>
          <div className="hero-buttons">
            <button
              className="cta-button"
              onClick={() => navigate("/dashboard")}
            >
              Get Started
            </button>
            <button className="cta-button secondary">Learn More</button>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2 className="features-headline">Why Choose Our CRM?</h2>
          <ul className="features-list">
            <li>
              <strong>Streamlined Volunteer Management:</strong> Keep track of
              volunteer activities effortlessly.
            </li>
            <li>
              <strong>Comprehensive Event Planning:</strong> Plan, schedule, and
              monitor events with ease.
            </li>
            <li>
              <strong>Donation Tracking Made Simple:</strong> Monitor
              contributions and generate insightful reports.
            </li>
            <li>
              <strong>Data-Driven Insights:</strong> Make informed decisions
              with robust analytics.
            </li>
          </ul>
        </section>

        {/* Footer Section */}
        <footer className="home-footer">
          <h2>Ready to Take Your NGO to the Next Level?</h2>
          <button className="cta-button" onClick={() => navigate("/signup")}>
            Sign Up Now
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Homepage;
