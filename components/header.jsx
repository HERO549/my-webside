'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-secondary">
              oneflow
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-foreground/70 hover:text-foreground text-sm font-medium transition">
              Why Oneflow?
            </Link>
            <Link href="#" className="text-foreground/70 hover:text-foreground text-sm font-medium transition">
              Learn
            </Link>
            <Link href="#" className="text-foreground/70 hover:text-foreground text-sm font-medium transition">
              Pricing
            </Link>
            <Link href="#" className="text-foreground/70 hover:text-foreground text-sm font-medium transition">
              About
            </Link>
            <Link href="#" className="text-foreground/70 hover:text-foreground text-sm font-medium transition">
              Blog
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="btn-primary">
              Get a demo
            </button>
            <button className="text-foreground/70 hover:text-foreground font-semibold transition">
              Log in
            </button>
            <button className="p-2 text-foreground/70 hover:text-foreground transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8 8 0 1010.586 10.586z"></path>
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground/70"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link href="#" className="block text-foreground/70 text-sm font-medium">
              Why Oneflow?
            </Link>
            <Link href="#" className="block text-foreground/70 text-sm font-medium">
              Learn
            </Link>
            <Link href="#" className="block text-foreground/70 text-sm font-medium">
              Pricing
            </Link>
            <Link href="#" className="block text-foreground/70 text-sm font-medium">
              About
            </Link>
            <Link href="#" className="block text-foreground/70 text-sm font-medium">
              Blog
            </Link>
            <div className="pt-4 flex gap-2">
              <button className="flex-1 btn-primary text-sm">
                Get a demo
              </button>
              <button className="flex-1 btn-outline text-sm">
                Log in
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
