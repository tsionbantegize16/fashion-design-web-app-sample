import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation = () => {
  const [active, setActive] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'designersnote', label: 'Designer' },
    { id: 'trendspotlight', label: 'Trends' },
    { id: 'lookbook', label: 'Lookbook' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Collection' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    setActive(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('hero')}
        >
          <span className="logo-text">TSION</span>
        </motion.div>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <motion.button
                className={`nav-link ${active === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            </li>
          ))}
        </ul>

        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            Instagram
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
