// src/pages/LeetCodeLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LeetCodeLogin.css';

const LeetCodeLogin = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      navigate(`/dashboard?leetcode=${username}`);
    }
  };

  return (
    <div className="leetcode-login-container">
      <h2>Continue with LeetCode ID </h2>
      <form className="leetcode-login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your LeetCode id (e.g. ll6lkj9r)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Continue</button>
      </form>
      <div className="leetcode-login-footer">
        <p>We use public data from your LeetCode profile to personalize your dashboard.</p>
      </div>
    </div>
  );
};

export default LeetCodeLogin;
