import React from 'react';
import { motion } from 'framer-motion';
import './TrendSpotlight.css';

const TrendSpotlight = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="trend-spotlight">
      <motion.div 
        className="trend-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="trend-content" variants={itemVariants}>
          <motion.h2 className="trend-title" variants={itemVariants}>
            🔥 Trending Now
          </motion.h2>
          <motion.p className="trend-description" variants={itemVariants}>
            Bold silhouettes and earthy tones are dominating the 2025 runways. 
            Our latest collection embraces this trend with contemporary pieces 
            that blend traditional Ethiopian aesthetics with modern streetwear.
          </motion.p>
        </motion.div>

        <motion.div 
          className="trend-image-container"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3"
            alt="Trending Fashion"
            className="trend-image"
          />
          <div className="trend-overlay">
            <span className="trend-tag">New Collection</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TrendSpotlight; 