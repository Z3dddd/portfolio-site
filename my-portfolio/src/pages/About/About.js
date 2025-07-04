import React from 'react';
import './About.css';

function About() {
  return (
    <div className="page about-page">
      <div className="container">
        <div className="about-header">
          <h1>About Me</h1>
          <p className="about-intro">
            Passionate developer with a love for creating meaningful digital experiences
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-section">
            <h2>My Story</h2>
            <p>
              I'm a full-stack developer with a passion for creating beautiful, functional, 
              and user-centered digital experiences. With a background in both design and 
              development, I bring a unique perspective to every project.
            </p>
            <p>
              I believe in writing clean, maintainable code and creating interfaces that 
              not only look great but also provide exceptional user experiences. Every 
              project is an opportunity to learn something new and push the boundaries 
              of what's possible on the web.
            </p>
          </div>
          
          <div className="skills-section">
            <h2>Skills & Technologies</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">HTML5</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">Sass</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3>Backend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">PostgreSQL</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3>Tools & Others</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Figma</span>
                  <span className="skill-tag">Agile</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="experience-section">
            <h2>Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>Senior Developer</h3>
                  <p className="timeline-company">Tech Company • 2022 - Present</p>
                  <p>Leading development of web applications and mentoring junior developers.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>Full-Stack Developer</h3>
                  <p className="timeline-company">Startup • 2020 - 2022</p>
                  <p>Built and maintained multiple web applications using modern technologies.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>Frontend Developer</h3>
                  <p className="timeline-company">Agency • 2018 - 2020</p>
                  <p>Created responsive websites and user interfaces for various clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 