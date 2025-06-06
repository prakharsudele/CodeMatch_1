// src/pages/LandingPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import CardCarousel from '../pages/CardCarousel'; // Adjust the path if necessary

const LandingPage = () => {
  const SafeMotion = motion.div || 'div';
  const SafeMotionH1 = motion.h1 || 'h1';
  const SafeMotionP = motion.p || 'p';

  return (
    <div className="landing-container no-padding">
      <div className="landing-content">
        <div className="landing-text">
          <SafeMotionH1 
            className="landing-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to <span className="highlight">CodeMatch</span>
          </SafeMotionH1>

          <SafeMotionP 
            className="landing-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Find your perfect LeetCode or project partner. Swipe. Match. Code. Repeat.
          </SafeMotionP>

          <SafeMotion 
            className="button-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <a href="http://localhost:5000/auth/github">
  <button className="primary-button">Sign Up with GitHub</button>
</a>


            <Link to="/leetcode">
  <button className="outline-button">
    Continue with LeetCode
  </button>
</Link>

          </SafeMotion>
        </div>

        <SafeMotion
         initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}>
          <div className="landing-carousel">
          <CardCarousel />
        </div>
        </SafeMotion>
      </div>
    </div>
  );
};

export default LandingPage;
