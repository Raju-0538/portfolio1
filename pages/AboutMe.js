import React from 'react';
import '../pages/AboutMe.css'; 
import profilePic from "../pages/pro.png";

const AboutMe = () => {
  return (
    <div className='cont2'>
      <section className="about-me-section">
      
      <div className="about-me-container">
        <div className="profile-wrapper">
        <img src={profilePic} alt="Raj Kumar" className="profile-pic" />

        </div>

        {/* About Me Details Section */}
        <div className="about-details">
          <h2 className="about-title">About Me</h2> 
          <p className="about-description">
            Hi, I'm Raj Kumar! A passionate developer skilled in MERN stack, React, and more. 
            I love crafting interactive web applications with beautiful designs. 
            My journey in tech is fueled by curiosity and creativity, always eager to learn and explore new technologies.
          </p>
          <h3 className="about-subtitle">Education & Interests</h3>
          <ul className="about-list">
            <li>🎓 Pursuing Computer Science Degree</li>
            <li>🚀 Passionate about App Development and AI</li>
            <li>🎨 Creative in designing user experiences</li>
            <li>📚 Always learning and growing</li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutMe;