import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TitleBar from './components/TitleBar/TitleBar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Pages from './pages/Pages/Pages';
import './App.css';

function Footer() {
  return (
    <footer style={{textAlign: 'center', padding: '2rem', background: '#222', color: '#eee'}}>
      &copy; 2025 Portfolio. All rights reserved.
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <TitleBar />
        <div id="app" className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pages" element={<Pages />} />
          </Routes>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
