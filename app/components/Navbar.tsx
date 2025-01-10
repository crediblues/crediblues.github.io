import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex sticky top-0 z-50 justify-between items-center py-4 px-6 bg-[#FDF0F0] bg-opacity-0">
      <Link href="/" className="text-2xl font-bold text-[#132043]">
        ooiwenxian@gmail.com
      </Link>
      <div className="flex space-x-6">
        <Link href="/projects" className="text-lg font-bold text-[#132043] hover:underline">
          Projects
        </Link>
        <Link href="/about" className="text-lg font-bold text-[#132043] hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  )
}
