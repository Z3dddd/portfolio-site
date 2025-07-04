import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="page home-page">
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Your Name</span>
              </h1>
              <p className="hero-subtitle">
                Full-Stack Developer & Creative Problem Solver
              </p>
              <p className="hero-description">
                I create beautiful, functional, and user-centered digital experiences. 
                Passionate about clean code and innovative solutions.
              </p>
              <div className="hero-buttons">
                <Link to="/projects" className="btn">View My Work</Link>
                <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
              </div>
            </div>
            <div className="hero-image">
              <img
                src={process.env.PUBLIC_URL + '/images/mylogo.png'}
                alt="Portfolio Logo"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Web Development</h3>
              <p>Modern, responsive websites and web applications built with the latest technologies.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>User-centered design that combines aesthetics with functionality and usability.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Performance</h3>
              <p>Optimized applications that load fast and provide smooth user experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 