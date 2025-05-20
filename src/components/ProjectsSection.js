import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import imageBeauty from "../assets/images/image2.jpg";
import imageFashion from "../assets/images/image3.jpg";
import imageTrends from "../assets/images/image4.jpg";
import imageConfidence from "../assets/images/image5.jpg";
import imageStyle from "../assets/images/image6.jpg";
import imageCreativity from "../assets/images/image5.jpg"; // fixed import

// New images added
import imageExtra1 from "../assets/images/image1.jpg";
import imageExtra2 from "../assets/images/image2.jpg";
import imageExtra3 from "../assets/images/image3.jpg";

import "./ProjectsSection.css";

const ProjectsSection = () => {
  const arcRadius = 200;
  const imageSize = 80;

  const images = [
    imageBeauty,
    imageFashion,
    imageTrends,
    imageConfidence,
    imageStyle,
    imageCreativity,
    imageExtra1,
    imageExtra2,
    imageExtra3,
  ];

  const containerRef = useRef(null);
  const controls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    });
  }, [controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      ref={containerRef}
      className="projects-section"
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        opacity: 0,
      }}
      animate={controls}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
        style={{ color: "#fff", fontSize: "3rem", marginBottom: "30px" }}
      >
        ✨ Project Gallery
      </motion.h1>

      <div
        className="image-arc"
        style={{
          position: "relative",
          width: arcRadius * 2 + imageSize,
          height: arcRadius + imageSize / 2,
        }}
      >
        {images.map((src, index) => {
          const angle =
            ((index - activeIndex) / images.length) * Math.PI * 2 - Math.PI / 2;
          const x = arcRadius * Math.cos(angle) + arcRadius - imageSize / 2;
          const y = arcRadius * Math.sin(angle) + arcRadius - imageSize / 2;
          const isActive = index === activeIndex;

          return (
            <motion.img
              key={index}
              src={src}
              alt={`Project ${index + 1}`}
              initial={{ opacity: 0 }}
              animate={{
                left: x,
                top: y,
                opacity: isActive ? 1 : 0.5,
                scale: isActive ? 1.3 : 0.8,
                rotate: isActive ? 360 : 0,
                filter: isActive ? "drop-shadow(0 0 10px #fff)" : "none",
                transition: { duration: 0.6 },
              }}
              style={{
                width: imageSize,
                height: imageSize,
                borderRadius: "15px",
                position: "absolute",
                objectFit: "cover",
                cursor: "pointer",
              }}
              whileHover={{ scale: 1.4 }}
              onClick={() => setActiveIndex(index)}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
