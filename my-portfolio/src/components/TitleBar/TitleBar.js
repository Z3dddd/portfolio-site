import React from 'react';
import { NavLink } from 'react-router-dom';
import './TitleBar.css';

function TitleBar() {
  return (
    <nav className="title-bar">
      <div className="nav-brand">
        <NavLink to="/" className="brand-link">Portfolio</NavLink>
      </div>
      <div className="nav-links">
        <NavLink className="title-bar-link" to="/" end>Home</NavLink>
        <NavLink className="title-bar-link" to="/projects">Projects</NavLink>
        <NavLink className="title-bar-link" to="/about">About</NavLink>
        <NavLink className="title-bar-link" to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default TitleBar; 