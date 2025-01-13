import Link from 'next/link'
import Navbar from '../../components/Navbar'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FDF0F0]">
      <Navbar />
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center text-[#132043]">
          Project Not Found
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Sorry, the project you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="text-center">
          <Link href="/projects" className="text-[#132043] hover:underline">
            Back to Projects
          </Link>
        </div>
      </main>
    </div>
  )
}

