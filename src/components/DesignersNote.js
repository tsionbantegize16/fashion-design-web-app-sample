import React from 'react';
import { motion } from 'framer-motion';
import './DesignersNote.css';

const DesignersNote = () => {
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

  const scrollToCollection = () => {
    const collectionSection = document.getElementById('projects');
    if (collectionSection) {
      collectionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="designers-note" onClick={scrollToCollection}>
      <motion.div 
        className="note-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="note-content" variants={itemVariants}>
          <motion.h2 className="note-title" variants={itemVariants}>
            From the Designer
          </motion.h2>
          <motion.div className="note-text" variants={itemVariants}>
            <p>
              Inspired by Ethiopian culture and global streetwear, I design pieces 
              that speak strength and identity. Each creation is a celebration of 
              heritage and innovation, blending traditional patterns with contemporary 
              silhouettes.
            </p>
            <p>
              My journey in fashion began with a deep appreciation for the rich 
              textile traditions of Ethiopia, combined with a passion for modern 
              design. This fusion has become the cornerstone of my creative process.
            </p>
          </motion.div>
          <motion.div className="designer-signature" variants={itemVariants}>
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3"
              alt="Designer"
              className="designer-image"
            />
            <div className="signature-text">
              <h3>Tsion Bantegize</h3>
              <p>Lead Designer & Founder</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DesignersNote; 