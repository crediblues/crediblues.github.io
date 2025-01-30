"use client"

import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import WorkTimeline from "../components/Worktimeline"
import works from "./Workdata"

export default function Work() {
  return (
    <div className="min-h-screen bg-[#FDF0F0]">
      <Navbar />
      <motion.main
        className="container mx-auto px-6 py-8 pt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl font-semibold text-[#132043] text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Work Experiences
        </motion.h1>
        <motion.p className="text-lg text-gray-700 text-center mb-8" 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}>
          Here&apos;s a timeline of my professional journey and key experiences.
        </motion.p>
        <WorkTimeline experiences={works} />
      </motion.main>
    </div>
  )
}

