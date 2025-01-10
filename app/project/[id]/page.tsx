'use client'

import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import ProjectImage from '../../components/Projectimage';
import Link from 'next/link';

// This would typically come from a database or API
const projects = [
  {
    id: "project1",
    title: "Project 1",
    description: "A comprehensive description of Project 1. This project aimed to solve X problem by implementing Y solution. Throughout the development process, we faced several challenges such as A, B, and C. We overcame these by utilizing D approach and E technologies.",
    techStack: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/yourusername/project1",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400"
    ],
    features: [
      "Real-time data synchronization",
      "User authentication and authorization",
      "Responsive design for mobile and desktop"
    ],
    challenges: "One of the main challenges was implementing real-time updates across multiple clients. We solved this by using WebSockets and implementing a pub/sub model with Redis.",
    futurePlans: "In the future, we plan to add more advanced analytics features and improve the overall performance of the application."
  },
  {
    id: "project2",
    title: "Project 2",
    description: "Project 2 is an innovative solution for managing personal finances. It provides users with intuitive tools to track expenses, set budgets, and visualize spending patterns. The application leverages machine learning algorithms to provide personalized financial advice.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "TensorFlow"],
    githubLink: "https://github.com/yourusername/project2",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400"
    ],
    features: [
      "Expense tracking and categorization",
      "Budget setting and monitoring",
      "AI-powered financial advice",
      "Data visualization with interactive charts"
    ],
    challenges: "Implementing accurate expense categorization was challenging. We addressed this by training a machine learning model on a large dataset of transactions and continuously improving it based on user feedback.",
    futurePlans: "We're working on integrating with various banking APIs to provide users with a more comprehensive view of their finances across multiple accounts."
  },
]

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

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    return <div>Project not found</div>
  }

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
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {project.images.map((img, index) => (
              <ProjectImage key={index} src={img} alt={`${project.title} screenshot ${index + 1}`} />
            ))}
          </motion.div>
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
          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-2xl font-bold mb-2 text-[#132043]">Challenges</h2>
            <p className="text-gray-600">{project.challenges}</p>
          </motion.div>
          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-2xl font-bold mb-2 text-[#132043]">Future Plans</h2>
            <p className="text-gray-600">{project.futurePlans}</p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex justify-between items-center">
            <Link href="/projects" className="text-[#132043] hover:underline">
              Back to Projects
            </Link>
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-[#132043] hover:underline">
              View on GitHub
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}

