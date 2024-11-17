import React, { useState } from "react";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import "./mysignup.css";

function Mysignup() {
  const [role, setRole] = useState(""); // State to track selected role
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    ngoName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    // Add logic to send data to backend
  };

  return (
    <div>
      <MyNavbar />
      <div className="signup-container">
        <h1 className="signup-title">Sign Up</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Role Selection */}
          <div className="form-group">
            <label htmlFor="role" className="form-label">
              Sign Up As
            </label>
            <select
              id="role"
              name="role"
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="" disabled>
                Select your role
              </option>
              <option value="admin">Admin</option>
              <option value="volunteer">Volunteer</option>
            </select>
          </div>

          {/* Conditional Field for NGO Name */}
          {role === "admin" && (
            <div className="form-group">
              <label htmlFor="ngoName" className="form-label">
                Name of Your NGO
              </label>
              <input
                type="text"
                id="ngoName"
                name="ngoName"
                className="form-input"
                placeholder="Enter the name of your NGO"
                value={formData.ngoName}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          {role === "volunteer" && (
            <div className="form-group">
              <label htmlFor="ngoName" className="form-label">
                NGO You Belong To
              </label>
              <input
                type="text"
                id="ngoName"
                name="ngoName"
                className="form-input"
                placeholder="Enter the name of the NGO"
                value={formData.ngoName}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Mysignup;
