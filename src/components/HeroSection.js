import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HeroSection.css';
import img1 from '../assets/images/image1.jpg';
import img2 from '../assets/images/image2.jpg';
import img3 from '../assets/images/image3.jpg';
import img4 from '../assets/images/image4.jpg';
import img5 from '../assets/images/image5.jpg';
import img6 from '../assets/images/image6.jpg';

const jewelryImages = [img1, img2, img3, img4, img5, img6];
const MAX_TRAIL = 10;
const IMAGE_DELAY = 200; // ms between images
const TRAIL_HIDE_DELAY = 1500; // ms to hide trail when idle

const HeroSection = () => {
  const [trail, setTrail] = useState([]);
  const imageIndexRef = useRef(0);
  const lastImageTimeRef = useRef(0);
  const hideTrailTimerRef = useRef(null);

  const addImageToTrail = useCallback((x, y) => {
    const now = Date.now();
    if (now - lastImageTimeRef.current < IMAGE_DELAY) return;
    lastImageTimeRef.current = now;

    const id = now;
    const image = jewelryImages[imageIndexRef.current % jewelryImages.length];

    const offsetX = (Math.random() - 0.5) * 30;
    const offsetY = (Math.random() - 0.5) * 30;

    setTrail((prev) => {
      const updated = [...prev, { id, x: x + offsetX, y: y + offsetY, image }];
      return updated.slice(-MAX_TRAIL);
    });

    imageIndexRef.current++;
  }, []);

  const handleMouseMove = useCallback((e) => {
    const { clientX: x, clientY: y } = e;
    addImageToTrail(x, y);

    if (hideTrailTimerRef.current) {
      clearTimeout(hideTrailTimerRef.current);
    }

    hideTrailTimerRef.current = setTimeout(() => {
      setTrail([]);
    }, TRAIL_HIDE_DELAY);
  }, [addImageToTrail]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (hideTrailTimerRef.current) clearTimeout(hideTrailTimerRef.current);
    };
  }, [handleMouseMove]);

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Light up the world</h1>
        <p className="hero-subtitle">Shine your light, inspire the world</p>
      </div>
      <AnimatePresence>
        {trail.map((item) => (
          <motion.img
            key={item.id}
            src={item.image}
            alt="fashion"
            className="trail-image float-effect"
            initial={{ opacity: 0, scale: 0.3, rotate: -10 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: Math.random() * 10 - 5,
            }}
            exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.5 }}
            style={{
              top: `${item.y - 50}px`,
              left: `${item.x - 50}px`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
