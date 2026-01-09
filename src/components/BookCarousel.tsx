"use client"

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const books = [
  {
    id: 1,
    title: "Dragon Unbound",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/dragonunbound-1760074636345.jpg",
    synopsis: "In a millennial world of mortals and immortals, best friends Billy and Bluma fall in love and marry. Billy, a teacher with super strength, serves alongside a flying lion under an immortal king, as Bluma raises their kids. When the Dragon deceives, sparking rebellion against the King of Kings, will their faith prevail? A Christian romance and saga of love, legacy, and apocalyptic spiritual warfare.",
    link: "/books/dragon-unbound",
    altText: "Dragon Unbound book cover - epic fantasy featuring the Millennial Kingdom and final battle"
  },
  {
    id: 2,
    title: "Emunah Book 1: Disturbing Dreams",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book1-1760074871955.jpg",
    synopsis: "Meet Emunah, a spirited young woman whose life takes an eerie turn when ominous dreams seep into reality. Beast Corp, an enigmatic conglomerate, casts an increasingly monstrous shadow over their world. With each spine-tingling discovery, Emunah and her friends stumble further into a terrifying plot that threatens to fracture their existence. Artificial Intelligence, cloning and other emerging technologies converge as Christians around the world disappear in what some call The Rapture while others, The Vanishing. The resultant global chaos enables the rise of a one world dictator.",
    link: "/books",
    altText: "Disturbing Dreams book cover - thriller featuring AI, aliens, and pre-rapture conspiracy"
  },
  {
    id: 3,
    title: "Emunah Book 2: The Beast's Mark",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book2-1760074872281.jpg",
    synopsis: "Unravel the twisted web of intrigue, as a shadowy figure unleashes a chilling reign, where allegiance is branded by the Beast's Mark in this riveting dystopian saga.",
    link: "/books",
    altText: "The Beast's Mark book cover - dystopian tribulation period novel about the Antichrist"
  },
  {
    id: 4,
    title: "The Quest For Immortality",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book3k-1760074872135.jpg",
    synopsis: "A man dances with death. A woman pursues immortality. The two meet in pursuit of the ultimate truth. Technology is advancing at an accelerated speed. This novel explores what if this falls into the hands of a global dictator. The Quest for Immortality, an epic Science-Fiction-Fantasy novel, has been described by another reader as 'mind-blowing.' Yet another says it's 'captivating to read.'",
    link: "/books/quest-for-immortality",
    altText: "The Quest For Immortality book cover - sci-fi exploring transhumanism and biblical prophecy"
  },
  {
    id: 5,
    title: "Billy The Lion Boy",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billylionheart-1760074636207.jpg",
    synopsis: "Orphaned as a baby, Billy is raised by a fierce lion in the heart of the wild. Growing up wrestling with lion cubs and roaring alongside young lions, he learns their ways—and their language. But when a deadly threat stalks his pride, Billy must use his gift to save his family, both furry and human. Can a boy with a lion's heart bridge two worlds to stop the danger closing in?",
    link: "/books/billy-the-lion-boy",
    altText: "Billy The Lion Boy book cover - children's fantasy about orphan raised by talking lion"
  },
  {
    id: 6,
    title: "Billy & Bluma: Double Trouble",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billybluma-1760074636547.jpg",
    synopsis: "Billy and Bluma find a map and a coin with Aunt Mathilda's face, sparking a wild quest with Leonard, their talking lion. Trapped by the ruthless Junta, with Leonard shipped to a hunter's lair, can the pals outwit their foes and save their friend? A thrilling, funny adventure awaits!",
    link: "/books/billy-bluma-double-trouble",
    altText: "Billy & Bluma Double Trouble book cover - adventure story with talking lion and mystery quest"
  },
  {
    id: 7,
    title: "Secret Hero & His Flying Lion",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billyhero-1760074637493.jpg",
    synopsis: "Freshman Billy and his flying lion guardian face danger at St. Lydia's Academy. When the lion is poisoned and a tunnel traps Billy and his buddy Bluma, they uncover a deadly plot. Guided by mysterious mentor Samson, can Billy master his super strength to stop a killer? A thrilling YA fantasy adventure with Christian themes.",
    link: "/books/secret-hero-flying-lion",
    altText: "Secret Hero & His Flying Lion book cover - YA fantasy featuring super strength and mystery at academy"
  },
  {
    id: 8,
    title: "Emunah Short Stories Book 1: Abigail",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book1abigail-1760074872340.jpg",
    synopsis: "A charming yet tragic love triangle explores true love, betrayal and hope through the eyes of Abigail Applewood.",
    link: "/books/emunah-book-1-abigail",
    altText: "Abigail book cover - romance exploring love, betrayal and supernatural elements"
  },
  {
    id: 9,
    title: "Emunah Short Stories Book 2: Oliver",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book2oliver-1760074871946.jpg",
    synopsis: "Grieving his brother's death, Oliver becomes an outlier in his pursuit of souls, but appearances are deceiving.",
    link: "/books/emunah-book-2-oliver",
    altText: "Oliver book cover - spiritual warfare story about soul-winning and deception"
  },
  {
    id: 10,
    title: "Emunah Short Stories Book 3: Emunah",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book3emunah-1760074871748.jpg",
    synopsis: "Do aliens exists? What is the truth behind UFOs? A freshman's life spirals into a thrilling web of friendship, forbidden love, alien encounters, and dark conspiracies after a heroic senior saves her life.",
    link: "/books/emunah-book-3-emunah",
    altText: "Emunah book cover - thriller about alien encounters and conspiracy theories"
  },
  {
    id: 11,
    title: "Little Nonya's Escapades",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/littlenonyaescapades-1760074983175.jpg",
    synopsis: "Tammy's off to a bright start in her new school, but can she keep her embarassing secret from everyone? Join the naughty little nonya in her adventures in her new school, under the watchful eyes of her Daddy, a teacher there.",
    link: "/books/little-nonyas-escapades",
    altText: "Little Nonya's Escapades book cover - children's story celebrating Peranakan culture"
  },
  {
    id: 12,
    title: "Naughty Little Nonya",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/naughtylittlenonya-1760074983238.jpeg",
    synopsis: "Welcome to the world of Tammy, a vivacious seven-year-old Nonya girl with an endless imagination and an unbridled sense of adventure. This delightful collection of short stories, designed for a Grade 3 reading level, brings you along as Tammy transforms her everyday life into a realm of laughter, excitement, and discovery.",
    link: "/books/naughty-little-nonya",
    altText: "Naughty Little Nonya book cover - children's short stories about mischievous Peranakan girl"
  },
  {
    id: 13,
    title: "The Mark and The Martyr",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/markmartyr-1760074983014.jpg",
    synopsis: "In 'The Mark and the Martyr,' four face the Great Tribulation. A clone handler flees the Antichrist's Beast Corp, a repentant Christian treads the fine balance between business with the Antichrist and providing for the survivors, a woman finds faith through twelve bleak Christmases, and a Jewish survivor endures until Christ's return. Emunah Short Stories (5-8) grip with deception and courage.",
    link: "/books/the-mark-and-the-martyr",
    altText: "The Mark and The Martyr book cover - tribulation period stories of persecution and faith"
  },
  {
    id: 14,
    title: "Escape to Long Hill",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Longhill12-1760410284805.jpg",
    synopsis: "3 baby chicks evade predators and hidden dangers to find their way to Long Hill, to join their family in chicken paradise.",
    link: "/books/escape-to-long-hill",
    altText: "Escape to Long Hill book cover - children's story about baby chicks' adventure"
  },
  {
    id: 15,
    title: "Singapore's Runaway",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/runaway-1760410193575.jpg",
    synopsis: "A captivating tale set in Singapore, exploring themes of friendship, freedom and finding one's place in the world.",
    link: "/books/singapores-runaway",
    altText: "Singapore's Runaway book cover - story about friendship and freedom set in Singapore"
  },
  {
    id: 16,
    title: "Two Worlds",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/2worlds-1760410225289.jpg",
    synopsis: "Star-crossed lovers. The mystery man is a fugitive from the island city Singapore, while Daddy's girl is a kampong girl in Indonesia.",
    link: "/books/two-worlds",
    altText: "Two Worlds book cover - historical romance between Singapore fugitive and Indonesian girl"
  },
  {
    id: 17,
    title: "Sweetcorn Suzie",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Suzie-1760410252107.jpg",
    synopsis: "Seven short stories, each depicting real life memories that are too wild to believe.",
    link: "/books/sweetcorn-suzie",
    altText: "Sweetcorn Suzie book cover - collection of wild true-life short stories"
  },
  {
    id: 18,
    title: "Chico & Yvette",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/chicoyvette-1760410316628.jpg",
    synopsis: "A very short, chicken tale of love triangles, and laughter, with heart melting moments.",
    link: "/books/chico-and-yvette",
    altText: "Chico & Yvette book cover - heartwarming chicken tale of love and laughter"
  },
  {
    id: 19,
    title: "Max The Cat",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/maxthecat-1760410341047.jpg",
    synopsis: "Join Max the Cat and his sleuth buddy Monroe Mongoose as they solve the mystery - who kidnapped Max's human?",
    link: "/books/max-the-cat",
    altText: "Max The Cat book cover - detective story featuring cat and mongoose solving kidnapping mystery"
  },
  {
    id: 20,
    title: "The Scouts",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/scouts-1760410358286.jpg",
    synopsis: "An exciting tale of courage, teamwork, and faith as young scouts embark on their greatest adventure.",
    link: "/books/the-scouts",
    altText: "The Scouts book cover - adventure story about young scouts learning courage and teamwork"
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
            <Image
              src={books[currentIndex].coverUrl}
              alt={books[currentIndex].altText}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
              unoptimized
              sizes="(max-width: 768px) 100vw, 50vw"
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