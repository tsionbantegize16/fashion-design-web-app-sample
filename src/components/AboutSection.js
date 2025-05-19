import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import crowImage from "../assets/images/crow.jpg";
import "./AboutSection.css";

const images = [
  crowImage,
  // Add more images here if you want to expand slider later
];

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about" className="aboutSection">
      <div className="aboutContainer">
        <div className="aboutText">
          <h2>About Us</h2>
          <h3>Our Story</h3>
          <p>
            Which your book, but more importantly when you get out the shower, dry your
            book. It’s a cold world out there. Cloth talk, as the throne will be reset. Bless up. We
            will never see them. Surround yourself with angels, positive energy...
          </p>
          <p>
            Hammock talk come soon. Let me be clear, you have to make it through the
            jungle to make it to paradise, that’s the key. Don’t ever fix your face. Live
            amongst the clouds...
          </p>
          <p>
            Learning is cool, but knowing is better, and knowing the key to success. The other
            day the grass was brown, now it’s green because I ain’t give up. Never surrender...
          </p>
        </div>
        <div className="aboutImage">
          <div className="imageSlider">
            <button
              className="sliderButton prev"
              onClick={prevSlide}
              aria-label="Previous Image"
            >
              &lt;
            </button>
            <AnimatePresence initial={false}>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt="About Us Image"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="sliderImage"
              />
            </AnimatePresence>
            <button
              className="sliderButton next"
              onClick={nextSlide}
              aria-label="Next Image"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      <div className="statsContainer">
        <div className="statItem">
          <div className="statNumber">06</div>
          <div className="statLabel">Stores</div>
        </div>
        <div className="statItem">
          <div className="statNumber">30</div>
          <div className="statLabel">Exclusive Brands</div>
        </div>
        <div className="statItem">
          <div className="statNumber">700</div>
          <div className="statLabel">Quality Products</div>
        </div>
        <div className="statItem">
          <div className="statNumber">1500</div>
          <div className="statLabel">Happy Clients</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
