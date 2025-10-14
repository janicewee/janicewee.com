"use client"

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const books = [
  {
    id: 1,
    title: "Dragon Unbound",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/dragonunbound-1760074636345.jpg",
    synopsis: "After a thousand years of captivity, a dragon awakens to find the world transformed.",
    link: "/books/dragon-unbound"
  },
  {
    id: 2,
    title: "Emunah Book 1: Disturbing Dreams",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book1-1760074871955.jpg",
    synopsis: "A woman in a flowing red dress stands against a golden backdrop, as disturbing dreams begin to unveil ancient prophecies.",
    link: "/books"
  },
  {
    id: 3,
    title: "Emunah Book 2: The Beast's Mark",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book2-1760074872281.jpg",
    synopsis: "As flames and darkness rise, the Beast's Mark becomes the focal point of an epic spiritual battle.",
    link: "/books"
  },
  {
    id: 4,
    title: "The Quest For Immortality",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book3k-1760074872135.jpg",
    synopsis: "A dystopian to utopian prophecy tale exploring God's ultimate plan for redemption.",
    link: "/books/quest-for-immortality"
  },
  {
    id: 5,
    title: "Billy The Lion Boy",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billylionheart-1760074636207.jpg",
    synopsis: "An orphan adventure with a lion guardian, exploring themes of courage and divine protection.",
    link: "/books/billy-the-lion-boy"
  },
  {
    id: 6,
    title: "Billy & Bluma: Double Trouble",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billybluma-1760074636547.jpg",
    synopsis: "Billy's adventures continue with new challenges and double the excitement.",
    link: "/books/billy-bluma-double-trouble"
  },
  {
    id: 7,
    title: "Secret Hero & His Flying Lion",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billyhero-1760074637493.jpg",
    synopsis: "A thrilling conclusion to Billy's journey as he discovers his true heroic destiny.",
    link: "/books/secret-hero-flying-lion"
  },
  {
    id: 8,
    title: "Emunah Short Stories Book 1: Abigail",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book1abigail-1760074872340.jpg",
    synopsis: "A tender love story set in the Emunah Chronicles Universe during a gentle rain.",
    link: "/books"
  },
  {
    id: 9,
    title: "Emunah Short Stories Book 2: Oliver",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book2oliver-1760074871946.jpg",
    synopsis: "Oliver's journey of discovery under purple twilight skies in the Emunah Universe.",
    link: "/books"
  },
  {
    id: 10,
    title: "Emunah Short Stories Book 3: Emunah",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book3emunah-1760074871748.jpg",
    synopsis: "A passionate embrace in vibrant colors tells the story of faith and love.",
    link: "/books"
  },
  {
    id: 11,
    title: "Little Nonya's Escapades",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/littlenonyaescapades-1760074983175.jpg",
    synopsis: "Charming tales of a young Nonya girl's adventures in a colorful, heartwarming world.",
    link: "/books"
  },
  {
    id: 12,
    title: "Naughty Little Nonya",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/naughtylittlenonya-1760074983238.jpeg",
    synopsis: "Short stories by Janice Wee featuring the mischievous adventures of Little Nonya.",
    link: "/books"
  },
  {
    id: 13,
    title: "The Mark and The Martyr",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/markmartyr-1760074983014.jpg",
    synopsis: "Emunah Short Story Collection Vol 2 - Books 5 to 8 exploring themes of sacrifice and faith.",
    link: "/books"
  },
  {
    id: 14,
    title: "Escape to Long Hill",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Longhill12-1760074983066.jpg",
    synopsis: "A short story featuring Chico & Yvette - includes Book 2 from Short Stories from Long Hill Book 1.",
    link: "/books"
  }
]

export default function BookCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length)
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + books.length) % books.length)
  }

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6 p-6">
        {/* Book Cover - Now Clickable */}
        <a 
          href={books[currentIndex].link}
          className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
        >
          <img
            src={books[currentIndex].coverUrl}
            alt={books[currentIndex].title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Book Info */}
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-primary mb-4">
            {books[currentIndex].title}
          </h3>
          <p className="text-foreground mb-6 leading-relaxed">
            {books[currentIndex].synopsis}
          </p>
          <Button asChild size="lg">
            <a href={books[currentIndex].link}>
              Buy Now
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-primary text-primary-foreground p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        aria-label="Previous book"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-primary text-primary-foreground p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        aria-label="Next book"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {books.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
            }`}
            aria-label={`Go to book ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}