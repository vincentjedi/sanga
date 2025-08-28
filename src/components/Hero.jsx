import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/images/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBg})` }}>
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discover the Beauty of Coast Province
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience unforgettable tours and travels with Sanga Tours
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-btns"
        >
          <a href="#services" className="btn-primary">
            Explore Tours
          </a>
          <a href="https://wa.me/254769119350" className="btn-secondary">
            <span>Book Now</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

