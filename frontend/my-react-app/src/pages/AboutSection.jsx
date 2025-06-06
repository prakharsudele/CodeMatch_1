// src/components/AboutSection.jsx
import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About CodeMatch</h2>
        <p>
          CodeMatch is a platform designed to help developers find ideal coding partners. Whether you're preparing for DSA interviews, building side projects, or looking to collaborate in hackathons — CodeMatch connects you with like-minded coders through swipe-based matchmaking.
        </p>
        <p>
          We blend the power of GitHub and LeetCode data with a modern, user-friendly interface to help you collaborate better, learn faster, and grow together.
        </p>
      </div>

      <div className="marquee-wrapper">
  <div className="marquee">
    <span>
      JavaScript &nbsp; | &nbsp; Python &nbsp; | &nbsp; React &nbsp; | &nbsp; MongoDB &nbsp; | &nbsp;
      GitHub &nbsp; | &nbsp; LeetCode &nbsp; | &nbsp; Hackathons &nbsp; | &nbsp; DSA &nbsp; | &nbsp;
      Team Projects &nbsp; | &nbsp; Firebase &nbsp; | &nbsp; Agile Development &nbsp; | &nbsp;
      Open Source &nbsp; | &nbsp; Figma &nbsp; | &nbsp; TypeScript &nbsp; | &nbsp; Node.js &nbsp; | 
      &nbsp; CodeChef &nbsp; | &nbsp; gfg &nbsp; | &nbsp; Java
    </span>
  </div>
</div>

    </section>
  );
};

export default AboutSection;
