"use client"

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const books = [
  {
    id: 1,
    title: "Dragon Unbound",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/dragonunbound-1760074636345.jpg",
    synopsis: "In a millennial world of mortals and immortals, best friends Billy and Bluma fall in love and marry. Billy, a teacher with super strength, serves alongside a flying lion under an immortal king, as Bluma raises their kids. When the Dragon deceives, sparking rebellion against the King of Kings, will their faith prevail? A Christian romance and saga of love, legacy, and apocalyptic spiritual warfare.",
    link: "/books/dragon-unbound"
  },
  {
    id: 2,
    title: "Emunah Book 1: Disturbing Dreams",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book1-1760074871955.jpg",
    synopsis: "Meet Emunah, a spirited young woman whose life takes an eerie turn when ominous dreams seep into reality. Beast Corp, an enigmatic conglomerate, casts an increasingly monstrous shadow over their world. With each spine-tingling discovery, Emunah and her friends stumble further into a terrifying plot that threatens to fracture their existence. Artificial Intelligence, cloning and other emerging technologies converge as Christians around the world disappear in what some call The Rapture while others, The Vanishing. The resultant global chaos enables the rise of a one world dictator.",
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
    synopsis: "A dystopian to utopian prophecy tale. In a world where death seems to reign supreme, one family's faith leads them on a quest that spans from the darkest tribulation to the brightest hope of eternity. This powerful narrative explores God's ultimate plan for redemption.",
    link: "/books/quest-for-immortality"
  },
  {
    id: 5,
    title: "Billy The Lion Boy",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billylionheart-1760074636207.jpg",
    synopsis: "Billy is an orphan who yearns to be reunited with his parents. His guardian is a lion who is his fierce protector despite the youngster's penchant for mischief. Follow their adventures in this heartwarming tale of courage, faith, and divine protection.",
    link: "/books/billy-the-lion-boy"
  },
  {
    id: 6,
    title: "Billy & Bluma: Double Trouble",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billybluma-1760074636547.jpg",
    synopsis: "Billy reunites with his childhood friend Bluma, and together they stumble upon a mysterious glowing orb that leads to their greatest adventure yet. With Leonard Lion by their side, the duo faces challenges that will test their friendship and faith.",
    link: "/books/billy-bluma-double-trouble"
  },
  {
    id: 7,
    title: "Secret Hero & His Flying Lion",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billyhero-1760074637493.jpg",
    synopsis: "Billy's super strength goes wild at St Lydia's Academy, while Leonard Lion receives flying gloves he can't control. When someone poisons Leonard and tries to kill Billy and friends, can they stop the killer before it's too late?",
    link: "/books/secret-hero-flying-lion"
  },
  {
    id: 8,
    title: "Emunah Short Stories Book 1: Abigail",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book1abigail-1760074872340.jpg",
    synopsis: "A charming yet tragic love triangle explores true love, betrayal and hope through the eyes of Abigail Applewood.",
    link: "/books/emunah-book-1-abigail"
  },
  {
    id: 9,
    title: "Emunah Short Stories Book 2: Oliver",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book2oliver-1760074871946.jpg",
    synopsis: "Grieving his brother's death, Oliver becomes an outlier in his pursuit of souls, but appearances are deceiving.",
    link: "/books/emunah-book-2-oliver"
  },
  {
    id: 10,
    title: "Emunah Short Stories Book 3: Emunah",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book3emunah-1760074871748.jpg",
    synopsis: "Do aliens exist? What is the truth behind UFOs? A freshman's life spirals into a thrilling web of friendship, forbidden love, alien encounters, and dark conspiracies after a heroic senior saves her life.",
    link: "/books/emunah-book-3-emunah"
  },
  {
    id: 11,
    title: "Little Nonya's Escapades",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/littlenonyaescapades-1760074983175.jpg",
    synopsis: "A delightful story exploring adventure and cultural heritage.",
    link: "/books/little-nonyas-escapades"
  },
  {
    id: 12,
    title: "Naughty Little Nonya",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/naughtylittlenonya-1760074983238.jpeg",
    synopsis: "A charming story exploring mischief and cultural traditions.",
    link: "/books/naughty-little-nonya"
  },
  {
    id: 13,
    title: "The Mark and The Martyr",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/markmartyr-1760074983014.jpg",
    synopsis: "In 'The Mark and the Martyr,' four face the Great Tribulation. A clone handler flees the Antichrist's Beast Corp, a repentant Christian treads the fine balance between business with the Antichrist and providing for the survivors, a woman finds faith through twelve bleak Christmases, and a Jewish survivor endures until Christ's return. Emunah Short Stories (5-8) grip with deception and courage.",
    link: "/books/the-mark-and-the-martyr"
  },
  {
    id: 14,
    title: "Escape to Long Hill",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Longhill12-1760074983066.jpg",
    synopsis: "An adventurous tale of courage and discovery.",
    link: "/books/escape-to-long-hill"
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