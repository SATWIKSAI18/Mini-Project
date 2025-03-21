import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Login.css"; // Ensure the CSS file exists

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simulating authentication (Replace this with real authentication logic)
    if (email === "test@example.com" && password === "password") {
      alert("Login successful!");
      navigate("/"); // Redirect to Home Page
    } else {
      alert("Invalid email or password.");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://accounts.google.com";
  };

  const handleFacebookLogin = () => {
    window.location.href = "https://www.facebook.com/login";
  };

  const handleAppleLogin = () => {
    window.location.href = "https://appleid.apple.com/auth/authorize";
  };

  return (
    <div className="page-container">
      {/* Header */}
      <header className="header">
        <h1>Fiesta on Wheels</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/login" className="login-link">Login</a>
        </nav>
      </header>

      {/* Login Section */}
      <div className="login-container">
        <div className="image-section">
          <img
            src="https://blogassets.airtel.in/wp-content/uploads/2023/05/felix-rostig-UmV2wr-Vbq8-unsplash.jpg"
            alt="Party Planning"
          />
        </div>

        <div className="form-section">
          <h2>Welcome to <span className="highlight">Fiesta on Wheels</span></h2>
          <p>Your ultimate party planning experience starts here!</p>
          <form onSubmit={handleLogin}>
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
            <div className="links">
              <a href="#" className="forgot-password">Forgot Password?</a>
              <a onClick={() => navigate("/register")} className="signup">Sign Up</a> 
            </div>
            <button type="submit">Login</button>
          </form>

          {/* Social Login Buttons */}
          <div className="social-login">
            <button className="google" onClick={handleGoogleLogin}>Continue with Google</button>
            <button className="facebook" onClick={handleFacebookLogin}>Continue with Facebook</button>
            <button className="apple" onClick={handleAppleLogin}>Continue with Apple</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Fiesta on Wheels. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
