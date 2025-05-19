import React from "react";
import "./AboutSection.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const AboutSection = () => {
  const textControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await textControls.start({ opacity: 0, y: 20 });
      await textControls.start({ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5, ease: "easeOut" } });
      await textControls.start({ scale: 1.02, transition: { duration: 0.4, yoyo: Infinity } });
    };

    sequence();
  }, [textControls]);

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeInOut" } },
    hover: { scale: 1.05 },
  };

  return (
    <motion.section
      id="about"
      className="aboutSection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
    >
      <div className="aboutContainer">
        <motion.div className="aboutText" animate={textControls}>
          <motion.h2 className="title" style={{ originX: 0 }} animate={{ scaleX: [0, 1], transition: { duration: 0.6, ease: "easeInOut" } }}>
            Echoes of Creation
          </motion.h2>
          <motion.h3 className="subtitle" animate={{ x: [50, 0], opacity: [0, 1], transition: { duration: 0.7, delay: 0.3, ease: "easeOut" } }}>
            Where Imagination Takes Form
          </motion.h3>
          <motion.p className="paragraph" animate={{ opacity: [0, 1], y: [30, 0], transition: { duration: 0.9, delay: 0.6, ease: "easeOut" } }}>
            In the heart of our atelier, stories unfold through the language of form and texture. We are captivated
            by the subtle whispers of inspiration that echo from the natural world and the vibrant pulse of human
            innovation. Our process is a dance between intuition and precision, where every detail is imbued with
            purpose and passion.
          </motion.p>
          <motion.p className="paragraph" animate={{ opacity: [0, 1], y: [30, 0], transition: { duration: 0.9, delay: 0.7, ease: "easeOut" } }}>
            We delve into the alchemy of materials, exploring their inherent qualities to unlock new dimensions of
            expression. From the smooth caress of polished metal to the intricate weave of handcrafted fibers, each
            element contributes to a symphony of sensory experiences. Our creations are not merely objects; they are
            tangible fragments of our creative soul.
          </motion.p>
          <motion.p className="paragraph" animate={{ opacity: [0, 1], y: [30, 0], transition: { duration: 0.9, delay: 0.8, ease: "easeOut" } }}>
            The journey of discovery knows no bounds. We traverse cultural landscapes, gather fragments of ancient
            wisdom, and embrace the avant-garde spirit of contemporary design. These explorations enrich our
            perspective, allowing us to craft pieces that resonate with a global audience while retaining a unique
            and deeply personal touch.
          </motion.p>
        </motion.div>
        <motion.div
          className="aboutImage"
          variants={imageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <img
            src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFydGlzdHxlbnwwfHwwfHww&auto=format&fit=crop&w=800&q=60"
            alt="Artistic Workspace"
          />
        </motion.div>
      </div>
      <motion.div
        className="statsContainer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { staggerChildren: 0.4, delay: 1 } }}
      >
        <motion.div className="statItem" whileHover={{ scale: 1.1, y: -5 }}>
          <div className="statNumber">∞</div>
          <div className="statLabel">Infinite Ideas</div>
        </motion.div>
        <motion.div className="statItem" whileHover={{ scale: 1.1, y: -5 }}>
          <div className="statNumber">✨</div>
          <div className="statLabel">Artistic Innovation</div>
        </motion.div>
        <motion.div className="statItem" whileHover={{ scale: 1.1, y: -5 }}>
          <div className="statNumber">💫</div>
          <div className="statLabel">Crafted Uniqueness</div>
        </motion.div>
        <motion.div className="statItem" whileHover={{ scale: 1.1, y: -5 }}>
          <div className="statNumber">🌍</div>
          <div className="statLabel">Global Resonance</div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;