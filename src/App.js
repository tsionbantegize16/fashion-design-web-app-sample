import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./App.css";
import LookbookSection from './components/LookbookSection';
import TrendSpotlight from './components/TrendSpotlight';
import DesignersNote from './components/DesignersNote';

import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 2.5 seconds
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Initialize Lenis scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Setup ScrollTrigger to work with Lenis
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value) : window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? 'transform' : 'fixed',
    });

    lenis.on('scroll', ScrollTrigger.update);
    ScrollTrigger.defaults({ scroller: document.body });
    ScrollTrigger.refresh();

    // Optional cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-90 shadow-lg">
        <Navigation />
      </header>

      <main className="pt-20">
        {/* 1. Hero Section - First Impression */}
        <section id="hero" className="w-full min-h-screen flex items-center justify-center">
          <HeroSection />
        </section>

        {/* 2. About Section - Brand Story */}
        <section id="about" className="w-full min-h-screen flex items-center justify-center bg-gray-900">
          <AboutSection />
        </section>

        {/* 3. Designer's Note - Personal Connection */}
        <section id="designersnote" className="w-full min-h-screen flex items-center justify-center bg-gray-800">
          <DesignersNote />
        </section>

        {/* 4. Lookbook - Visual Inspiration */}
        <section id="lookbook" className="w-full min-h-screen flex items-center justify-center bg-gray-800">
          <LookbookSection />
        </section>

        {/* 5. Trend Spotlight - Current Relevance */}
        <section id="trendspotlight" className="w-full min-h-screen flex items-center justify-center bg-gray-900">
          <TrendSpotlight />
        </section>

        {/* 6. Projects Section - Portfolio */}
        <section id="projects" className="w-full min-h-screen flex items-center justify-center bg-gray-800">
          <ProjectsSection />
        </section>

        {/* 7. Contact Section - Call to Action */}
        <section id="contact" className="w-full min-h-screen flex items-center justify-center bg-gray-900">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
