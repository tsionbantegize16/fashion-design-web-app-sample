import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import fashion1 from "../assets/images/fashion1.jpg";
import fashion2 from "../assets/images/fashion2.jpg";
import fashion3 from "../assets/images/fashion3.jpg";
import fashion4 from "../assets/images/fashion4.jpg";
import fashion5 from "../assets/images/fashion5.jpg";
import fashion6 from "../assets/images/fashion6.jpg";
import fashion7 from "../assets/images/fashion7.jpg";
import fashion8 from "../assets/images/fashion8.jpg";
import fashion9 from "../assets/images/fashion9.jpg";
import fashion10 from "../assets/images/fashion10.jpg";

import "./ProjectsSection.css";

const ProjectsSection = () => {
  const arcRadius = 220;
  const imageSize = 120;
  const activeImageSize = 200;

  const images = [
    fashion1,
    fashion2,
    fashion3,
    fashion4,
    fashion5,
    fashion6,
    fashion7,
    fashion8,
    fashion9,
    fashion10
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="projects-section">
      <h1 className="project-title">✨ Fashion Collection</h1>

      <div className="image-arc">
        {images.map((src, index) => {
          const angle =
            ((index - activeIndex) / images.length) * Math.PI * 2 - Math.PI / 2;
          const x = arcRadius * Math.cos(angle) + arcRadius - (index === activeIndex ? activeImageSize : imageSize) / 2;
          const y = arcRadius * Math.sin(angle) + arcRadius - (index === activeIndex ? activeImageSize : imageSize) / 2 + 40;
          const isActive = index === activeIndex;

          return (
            <motion.img
              key={index}
              src={src}
              alt={`Fashion Design ${index + 1}`}
              animate={{
                left: x,
                top: y,
                opacity: isActive ? 1 : 0.5,
                scale: isActive ? 1.5 : 0.8,
                width: isActive ? activeImageSize : imageSize,
                height: isActive ? activeImageSize : imageSize,
                transition: { duration: 0.6 }
              }}
              style={{
                borderRadius: "15px",
                position: "absolute",
                objectFit: "cover",
                cursor: "pointer",
                zIndex: isActive ? 2 : 1
              }}
              onClick={() => setActiveIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
