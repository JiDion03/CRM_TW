import React from "react";
import "./about.css";
import MyNavbar from "../../components/MyNavbar/MyNavbar";

function About() {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <div className="about-container">
        <h1 className="about-title">About Our NGO Management System (CRM)</h1>
        <p className="about-description">
          Our NGO Management System is designed to empower non-governmental
          organizations by digitalizing their daily operations. With an
          intuitive interface, powerful tools, and scalable architecture, this
          application streamlines communication, resource management, and
          volunteer coordination.
        </p>
        <h2 className="about-subtitle">Features:</h2>
        <ul className="about-features">
          <li>Efficient Volunteer Management</li>
          <li>Event Planning and Tracking</li>
          <li>Donation Handling and Reporting</li>
          <li>Comprehensive Analytics and Insights</li>
        </ul>
        <h2 className="about-subtitle">Mission:</h2>
        <p className="about-mission">
          Our mission is to bridge the gap between technology and NGOs, enabling
          them to focus on what truly matters: making a difference.
        </p>
      </div>
    </div>
  );
}

export default About;
