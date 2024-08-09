import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Path">
        <Link to="/">Home</Link>
        <Link to="/Arts">Arts</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>
      <div className="Signup">
        <Link to="/Signup" className="signup-button">Sign Up</Link>
      </div>
    </div>
  );
}

export default Navbar;
