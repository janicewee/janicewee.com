"use client"

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [booksDropdownOpen, setBooksDropdownOpen] = useState(false)

  const bookLinks = [
    { title: "Emunah Short Stories Book 1: Abigail", href: "/books/emunah-book-1-abigail" },
    { title: "Emunah Short Stories Book 2: Oliver", href: "/books/emunah-book-2-oliver" },
    { title: "Emunah Short Stories Book 3: Emunah", href: "/books/emunah-book-3-emunah" },
    { title: "Emunah Short Stories Book 4: John", href: "/books/emunah-book-4-john" },
    { title: "Before Harpazo", href: "/books/before-harpazo" },
    { title: "Emunah Short Stories Book 5: Mei", href: "/books/emunah-book-5-mei" },
    { title: "Emunah Short Stories Book 6: Liam's Dark Secrets", href: "/books/emunah-book-6-liams-dark-secrets" },
    { title: "Emunah Short Stories Book 7: Lydia's 12 Christmases", href: "/books/emunah-book-7-lydias-12-christmases" },
    { title: "Emunah Short Stories Book 8: Mary's Flight", href: "/books/emunah-book-8-marys-flight" },
    { title: "The Mark and The Martyr", href: "/books/the-mark-and-the-martyr" },
    { title: "Billy The Lion Boy", href: "/books/billy-the-lion-boy" },
    { title: "Billy & Bluma: Double Trouble", href: "/books/billy-bluma-double-trouble" },
    { title: "Secret Hero & His Flying Lion", href: "/books/secret-hero-flying-lion" },
    { title: "Billy Lionheart Series", href: "/books/billy-lionheart-series" },
    { title: "The Quest for Immortality", href: "/books/quest-for-immortality" },
    { title: "Dragon Unbound", href: "/books/dragon-unbound" },
    { title: "Two Worlds", href: "/books/two-worlds" },
    { title: "Naughty Little Nonya", href: "/books/naughty-little-nonya" },
    { title: "Little Nonya's Escapades", href: "/books/little-nonyas-escapades" },
    { title: "Sweetcorn Suzie", href: "/books/sweetcorn-suzie" },
    { title: "Escape to Long Hill", href: "/books/escape-to-long-hill" },
    { title: "Max The Cat", href: "/books/max-the-cat" },
    { title: "The Scouts", href: "/books/the-scouts" },
  ]

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
                <div className="absolute left-0 mt-0 pt-2 w-80">
                  <div className="bg-white rounded-md shadow-lg border border-border py-2 max-h-[80vh] overflow-y-auto">
                    {bookLinks.map((book) => (
                      <Link 
                        key={book.href} 
                        href={book.href} 
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                      >
                        {book.title}
                      </Link>
                    ))}
                    <div className="border-t border-border my-2"></div>
                    <Link href="/books" className="block px-4 py-2 text-sm text-primary font-semibold hover:bg-muted">
                      View All Books
                    </Link>
                  </div>
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
                <div className="pl-4 mt-2 space-y-2 max-h-96 overflow-y-auto">
                  {bookLinks.map((book) => (
                    <Link 
                      key={book.href} 
                      href={book.href} 
                      className="block py-1 text-sm text-foreground hover:text-primary"
                    >
                      {book.title}
                    </Link>
                  ))}
                  <Link href="/books" className="block py-1 text-sm text-primary font-semibold">
                    View All Books
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