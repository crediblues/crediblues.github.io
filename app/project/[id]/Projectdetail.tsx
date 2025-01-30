'use client'

import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import ProjectImage from '../../components/Projectimage'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  githubLink: string
  images: string[]
  role: string[]
  features: string[]
  hideGitHubLink: boolean
  hideImages: boolean
  hideRole: boolean
}

interface ProjectDetailProps {
  project: Project
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export default function ProjectDetail({ project }: ProjectDetailProps) {
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
          {project.title}
        </motion.h1>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white p-6 rounded-lg shadow-md"
        >
          {!project.hideImages && (
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {project.images.map((img, index) => (
                <ProjectImage 
                  key={index} 
                  src={img} 
                  alt={`${project.title} screenshot ${index + 1}`} 
                  className="rounded-lg"
                />
              ))}
            </motion.div>
          )}
          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-2xl font-bold mb-2 text-[#132043]">Description</h2>
            <p className="text-gray-600">{project.description}</p>
          </motion.div>
          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-2xl font-bold mb-2 text-[#132043]">Tech Stack</h2>
            <ul className="list-disc list-inside">
              {project.techStack.map((tech, index) => (
                <li key={index} className="text-gray-600">{tech}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-2xl font-bold mb-2 text-[#132043]">Features</h2>
            <ul className="list-disc list-inside">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </motion.div>
          {!project.hideRole && (
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-2xl font-bold mb-2 text-[#132043]">Role</h2>
              <ul className="list-disc list-inside">
                {project.role.map((role, index) => (
                  <li key={index} className="text-gray-600">{role}</li>
                ))}
              </ul>
            </motion.div>
          )}

          <motion.div variants={itemVariants} className="flex justify-between items-center">
            <Link href="/projects" className="text-[#132043] hover:underline">
              Back to Projects
            </Link>
            {!project.hideGitHubLink && (
              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-[#132043] hover:underline">
                View on GitHub
              </Link>
            )}
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}
