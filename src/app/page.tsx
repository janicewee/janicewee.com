"use client"

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BookCarousel from '@/components/BookCarousel'
import { Star, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      {/* Structured Data for Author and Website */}
      <Script id="schema-author" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Janice Wee",
          "url": "https://janicewee.com",
          "jobTitle": "Author",
          "description": "Indie Author of Christian Speculative Fiction",
          "genre": ["Christian Fiction", "Fantasy", "Speculative Fiction", "Children's Literature"],
          "nationality": "Singaporean",
          "alumniOf": {
            "@type": "Organization",
            "name": "National University of Singapore"
          },
          "sameAs": [
            "https://books2read.com/author/janice-wee"
          ]
        })}
      </Script>

      <Script id="schema-website" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Janice Wee - Author Website",
          "url": "https://janicewee.com",
          "description": "Official website of Janice Wee, indie author of Christian speculative fiction and fantasy novels featuring faith, family themes, dragons, lions, and biblical prophecy.",
          "author": {
            "@type": "Person",
            "name": "Janice Wee"
          }
        })}
      </Script>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background min-h-[33vh] flex items-center py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                Janice Wee
              </h1>
              <p className="text-xl text-foreground mb-4">
                Indie Author of Christian Speculative Fiction
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to my world of fantasy novels woven with faith and family themes. 
                As an indie author, I craft stories that explore God's sovereignty, redemption, 
                and the power of family bonds through epic adventures filled with dragons, 
                lions, and ancient prophecies.
              </p>
              <div className="mt-8 flex gap-4">
                <Button asChild size="lg">
                  <a href="/books">Explore My Books</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/about">About Me</a>
                </Button>
              </div>
            </div>
            <a 
              href="/books" 
              className="relative aspect-[16/9] md:aspect-[3/2] rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow cursor-pointer group"
            >
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/web-banner-1762611823263.png?width=1200&height=1200&resize=contain"
                  alt="Collection of Janice Wee's book covers featuring Secret Hero & His Flying Lion, Little Nonya's Escapades, and Emunah Book 1: Disturbing Dreams"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
                unoptimized
              />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Books Carousel */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Featured Books</h2>
          <BookCarousel />
        </div>
      </section>

      {/* What Readers Say */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">What Readers Say</h2>
          
          {/* Featured Review */}
          <Card className="p-8 mb-12 border-primary/20 bg-background/50">
            <div className="flex mb-4" aria-label="5 star rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-xl text-foreground mb-6 italic leading-relaxed">
              "Disturbing Dreams by Janice Wee is a gripping and unsettling start to the Emunah series that blends faith, futuristic technology, and apocalyptic suspense into a story that feels uncomfortably plausible... The pacing is strong, the ideas are bold, and the story leaves you thinking long after you’ve finished the last page."
            </p>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-lg font-bold text-primary">Valeria Vargas</p>
                <p className="text-sm text-muted-foreground">Goodreads Review for Emunah Book 1: Disturbing Dreams</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline">
                  <a href="/books/emunah-book-1-disturbing-dreams">
                    Read Full Review
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="secondary">
                  <a href="https://www.janicewee.com/books/disturbing-dreams-free-ebook.pdf" target="_blank" rel="noopener noreferrer">
                    Get Free Ebook (PDF)
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Dragon Unbound Review */}
            <Card className="p-6">
              <div className="flex mb-4" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "A must-read for fans of Christian speculative fiction, Janice Wee's Dragon Unbound plunges readers into a vibrant narrative set during the Millennial Kingdom, where biblical prophecy unfolds amidst the everyday lives of mortals and immortals alike."
              </p>
              <p className="text-sm text-muted-foreground font-semibold">
                — Ting Chin, Dragon Unbound
              </p>
            </Card>

            {/* Billy The Lion Boy Review */}
            <Card className="p-6">
              <div className="flex mb-4" aria-label="4 star rating">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
                <Star className="h-5 w-5 text-secondary" />
              </div>
              <p className="text-foreground mb-4 italic">
                "An entertaining and imaginative story. Fun to read with a gentle perspective on love and loss. Billy is an orphan who yearns to be reunited with his parents. His guardian is a lion who is his fierce protector despite the youngster's penchant for mischief."
              </p>
              <p className="text-sm text-muted-foreground font-semibold">
                — Kindle Customer, Billy The Lion Boy
              </p>
            </Card>

            {/* The Quest For Immortality Review */}
            <Card className="p-6">
              <div className="flex mb-4" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "Fiction or Reality? Is this the future? A must read. The author is creative & insightful in weaving a story that grips you to the very end."
              </p>
              <p className="text-sm text-muted-foreground font-semibold">
                — Yvonne Sequerah, The Quest For Immortality
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Recipe Teaser */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-video md:aspect-auto">
                <Image
                  src="https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&h=400&fit=crop"
                  alt="Freshly baked scones served with tea on elegant china, perfect for reading"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Scones with Tea and Reading
                </h2>
                <p className="text-foreground mb-6 leading-relaxed">
                  What better way to enjoy a good fantasy novel than with freshly baked scones and a warm cup of tea? 
                  Discover my favorite scone recipes that pair perfectly with an afternoon of reading.
                </p>
                <Button asChild className="w-full md:w-auto">
                  <a href="/recipes">
                    View Recipes
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}