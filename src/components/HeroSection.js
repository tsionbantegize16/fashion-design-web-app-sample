'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const imageRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useAnimationFrame(() => {
    imageRefs.current.forEach((img, i) => {
      if (!img) return;
      const intensity = 15 + i * 4;
      const x = mouseX.get() * intensity;
      const y = mouseY.get() * intensity;
      img.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  return (
    <section
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Inter', sans-serif",
        color: '#fff',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          textAlign: 'center',
          zIndex: 10,
          backdropFilter: 'blur(20px)',
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '2rem',
          borderRadius: '20px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
          maxWidth: 800,
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}
        >
          Welcome to{' '}
          <span style={{ color: '#FFDD00' }}>Amanda Braga’s Portfolio</span>
        </h1>
        <p
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            opacity: 0.9,
            marginBottom: '2rem',
          }}
        >
          Dive into a world of minimalist design, bold expression, and
          storytelling through visual experience.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: '14px 32px',
            fontSize: '1.1rem',
            fontWeight: 600,
            borderRadius: '50px',
            background: '#FFDD00',
            color: '#000',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(255, 221, 0, 0.4)',
          }}
          onClick={() => alert('Explore clicked!')}
        >
          Explore Now
        </motion.button>
      </motion.div>

      {/* Floating Images */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: '900px',
          height: '300px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        {[1, 2, 3, 4, 5].map((index) => (
          <img
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            src={`/images/${String(index).padStart(2, '0')}.jpg`}
            alt={`Trail ${index}`}
            style={{
              width: 100,
              height: 140,
              borderRadius: '15px',
              objectFit: 'cover',
              boxShadow: '0 8px 25px rgba(0,0,0,0.25)',
              transition: 'transform 0.1s ease-out',
              willChange: 'transform',
              userSelect: 'none',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
