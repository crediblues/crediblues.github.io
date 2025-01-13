import Link from 'next/link'
import Navbar from './components/Navbar'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FDF0F0]">
      <Navbar />
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center text-[#132043]">
          Page Not Found
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="text-center">
          <Link href="/" className="text-[#132043] hover:underline">
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}

