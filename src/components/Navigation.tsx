"use client"

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [booksDropdownOpen, setBooksDropdownOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
            Janice Wee
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            
            {/* Books Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setBooksDropdownOpen(true)}
              onMouseLeave={() => setBooksDropdownOpen(false)}
            >
              <button className="flex items-center text-foreground hover:text-primary transition-colors">
                Books
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {booksDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-border py-2">
                  <Link href="/books/dragon-unbound" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">
                    Dragon Unbound
                  </Link>
                  <Link href="/books/billy-the-lion-boy" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">
                    Billy The Lion Boy
                  </Link>
                  <Link href="/books/quest-for-immortality" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">
                    The Quest For Immortality
                  </Link>
                  <Link href="/books/billy-lionheart-series" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">
                    Billy Lionheart Series
                  </Link>
                  <div className="border-t border-border my-2"></div>
                  <Link href="/books" className="block px-4 py-2 text-sm text-primary font-semibold hover:bg-muted">
                    All Books
                  </Link>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/recipes" className="text-foreground hover:text-primary transition-colors">
              Recipes
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <Link href="/" className="block py-2 text-foreground hover:text-primary">
              Home
            </Link>
            <div className="py-2">
              <button 
                onClick={() => setBooksDropdownOpen(!booksDropdownOpen)}
                className="flex items-center justify-between w-full text-foreground hover:text-primary"
              >
                Books
                <ChevronDown className={`h-4 w-4 transition-transform ${booksDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {booksDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/books/dragon-unbound" className="block py-1 text-sm text-foreground hover:text-primary">
                    Dragon Unbound
                  </Link>
                  <Link href="/books/billy-the-lion-boy" className="block py-1 text-sm text-foreground hover:text-primary">
                    Billy The Lion Boy
                  </Link>
                  <Link href="/books/quest-for-immortality" className="block py-1 text-sm text-foreground hover:text-primary">
                    The Quest For Immortality
                  </Link>
                  <Link href="/books/billy-lionheart-series" className="block py-1 text-sm text-foreground hover:text-primary">
                    Billy Lionheart Series
                  </Link>
                  <Link href="/books" className="block py-1 text-sm text-primary font-semibold">
                    All Books
                  </Link>
                </div>
              )}
            </div>
            <Link href="/blog" className="block py-2 text-foreground hover:text-primary">
              Blog
            </Link>
            <Link href="/recipes" className="block py-2 text-foreground hover:text-primary">
              Recipes
            </Link>
            <Link href="/about" className="block py-2 text-foreground hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="block py-2 text-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}