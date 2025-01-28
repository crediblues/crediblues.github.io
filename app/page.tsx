'use client';

import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from "next/image"

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }
  

  const headingText = "Hello, I am Wen Xian"

  return (
    <div className="min-h-screen bg-[#FDF0F0]">
      <Navbar />
      <div className="overflow-hidden">
        {/* First Section */}
        {/* <motion.div className='min-h-screen flex flex-col justify-center items-center bg-[#FDF0F0] text-center'>
          <img src='/profilepic.jpg'></img>
        </motion.div> */}
        <motion.div
          className="min-h-screen flex flex-col justify-center items-center bg-[#FDF0F0] text-center"
          initial="hidden"
          animate={scrollY < windowHeight ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.6 }}>
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto">
              <Image
                src="/profilepic.jpg?height=200&width=200"
                alt="Wen Xian's Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl font-bold text-[#132043] mb-4 mt-0 flex"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {headingText}
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-700 max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I am a penultimate university student studying Information Systems at Singapore Management University, 
            specializing in Business Analytics and Artificial Intelligence. 
            
          </motion.p>
          {/* <h2 className="text-3xl font-semibold text-[#132043] mt-5">Explore</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-5">
            <ExploreLink href="/skills">
              my skills
            </ExploreLink>
            <ExploreLink href="/projects">
              my projects
            </ExploreLink>
          </div> */}
        </motion.div>
        {/* <motion.div 
          className="flex flex-col items-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-[#132043]">explore</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <ExploreLink href="/skills">
              my skills
            </ExploreLink>
            <ExploreLink href="/projects">
              my projects
            </ExploreLink>
          </div>
        </motion.div>
 */}

        {/* Second Section */}
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </div>
  );
}