"use client"

import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const books = [
  {
    title: "Dragon Unbound",
    synopsis: "After a thousand years of captivity, a dragon awakens to find the world transformed. As ancient prophecies unfold, faith and courage must unite to face the darkness threatening both realms.",
    coverUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop",
    buyLink: "https://books2read.com/ap/8G2gQM/Janice-Wee"
  },
  {
    title: "Billy The Lion Boy",
    synopsis: "An orphan adventure with a lion guardian. Young Billy discovers his extraordinary destiny when he befriends a mystical lion who protects him through perilous journeys and magical encounters.",
    coverUrl: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=400&h=600&fit=crop",
    buyLink: "https://books2read.com/ap/8G2gQM/Janice-Wee"
  },
  {
    title: "The Quest For Immortality",
    synopsis: "A dystopian to utopian prophecy tale. In a world where death seems to reign supreme, one family's faith leads them on a quest that could change the fate of humanity forever.",
    coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
    buyLink: "https://books2read.com/ap/8G2gQM/Janice-Wee"
  },
  {
    title: "Billy Lionheart Series",
    synopsis: "Follow Billy's complete journey through this epic fantasy series where faith, family, and destiny intertwine. Experience the full saga of courage, redemption, and divine purpose.",
    coverUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    buyLink: "https://books2read.com/ap/8G2gQM/Janice-Wee"
  }
]

export default function BookCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextBook = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length)
  }

  const prevBook = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + books.length) % books.length)
  }

  const currentBook = books[currentIndex]

  return (
    <div className="relative max-w-6xl mx-auto">
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Book Cover */}
          <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-xl">
            <img
              src={currentBook.coverUrl}
              alt={currentBook.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Book Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-4">{currentBook.title}</h3>
              <p className="text-foreground leading-relaxed">{currentBook.synopsis}</p>
            </div>

            <Button asChild className="w-full md:w-auto">
              <a href={currentBook.buyLink} target="_blank" rel="noopener noreferrer">
                Buy Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2">
              {books.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted'
                  }`}
                  aria-label={`Go to book ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Navigation Buttons */}
      <button
        onClick={prevBook}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground rounded-full p-2 shadow-lg transition-colors"
        aria-label="Previous book"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextBook}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground rounded-full p-2 shadow-lg transition-colors"
        aria-label="Next book"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}