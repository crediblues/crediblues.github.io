'use client'

import Navbar from './components/Navbar'
import { motion } from 'framer-motion'
import { useState, useEffect } from "react";


export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        animate={scrollY < window.innerHeight ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-[#132043]">
          Hello, I am Wen Xian.
        </h1>
        <h3 className="text-2xl font-semibold text-[#132043]">
          I am an aspiring data scientist studying in Singapore Management University
        </h3>
      </motion.div>

      {/* Second Section */}
      {/* <motion.div
        className="min-h-screen flex flex-col justify-center items-center bg-[#E0F7FA] text-center"
        initial="hidden"
        animate={
          scrollY >= window.innerHeight && scrollY < window.innerHeight * 2
            ? "visible"
            : "hidden"
        }
        variants={variants}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-semibold text-[#132043] mb-6">
          My Skills and Interests
        </h1>
        <ul className="text-lg space-y-4">
          <li>R for Data Analysis</li>
          <li>Machine Learning</li>
          <li>Geospatial Analytics</li>
          <li>Data Visualization</li>
        </ul>
      </motion.div> */}
      {/* Third Section - Skills
      <motion.div
        className="min-h-screen flex justify-center items-center bg-[#FFF4E0] text-center-h-screen flex flex-col justify-center items-center bg-[#E0F7FA] text-center"
        initial="hidden"
        animate={
          scrollY >= window.innerHeight * 2 && scrollY < window.innerHeight * 3
            ? "visible"
            : "hidden"
        }
        variants={variants}
        transition={{ duration: 0.6 }}
      >
        ABC
      </motion.div> */}
      </div>
    </div>
  )
}
