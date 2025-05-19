import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-light-teal min-h-screen w-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-dark mb-8">About Amanda Braga</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Amanda Braga is a Brazilian designer specializing in beauty accessories and jewelry. Based in Miami, she
          combines her cultural heritage with a passion for the arts and manual craftsmanship, which began at an early
          age. Her work reflects a blend of Brazilian influences and contemporary design, emphasizing elegance and
          individuality in her creations.
        </p>
        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            This section effectively conveys Amanda's background and design philosophy, highlighting her dedication to creating unique, handcrafted pieces that resonate with her cultural roots and artistic vision.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
