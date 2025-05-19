import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2.5 seconds
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-90 shadow-lg">
        <Navigation />
      </header>

      <main className="pt-20">
        <section id="hero" className="w-full min-h-screen flex items-center justify-center">
          <HeroSection />
        </section>

        <section id="about" className="w-full min-h-screen flex items-center justify-center bg-gray-800">
          <AboutSection />
        </section>

        <section id="projects" className="w-full min-h-screen flex items-center justify-center bg-gray-900">
          <ProjectsSection />
        </section>

        <section id="contact" className="w-full min-h-screen flex items-center justify-center bg-gray-800">
          <ContactSection />
        </section>
      </main>

      <footer className="text-center py-6 text-sm text-gray-400 border-t border-gray-700 mt-10">
        © {new Date().getFullYear()} Tsion Bantegize. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
