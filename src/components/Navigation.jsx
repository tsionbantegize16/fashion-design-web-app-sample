import React from 'react';
import './Navigation.css'; // Create this CSS file for styling

const Navigation = () => {
  return (
    <aside className="navigation">
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navigation;