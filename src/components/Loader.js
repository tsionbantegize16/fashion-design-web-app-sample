import React, { useEffect, useState } from "react";
import "./Loader.css";

const NUM_BUBBLES = 300; // Number of bubbles to animate

const Loader = ({ duration = 3000, onFinish }) => {
  const [falling, setFalling] = useState(false);

  useEffect(() => {
    // After loading duration, start falling animation
    const timer = setTimeout(() => {
      setFalling(true);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  useEffect(() => {
    // After fall animation (1.5s), call onFinish
    if (falling) {
      const fallTimer = setTimeout(() => {
        if (onFinish) onFinish();
      }, 1500);

      return () => clearTimeout(fallTimer);
    }
  }, [falling, onFinish]);

  // Create an array for bubbles
  const bubbles = Array.from({ length: NUM_BUBBLES });

  return (
    <div className="loader-wrapper">
      {bubbles.map((_, i) => {
        const delay = (Math.random() * 2).toFixed(2);
        const size = 10 + Math.random() * 20;
        const left = Math.random() * 100;

        return (
          <div
            key={i}
            className={`bubble ${falling ? "fall" : "float"}`}
            style={{
              animationDelay: `${delay}s`,
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Loader;
