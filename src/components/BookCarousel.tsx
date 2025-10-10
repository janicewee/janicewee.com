"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

const books = [
  {
    title: "Dragon Unbound",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/dragonunbound-1760074636345.jpg",
    synopsis: "After a thousand years of captivity, a dragon awakens to find the world transformed.",
    buyUrl: "https://books2read.com/ap/8G2gQM/Janice-Wee"
  },
  {
    title: "Billy The Lion Boy",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billylionheart-1760074636207.jpg",
    synopsis: "An orphan adventure with a lion guardian exploring themes of courage and divine protection.",
    buyUrl: "https://books2read.com/ap/8G2gQM/Janice-Wee"
  },
  {
    title: "The Quest For Immortality",
    coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
    synopsis: "A dystopian to utopian prophecy tale exploring God's ultimate plan for redemption.",
    buyUrl: "https://books2read.com/ap/8G2gQM/Janice-Wee"
  },
  {
    title: "Billy & Bluma: Double Trouble",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billybluma-1760074636547.jpg",
    synopsis: "Billy and Bluma team up for twice the adventure in this exciting continuation.",
    buyUrl: "https://books2read.com/ap/8G2gQM/Janice-Wee"
  },
  {
    title: "Secret Hero & His Flying Lion",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billyhero-1760074637493.jpg",
    synopsis: "Billy discovers new powers as he and his lion companion soar to greater heights.",
    buyUrl: "https://books2read.com/ap/8G2gQM/Janice-Wee"
  },
  {
    title: "Emunah Short Stories Book 1: Abigail",
    coverUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    synopsis: "A heroine anyone can relate to, exploring faith, relationships, and precious life lessons.",
    buyUrl: "https://books2read.com/ap/8G2gQM/Janice-Wee"
  },
  {
    title: "Mary's Flight",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book8mary-1760074636928.jpg",
    synopsis: "Emunah Short Stories Book 8 set in the Emunah Chronicles Universe.",
    buyUrl: "https://books2read.com/ap/8G2gQM/Janice-Wee"
  },
  {
    title: "Lydia's 12 Christmases",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book7lydia-1760074637096.jpg",
    synopsis: "Emunah Short Stories Book 7 set in the Emunah Chronicles Universe.",
    buyUrl: "https://books2read.com/ap/8G2gQM/Janice-Wee"
  },
  {
    title: "Liam's Dark Secrets",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book6liam-1760074637855.jpg",
    synopsis: "Emunah Short Stories Book 6 set in the Emunah Chronicles Universe.",
    buyUrl: "https://books2read.com/ap/8G2gQM/Janice-Wee"
  },
  {
    title: "Mei",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book5mei-1760074638251.jpg",
    synopsis: "Emunah Short Stories Book 5 set in the Emunah Chronicles Universe.",
    buyUrl: "https://books2read.com/ap/8G2gQM/Janice-Wee"
  },
  {
    title: "Before Harpazo",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/vol1-1760074637785.jpg",
    synopsis: "Emunah Short Story Collection Vol 1 - Books 1 to 4 of Emunah Short Stories.",
    buyUrl: "https://books2read.com/ap/8G2gQM/Janice-Wee"
  },
  {
    title: "John",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book4john-1760074637719.jpg",
    synopsis: "Emunah Short Stories Book 4 set in the Emunah Chronicles Universe.",
    buyUrl: "https://books2read.com/ap/8G2gQM/Janice-Wee"
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
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Book Cover */}
          <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg">
            <img
              src={books[currentIndex].coverUrl}
              alt={books[currentIndex].title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>

          {/* Book Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-primary mb-4">
              {books[currentIndex].title}
            </h3>
            <p className="text-foreground mb-6 leading-relaxed">
              {books[currentIndex].synopsis}
            </p>
            <Button asChild size="lg">
              <a href={books[currentIndex].buyUrl} target="_blank" rel="noopener noreferrer">
                Buy Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </Card>

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