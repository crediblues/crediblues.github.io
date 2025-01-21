import Link from 'next/link'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  images: string[];
  features: string[];
  hideGitHubLink?: boolean
  hideImages?: boolean
  hideRole?: boolean
}

export default function ProjectCard({ id, title, description, techStack = [], githubLink, hideGitHubLink}: ProjectCardProps) {
    return (
      <motion.div className="bg-white p-6 rounded-lg shadow-md">
        <Link href={`/project/${id}`} className="block mb-2">
          <h2 className="text-xl font-bold text-[#132043] hover:underline">{title}</h2>
        </Link>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <h3 className="font-semibold text-[#132043] mb-2">Tech Stack:</h3>
          <ul className="list-disc list-inside">
            {techStack.map((tech, index) => (
              <li key={index} className="text-gray-600">{tech}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <Link href={`/project/${id}`} className="text-[#132043] hover:underline">
            View Details
          </Link>
          {/* Render GitHub link only if it's not hidden */}
          {!hideGitHubLink && githubLink ? (
            <Link href={githubLink} target="_blank" rel="noopener noreferrer" className="text-[#132043] hover:underline">
              View on GitHub
            </Link>
          ) : (
            <span className="text-gray-400"></span> // Disabled text when link is hidden
          )}
        </div>
      </motion.div>
    )
  }
