import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectDetail from './Projectdetail'

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
    description: "Project 2 is an innovative solution for managing personal finances.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/project2",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400"
    ],
    features: [
      "Expense tracking",
      "Budget setting",
      "Data visualization"
    ],
    challenges: "Implementing accurate expense categorization was challenging.",
    futurePlans: "We're working on integrating with various banking APIs."
  }
]


export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const project = projects.find(p => p.id === id)
  
  if (!project) {
    return {
      title: 'Project Not Found'
    }
  }

  return {
    title: `${project.title} | My Portfolio`,
    description: project.description
  }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects.find(p => p.id === id)
  
  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}

