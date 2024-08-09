import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import Footer from "./Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = user;

    try {
      const response = await fetch(
        "https://real-data-react-default-rtdb.firebaseio.com/REal-data-react-signup.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        }
      );

      if (response.ok) {
        alert("Sign up successful");
        setUser({
          username: "",
          email: "",
          password: "",
        });
        navigate("/"); 
      } else {
        alert("Failed to sign up");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while signing up");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <h1>Sign Up</h1>
      </div>
      <section className="signup-content">
        <p>Create an account to enjoy our services</p>
        <form className="signup-form" method="POST" onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            autoComplete="off"
            value={user.username}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            value={user.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="password">Password</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              autoComplete="off"
              value={user.password}
              onChange={handleInputChange}
              required
            />
            <button type="button" className="toggle-password-btn" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>

          <button type="submit">Sign Up</button>
        </form>t
      </section>
      <Footer />
    </div>
  );
};

export default Signup;
