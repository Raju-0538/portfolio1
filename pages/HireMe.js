import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './HireMe.css';

const HireMe = () => {
  return (
    <div className='hire-wrapper'>
      <section className="hire-me-section">
      <div className="hire-me-container">
        <h2 className="hire-me-title">Let's Connect!</h2>
        <p className="hire-me-subtitle">Feel free to reach out for collaborations or just a friendly chat!</p>
        
        <div className="contact-card">
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <p>9030288467</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>rajkumar.garika@sasi.ac.in</p>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/rajkumar-garika-38b451294/" className="social-btn linkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" /> LinkedIn
            </a>
            <a href="https://github.com/Raju-0538" className="social-btn github" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HireMe;
