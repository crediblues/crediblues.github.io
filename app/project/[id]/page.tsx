import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectDetail from './Projectdetail'
import projects from "../../projects/Projectsdata";


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

