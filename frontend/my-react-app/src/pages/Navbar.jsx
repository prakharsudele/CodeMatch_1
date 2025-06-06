// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-name">CodeMatch</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/swipe-demo">About</Link></li>
        <li><Link to="/sign-up" className="sign-up">Sign-Up</Link></li>
        <li><Link to="/login" className="login-btn">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
