import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import "./mylogin.css";

function Mylogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Logging in with", { email, password });
    // Redirect on success (example route)
    navigate("/dashboard");
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div>
      <MyNavbar />
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="signup-prompt">
          Don't have an account?{" "}
          <span className="signup-link" onClick={goToSignUp}>
            Sign up here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Mylogin;
