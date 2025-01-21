"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Navbar from "../components/Navbar"

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f8f0f0]">
      <Navbar />
      <motion.main
        className="container mx-auto px-6 py-8"
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
          Contact Me
        </motion.h1>
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="https://www.linkedin.com/in/wen-xian-ooi-584469233/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <div className="p-4 rounded-full border-2 border-[#132043] group-hover:bg-[#132043] transition-colors duration-300">
              <Linkedin className="w-8 h-8 text-[#132043] group-hover:text-white" />
            </div>
            <span className="text-[#132043] font-medium">LinkedIn</span>
          </a>

          <a
            href="https://github.com/crediblues"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <div className="p-4 rounded-full border-2 border-[#132043] group-hover:bg-[#132043] transition-colors duration-300">
              <Github className="w-8 h-8 text-[#132043] group-hover:text-white" />
            </div>
            <span className="text-[#132043] font-medium">Github</span>
          </a>

          <a href="mailto:ooiwenxian@gmail.com" className="group flex flex-col items-center gap-2">
            <div className="p-4 rounded-full border-2 border-[#132043] group-hover:bg-[#132043] transition-colors duration-300">
              <Mail className="w-8 h-8 text-[#132043] group-hover:text-white" />
            </div>
            <span className="text-[#132043] font-medium">Email</span>
          </a>
        </motion.div>
      </motion.main>
    </div>
  )
}