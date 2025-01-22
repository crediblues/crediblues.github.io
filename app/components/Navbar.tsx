"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed sticky top-0 left-0 right-0 bg-[#FDF0F0] z-10">
      <div className="max-w-full mx-auto">
        <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-[#132043]">
              ooiwenxian@gmail.com
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:justify-end md:flex-1">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <NavLink key={item.name} href={item.href}>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <button className="md:hidden text-[#132043]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#FDF0F0]"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <MobileNavLink key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                  {item.name}
                </MobileNavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-lg text-[#132043] hover:underline bold">
      {children}
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className="block text-lg text-[#132043] hover:bg-gray-100 px-3 py-2 rounded-md"
        onClick={onClick}
      >
        {children}
      </Link>
    </motion.div>
  )
}
