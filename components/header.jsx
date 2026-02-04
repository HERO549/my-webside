'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              oneflow
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Why Oneflow?
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Learn
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Pricing
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              About
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Blog
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition">
              Get a demo
            </button>
            <button className="px-6 py-2 text-gray-700 font-semibold hover:text-gray-900 transition">
              Log in
            </button>
            <button className="p-2 text-gray-700 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8 8 0 1010.586 10.586z"></path>
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link href="#" className="block text-gray-700 text-sm font-medium">
              Why Oneflow?
            </Link>
            <Link href="#" className="block text-gray-700 text-sm font-medium">
              Learn
            </Link>
            <Link href="#" className="block text-gray-700 text-sm font-medium">
              Pricing
            </Link>
            <Link href="#" className="block text-gray-700 text-sm font-medium">
              About
            </Link>
            <Link href="#" className="block text-gray-700 text-sm font-medium">
              Blog
            </Link>
            <div className="pt-4 flex gap-2">
              <button className="flex-1 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded">
                Get a demo
              </button>
              <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded">
                Log in
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
