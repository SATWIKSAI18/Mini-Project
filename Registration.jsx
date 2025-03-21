import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./Login.css"; // Reuse login styles for form

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registered Successfully!\nUsername: ${username}\nEmail: ${email}`);
    navigate("/login"); // Redirect to Login Page after registration
  };

  return (
    <div className="login-container">
      <div className="form-section">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <a onClick={() => navigate("/login")} className="signup">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
