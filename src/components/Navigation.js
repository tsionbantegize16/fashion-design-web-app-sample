import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [active, setActive] = useState('about');

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="navigation">
      <nav>
        <ul>
          {['about', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => scrollToSection(e, section)}
                className={active === section ? 'active' : ''}
                aria-current={active === section ? 'page' : undefined}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Navigation;
