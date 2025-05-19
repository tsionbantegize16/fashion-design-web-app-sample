import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import "./ProjectsSection.css";

const images = [
  "https://via.placeholder.com/100/cccccc/ffffff?Text=1",
  "https://via.placeholder.com/100/aaaaaa/ffffff?Text=2",
  "https://via.placeholder.com/100/888888/ffffff?Text=3",
  "https://via.placeholder.com/100/ffaaaa/000000?Text=4",
  "https://via.placeholder.com/100/aaffaa/000000?Text=5",
  "https://via.placeholder.com/100/aaaaff/ffffff?Text=6",
  "https://via.placeholder.com/100/fffaaa/000000?Text=7",
  "https://via.placeholder.com/100/aaffff/000000?Text=8",
  "https://via.placeholder.com/100/ffaaff/000000?Text=9",
  "https://via.placeholder.com/100/ccaaaa/ffffff?Text=10",
];

const arcRadius = 180;
const imageSize = 70;
const imageOffset = 50;

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollY } = useScroll();
  const imageOffsetX = useTransform(scrollY, [0, 500], [0, 20]);
  const imageOffsetY = useTransform(scrollY, [0, 500], [0, -10]);

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    });
  }, [controls]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <motion.div
      ref={containerRef}
      className="projects-section" // Changed class name
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        opacity: 0,
      }}
      animate={controls}
    >
      <div
        className="top-nav"
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          right: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          style={{ fontSize: "1.5em", color: "#fff" }}
        >
          👤
        </motion.div>
        <div style={{ display: "flex", gap: "20px" }}>
          <motion.button
            className="nav-button"
            whileHover={{ scale: 1.05 }}
            style={{
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1em",
            }}
          >
            Join
          </motion.button>
          <motion.button
            className="nav-button"
            whileHover={{ scale: 1.05 }}
            style={{
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1em",
            }}
          >
            Log in
          </motion.button>
        </div>
      </div>

      <div
        className="central-content"
        style={{ textAlign: "center", color: "#fff", marginBottom: "30px" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
          }}
          style={{ fontSize: "3em", fontWeight: "bold", marginBottom: "10px" }}
        >
          Gather here
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.5, ease: "easeOut" },
          }}
          style={{ fontSize: "1.1em", lineHeight: "1.6" }}
        >
          Our platform is currently in beta and invite-only.
          <br />
          Request an invite now to receive a link to create your account.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.08 }}
          style={{
            marginTop: "20px",
            padding: "12px 30px",
            background: "#fff",
            color: "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1em",
            fontWeight: "bold",
          }}
        >
          Join Gather
        </motion.button>
      </div>

      <div
        className="image-arc"
        style={{
          position: "relative",
          width: arcRadius * 2 + imageSize,
          height: arcRadius + imageSize / 2,
        }}
      >
        {images.map((src, index) => {
          const angle = (index / images.length) * Math.PI * 2 - Math.PI / 2;
          const x =
            arcRadius * Math.cos(angle) + arcRadius - imageSize / 2 + Math.sin(0) * imageOffset;
          const y =
            arcRadius * Math.sin(angle) + arcRadius - imageSize / 2 + Math.cos(0) * imageOffset;
          const isVisible = Math.abs(index / images.length - currentIndex / images.length) < 0.6;

          return (
            <motion.img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              style={{
                width: imageSize,
                height: imageSize,
                borderRadius: "15px",
                position: "absolute",
                left: x,
                top: y,
                opacity: isVisible ? 1 : 0.3,
                scale: isVisible ? 1 : 0.8,
                translateX: imageOffsetX,
                translateY: imageOffsetY,
                transition: { duration: 0.6 },
                cursor: "pointer",
                zIndex: isVisible ? 2 : 1,
              }}
              whileHover={{ scale: 1.1 }}
            />
          );
        })}
        <motion.div
          onClick={handleNext}
          style={{
            position: "absolute",
            right: "-40px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(0, 0, 0, 0.7)",
            color: "#fff",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2em",
            cursor: "pointer",
            zIndex: 3,
          }}
          whileHover={{ scale: 1.1 }}
        >
          &gt;
        </motion.div>
      </div>

      <motion.div
        className="bottom-icon"
        whileHover={{ scale: 1.1 }}
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          fontSize: "2em",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ width: "1em", height: "1em" }}
        >
          <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V12h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsSection;