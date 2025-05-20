// AboutSection.jsx
import React from "react";
import "./AboutSection.css";
import { motion } from "framer-motion";

const AboutSection = () => {
  const imageVariants = {
    initial: { opacity: 0, x: -50, rotate: -5 },
    animate: { opacity: 1, x: 0, rotate: 0 },
    hover: { scale: 1.05, rotate: 3 },
  };

  const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.3 } },
  };

  const statsVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } },
  };

  const statItemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.1, y: -5 },
  };

  return (
    <motion.section
      id="about"
      className="aboutSection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
    >
      <div className="aboutContainer">
        <motion.div
          className="aboutText"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <h2 className="title">Our Fashion & Makeup</h2>
          <h3 className="subtitle">Style Meets Confidence</h3>
          <p className="paragraph">
            Discover fashion and beauty crafted to express your unique style and boost confidence.
          </p>
          <p className="paragraph">
            From trends to timeless looks, we inspire creativity and natural beauty.
          </p>
          <p className="paragraph">
            Celebrate diversity and express yourself with our curated styles.
          </p>
        </motion.div>
        <motion.div
          className="aboutImage"
          variants={imageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <img
            src="https://www.bellanaijastyle.com/wp-content/uploads/2019/05/30Divalukky-Presents-22The-Movement-of-Modern-Whimsical-Romance.jpeg"
            alt="Fashion and Makeup"
          />
        </motion.div>
      </div>

      <motion.div
        className="statsContainer"
        variants={statsVariants}
        initial="initial"
        animate="animate"
      >
        {[
          { emoji: "💄", label: "Beauty Looks" },
          { emoji: "👗", label: "Fashion Styles" },
          { emoji: "🔥", label: "Unique Trends" },
          { emoji: "💪", label: "Confidence Boost" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="statItem"
            variants={statItemVariants}
            whileHover="hover"
          >
            <div className="statNumber">{item.emoji}</div>
            <div className="statLabel">{item.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
