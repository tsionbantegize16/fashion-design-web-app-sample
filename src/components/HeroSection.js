import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HeroSection.css';

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
  const timerRef = useRef(null);
  const lastPosRef = useRef({ x: 0, y: 0 });

  const addImageToTrail = (x, y) => {
    const id = Date.now();
    const image = jewelryImages[imageIndexRef.current % jewelryImages.length];
    setTrail((prev) => [...prev, { id, x, y, image }]);
    imageIndexRef.current++;

    // Remove image after 3 seconds
    setTimeout(() => {
      setTrail((prev) => prev.filter((item) => item.id !== id));
    }, 3000);
  };

  const startTrailStream = (x, y) => {
    if (timerRef.current) return;

    let count = 0;
    timerRef.current = setInterval(() => {
      addImageToTrail(x, y);
      count++;
      if (count >= 5) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }, 150); // slightly slower interval
  };

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const dx = Math.abs(x - lastPosRef.current.x);
    const dy = Math.abs(y - lastPosRef.current.y);
    if (dx > 15 || dy > 15) {
      lastPosRef.current = { x, y };
      startTrailStream(x, y);
    }
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
  };

  return (
    <div
      className="hero-section"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <h1 className="hero-title">Amanda Braga</h1>
      <div className="jewelry-trail">
        <AnimatePresence>
          {trail.map((item) => (
            <motion.img
              key={item.id}
              src={item.image}
              alt="trail"
              className="trail-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                top: `${item.y - 50}px`,
                left: `${item.x - 50}px`,
                width: '100px',
                height: '100px',
                borderRadius: '0px',
              }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroSection;
