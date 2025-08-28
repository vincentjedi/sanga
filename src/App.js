import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ImageCarousel from './components/ImageCarousel';
import Offers from './components/Offers';
import Events from './components/Events';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <ImageCarousel />
        <Offers />
        <Events />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;