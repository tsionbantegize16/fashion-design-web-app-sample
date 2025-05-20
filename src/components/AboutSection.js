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
        <motion.div className="aboutText" variants={textVariants} initial="initial" animate="animate">
          <h2 className="title">Our Artistic Journey</h2>
          <h3 className="subtitle">A Symphony of Creativity</h3>
          <p className="paragraph">
            Step into our world, where every creation is a brushstroke on the canvas of imagination.
            We are driven by a passion for beauty in its myriad forms, from the subtle dance of colors
            to the intricate poetry of textures. Our journey is a constant exploration, a quest to
            transform the ordinary into the extraordinary.
          </p>
          <p className="paragraph">
            Inspired by the fluid lines of nature and the sharp precision of geometry, we weave together
            unique narratives in every piece. Each design is a testament to the meticulous craft and
            the boundless curiosity that fuels our artistic spirit. We invite you to discover the stories
            embedded within our creations.
          </p>
          <p className="paragraph">
            Traveling the globe, immersing ourselves in diverse cultures, and absorbing the essence
            of different languages – these are the threads that enrich our creative tapestry. This
            exploration is not just a pastime; it's a vital source of inspiration that breathes life
            into our artistic vision.
          </p>
        </motion.div>
        <motion.div
          className="aboutImage"
          variants={imageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <div className="imageSlider">
            {/* Replace with your actual image and consider a more artistic visual */}
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0aXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              alt="Artistic Representation"
            />
            {/* You could add more images and slider functionality here */}
          </div>
        </motion.div>
      </div>
      <motion.div
        className="statsContainer"
        variants={statsVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div className="statItem" variants={statItemVariants} whileHover="hover">
          <div className="statNumber">∞</div>
          <div className="statLabel">Inspiration</div>
        </motion.div>
        <motion.div className="statItem" variants={statItemVariants} whileHover="hover">
          <div className="statNumber">🎨</div>
          <div className="statLabel">Creative Visions</div>
        </motion.div>
        <motion.div className="statItem" variants={statItemVariants} whileHover="hover">
          <div className="statNumber">✨</div>
          <div className="statLabel">Unique Expressions</div>
        </motion.div>
        <motion.div className="statItem" variants={statItemVariants} whileHover="hover">
          <div className="statNumber">🗺️</div>
          <div className="statLabel">Global Influences</div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;