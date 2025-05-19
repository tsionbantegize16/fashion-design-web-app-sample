import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import crow from "../assets/images/crow.jpg"; // Adjust path if needed
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const arcRadius = 200;
  const imageSize = 80;
  const imageCount = 10;
  const images = Array(imageCount).fill(crow); // Use same image for now

  const containerRef = useRef(null);
  const controls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  // Animate opacity on mount
  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    });
  }, [controls]);

  // Auto-rotate images every 3 seconds
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
        backgroundColor: "#000",
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
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
        style={{ color: "#fff", fontSize: "3rem", marginBottom: "30px" }}
      >
        ✨ Project Gallery
      </motion.h1>

      {/* Circular Image Arc */}
      <div
        className="image-arc"
        style={{
          position: "relative",
          width: arcRadius * 2 + imageSize,
          height: arcRadius + imageSize / 2,
        }}
      >
        {images.map((src, index) => {
          const angle = ((index - activeIndex) / images.length) * Math.PI * 2 - Math.PI / 2;
          const x = arcRadius * Math.cos(angle) + arcRadius - imageSize / 2;
          const y = arcRadius * Math.sin(angle) + arcRadius - imageSize / 2;
          const isActive = index === activeIndex;

          return (
            <motion.img
              key={index}
              src={src}
              alt={`Crow ${index + 1}`}
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

      {/* Bottom Call to Action */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        style={{
          marginTop: "50px",
          padding: "12px 28px",
          fontSize: "1.1rem",
          background: "#fff",
          color: "#000",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "0 4px 10px rgba(255,255,255,0.2)",
        }}
      >
        Discover More
      </motion.button>
    </motion.div>
  );
};

export default ProjectsSection;
