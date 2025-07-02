import React from 'react';
import { NavLink } from 'react-router-dom';
import './TitleBar.css';

function TitleBar() {
  return (
    <nav className="title-bar">
      <NavLink className="title-bar-link" to="/">Home</NavLink>
      <NavLink className="title-bar-link" to="/projects">Projects</NavLink>
      <NavLink className="title-bar-link" to="/about">About</NavLink>
      <NavLink className="title-bar-link" to="/contact">Contact</NavLink>
      <NavLink className="title-bar-link" to="/pages">Pages</NavLink>
    </nav>
  );
}

export default TitleBar; 