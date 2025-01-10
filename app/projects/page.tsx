'use client'

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar'
import ProjectCard from '../components/Projectcard'

const projects = [
    {
      id: "project1",
      title: "Product Development and Analytics Intern",
      description: "SP Group (SP Digital)",
      techStack: [],
      githubLink: "https://github.com/yourusername/project1"
    },
    {
      id: "project2",
      title: "Project 2",
      description: "A brief description of Project 2",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/project2"
    },
    {
      id: "project3",
      title: "Project 3",
      description: "A brief description of Project 3",
      techStack: ["Vue.js", "Express", "PostgreSQL"],
      githubLink: "https://github.com/yourusername/project3"
    }
  ]
  
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
  
  export default function Projects() {
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
            Work and Projects
          </motion.h1>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </main>
      </div>
    )
  }
  