import React, { useEffect } from 'react';
import './text.css';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Text() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.App').classList.add('show');
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div>
      <h1>Hi, I am Rajkumar.</h1>
      <p className="description">
        I am a passionate Full Stack Developer skilled in building responsive and dynamic web applications. 
        I specialize in front-end design and back-end logic, creating seamless user experiences.
      </p>
      <div className="social-icons">
        <a href='https://x.com/i/flow/login' target="_blank" rel="noopener noreferrer">
          <FaTwitter style={{ color: '#1DA1F2', fontSize: '45px', marginRight: '50px' }} />
        </a>
        <a href='https://www.instagram.com/raju_official__07/?hl=en' target="_blank" rel="noopener noreferrer">
          <FaInstagram style={{ color: '#C13584', fontSize: '45px', marginRight: '50px' }} />
        </a>
        <a href='https://www.linkedin.com/in/rajkumar-garika-38b451294/' target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={{ color: '#0077b5', fontSize: '45px', marginRight: '50px' }} />
        </a>
        <a href='https://github.com/Raju-0538' target="_blank" rel="noopener noreferrer">
          <FaGithub style={{ color: '#333', fontSize: '45px' }} />
        </a>
      </div>
      <div className='but'>
        <button type='submit'><Link to={"/hireme"} className='btn'>Hire Me</Link></button>
      </div>
    </div>
    </div>
  );
}

export default Text;
