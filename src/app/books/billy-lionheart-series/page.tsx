import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Billy Lionheart Series - Janice Wee",
  description: "Follow Billy's complete journey through this epic fantasy series where faith, family, and destiny intertwine by Janice Wee.",
}

export default function BillyLionheartSeriesPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Book Cover */}
              <div>
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=900&fit=crop"
                    alt="Billy Lionheart Series"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Book Info */}
              <div>
                <h1 className="text-5xl font-bold text-primary mb-6">Billy Lionheart Series</h1>
                
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />
                  ))}
                  <span className="ml-2 text-muted-foreground">(5.0 - Reader Reviews)</span>
                </div>

                <div className="prose prose-lg mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-4">Series Overview</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    Follow Billy's complete journey through this epic fantasy series where faith, family, 
                    and destiny intertwine. Experience the full saga of courage, redemption, and divine 
                    purpose as Billy grows from an orphan boy to a hero of legendary proportions.
                  </p>
                  <p className="text-foreground leading-relaxed mb-4">
                    This comprehensive series explores the depths of God's love and the power of unwavering 
                    faith through multiple adventures. Each book builds upon Billy's relationship with his 
                    lion guardian, revealing new layers of spiritual truth and testing his courage in 
                    increasingly challenging circumstances.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    From his humble beginnings as an orphan to his transformation into Billy Lionheart, 
                    this series demonstrates how God shapes us through trials, protects us through danger, 
                    and fulfills His purpose in our lives. Perfect for readers who love epic fantasy with 
                    deep Christian themes and unforgettable characters.
                  </p>
                </div>

                {/* Purchase Buttons */}
                <div className="space-y-3 mb-8">
                  <Button asChild size="lg" className="w-full">
                    <a href="https://books2read.com/ap/8G2gQM/Janice-Wee" target="_blank" rel="noopener noreferrer">
                      Buy Complete Series on Books2Read
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <a href="https://www.barnesandnoble.com" target="_blank" rel="noopener noreferrer">
                      Buy on Barnes & Noble
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>

                {/* Reader Reviews */}
                <Card className="p-6 bg-muted/30">
                  <h3 className="text-xl font-bold text-primary mb-4">What Readers Say</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                      <p className="text-foreground italic">
                        "An epic saga that will stay with you long after the final page. Masterfully 
                        crafted with deep spiritual insights and thrilling adventure."
                      </p>
                    </div>
                    <div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                      <p className="text-foreground italic">
                        "Billy's complete journey is a testament to God's faithfulness. Each book 
                        builds beautifully on the last, creating an unforgettable saga of faith and courage."
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}