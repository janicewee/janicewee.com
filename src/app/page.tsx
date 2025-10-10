"use client"

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BookCarousel from '@/components/BookCarousel'
import { Star, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-20">
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
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=600&fit=crop"
                alt="Fantasy books"
                className="w-full h-full object-cover"
              />
            </div>
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
          <div className="grid md:grid-cols-3 gap-8">
            {/* Dragon Unbound Review */}
            <Card className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "After a thousand years... this epic tale of faith and redemption captivated me from start to finish. 
                The dragon's journey mirrors our own spiritual awakening."
              </p>
              <p className="text-sm text-muted-foreground font-semibold">
                — Reader Review, Dragon Unbound
              </p>
            </Card>

            {/* Billy The Lion Boy Review */}
            <Card className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "A heartwarming adventure that teaches courage and faith. Billy's bond with his lion guardian 
                is beautifully written and will inspire young readers everywhere."
              </p>
              <p className="text-sm text-muted-foreground font-semibold">
                — Reader Review, Billy The Lion Boy
              </p>
            </Card>

            {/* The Quest For Immortality Review */}
            <Card className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "A prophetic journey from darkness to light. This dystopian tale offers hope and showcases 
                God's ultimate plan for humanity. Powerful and moving."
              </p>
              <p className="text-sm text-muted-foreground font-semibold">
                — Reader Review, The Quest For Immortality
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
                <img
                  src="https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&h=400&fit=crop"
                  alt="Scones with tea"
                  className="w-full h-full object-cover"
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