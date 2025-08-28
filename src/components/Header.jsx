import React, { useState } from 'react';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../assets/images/hero-bg.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'Services', link: '#services' },
    { name: 'Offers', link: '#offers' },
    { name: 'Events', link: '#events' },
    { name: 'Reviews', link: '#reviews' },
    { name: 'Contact', link: '#contact' },
  ];

  return (
    <header className="header">
      <div className="container">
        {/* Logo Placeholder - Replace with your actual logo */}
        <div className="logo">
          <img src={logo} alt="Sanga Tours Logo" />
          <span>Sanga Tours</span>
        </div>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href={item.link}>{item.name}</a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="header-cta">
          <motion.a
            href="https://wa.me/254769119350"
            className="whatsapp-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp /> Chat Now
          </motion.a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;