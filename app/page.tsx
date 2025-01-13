'use client';

import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Ensure the code only runs on the client side
    const handleScroll = () => setScrollY(window.scrollY);
    const updateWindowHeight = () => setWindowHeight(window.innerHeight);

    // Initialize window height and add listeners
    updateWindowHeight();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateWindowHeight);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateWindowHeight);
    };
  }, []);

  // Variants for animation
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Navbar />
      <div className="overflow-hidden">
        {/* First Section */}
        <motion.div
          className="min-h-screen flex flex-col justify-center items-center bg-[#FFFFFF] text-center"
          initial="hidden"
          animate={scrollY < windowHeight ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-[#132043]">Hello, I am Wen Xian.</h1>
          <h3 className="text-2xl font-semibold text-[#132043]">
            I am an aspiring data scientist studying in Singapore Management University
          </h3>
        </motion.div>

        {/* Second Section */}
        <motion.div
          className="min-h-screen flex flex-col justify-center items-center bg-[#E0F7FA] text-center"
          initial="hidden"
          animate={
            scrollY >= windowHeight && scrollY < windowHeight * 2 ? 'visible' : 'hidden'
          }
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-semibold text-[#132043] mb-6">My Skills and Interests</h1>
          <ul className="text-lg space-y-4">
            <li>R for Data Analysis</li>
            <li>Machine Learning</li>
            <li>Geospatial Analytics</li>
            <li>Data Visualization</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
