'use client'

import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#FDF0F0]">
      <Navbar />
      <main className="container mx-auto px-6 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-[#132043]"
        >
          About Me
        </motion.h1>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <motion.p variants={itemVariants} className="text-gray-600 mb-4">
            Hello! I'm [Your Name], a passionate developer with experience in [your skills/technologies].
            I love creating innovative solutions and am always eager to learn new technologies.
          </motion.p>
          <motion.p variants={itemVariants} className="text-gray-600">
            Feel free to check out my projects and get in touch if you'd like to collaborate!
          </motion.p>
        </motion.div>
      </main>
    </div>
  )
}

