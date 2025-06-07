// src/components/DashboardNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardNavbar.css';

const DashboardNavbar = () => {
  return (
    <nav className="dashboard-navbar">
      <h2>CodeMatch</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/swipe">Swipe</Link></li>
        <li><Link to="/chat">Chat</Link></li>
        <li><Link to="/#about">About</Link></li>
        <li>
  <button
    className="logout-button"
    onClick={() => {
      localStorage.removeItem('github_user');
      localStorage.removeItem('leetcode_user');
      window.location.href = '/';
    }}
  >
    Logout
  </button>
</li>

      </ul>
    </nav>
  );
};

export default DashboardNavbar;
