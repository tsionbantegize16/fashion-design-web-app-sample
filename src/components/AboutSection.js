// AboutSection.jsx
import React from "react";
import "./AboutSection.css";
import { motion } from "framer-motion";
import { FaTshirt, FaPalette, FaStar, FaUsers } from 'react-icons/fa';

const AboutSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <h2 className="title">Fashion Collection</h2>
          <h3 className="subtitle">Where Style Meets Innovation</h3>
          <p className="paragraph">
            Discover our exclusive collection of fashion designs that blend contemporary trends with timeless elegance. Each piece is crafted with meticulous attention to detail and premium quality materials.
          </p>
          <p className="paragraph">
            Our designs celebrate individuality and self-expression, offering versatile pieces that transition seamlessly from day to night. From statement pieces to everyday essentials, we create fashion that empowers and inspires.
          </p>
          <p className="paragraph">
            Experience the perfect fusion of comfort, style, and sophistication in every garment. Our commitment to sustainable practices and ethical production ensures that your fashion choices make a positive impact.
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
            alt="Fashion Collection"
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
          { 
            icon: <FaTshirt className="statIcon" />, 
            label: "Premium Designs",
            description: "Handcrafted pieces with attention to detail",
            sectionId: "premium-designs"
          },
          { 
            icon: <FaPalette className="statIcon" />, 
            label: "Unique Collections",
            description: "Exclusive styles for every occasion",
            sectionId: "collections"
          },
          { 
            icon: <FaStar className="statIcon" />, 
            label: "Quality Craftsmanship",
            description: "Superior materials and expert tailoring",
            sectionId: "craftsmanship"
          },
          { 
            icon: <FaUsers className="statIcon" />, 
            label: "Customer Satisfaction",
            description: "Dedicated to exceeding expectations",
            sectionId: "testimonials"
          },
        ].map((item, index) => (
          <motion.button
            key={index}
            className="statItem"
            variants={statItemVariants}
            whileHover="hover"
            onClick={() => scrollToSection(item.sectionId)}
          >
            <div className="statIcon">{item.icon}</div>
            <div className="statLabel">{item.label}</div>
            <div className="statDescription">{item.description}</div>
          </motion.button>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
