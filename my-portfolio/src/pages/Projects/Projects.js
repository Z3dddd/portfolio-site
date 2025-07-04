import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://via.placeholder.com/400x250/667eea/ffffff?text=E-Commerce",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      image: "https://via.placeholder.com/400x250/764ba2/ffffff?text=Task+App",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather application that displays current weather and forecasts with interactive maps and location-based services.",
      technologies: ["JavaScript", "Weather API", "CSS3", "HTML5"],
      image: "https://via.placeholder.com/400x250/667eea/ffffff?text=Weather+App",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and modern CSS techniques. Features smooth animations and clean design.",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      image: "https://via.placeholder.com/400x250/764ba2/ffffff?text=Portfolio",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for managing multiple social media accounts with analytics, scheduling, and content management.",
      technologies: ["React", "Node.js", "Chart.js", "Social APIs"],
      image: "https://via.placeholder.com/400x250/667eea/ffffff?text=Dashboard",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "A recipe discovery app that helps users find recipes based on available ingredients, dietary restrictions, and cooking preferences.",
      technologies: ["React", "Recipe API", "CSS3", "Local Storage"],
      image: "https://via.placeholder.com/400x250/764ba2/ffffff?text=Recipe+App",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="page projects-page">
      <div className="container">
        <div className="projects-header">
          <h1>My Projects</h1>
          <p className="projects-intro">
            Here are some of the projects I've worked on. Each one represents a unique 
            challenge and learning experience.
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                    <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <h2>Interested in working together?</h2>
          <p>Let's discuss your next project and bring your ideas to life.</p>
          <a href="/contact" className="btn">Get In Touch</a>
        </div>
      </div>
    </div>
  );
}

export default Projects; 