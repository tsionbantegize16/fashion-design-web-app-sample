import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

// Import your jewelry images
import jewelry1 from '../assets/images/eagle1.jpg';
import jewelry2 from '../assets/images/crow.jpg';

const jewelryImages = [
  jewelry1, jewelry2, jewelry1, jewelry2, jewelry1,
  jewelry2, jewelry1, jewelry2, jewelry1, jewelry2,
];

const HeroSection = () => {
  const containerRef = useRef(null);
  const [trail, setTrail] = useState([]);
  const imageIndexRef = useRef(0);
  const animationFrame = useRef();

  const addTrail = (x, y) => {
    setTrail((prev) => [
      ...prev,
      {
        id: Date.now(),
        x,
        y,
        image: jewelryImages[imageIndexRef.current % jewelryImages.length],
      },
    ]);
    imageIndexRef.current++;
  };

  const handleInteraction = (x, y) => {
    addTrail(x, y);
  };

  const handleMouseMove = (e) => {
    if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    animationFrame.current = requestAnimationFrame(() => {
      handleInteraction(e.clientX, e.clientY);
    });
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    handleInteraction(touch.clientX, touch.clientY);
  };

  const handleScroll = () => {
    const { x, y } = containerRef.current.getBoundingClientRect();
    handleInteraction(window.innerWidth / 2, y + window.scrollY % 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="hero-section"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <h1 className="hero-title">Amanda Braga</h1>
      <div className="jewelry-trail">
        {trail.slice(-10).map((item) => (
          <motion.img
            key={item.id}
            src={item.image}
            alt="trail"
            className="trail-image"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.9, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              top: `${item.y - 40}px`,
              left: `${item.x - 40}px`,
              width: '80px',
              height: '80px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
