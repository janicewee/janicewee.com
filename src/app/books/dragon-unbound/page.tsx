import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Dragon Unbound - Janice Wee",
  description: "After a thousand years of captivity, a dragon awakens to find the world transformed. An epic tale of faith, redemption, and courage by Janice Wee.",
}

export default function DragonUnboundPage() {
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
                    src="https://images.unsplash.com/photo-1589998059171-988d887df646?w=600&h=900&fit=crop"
                    alt="Dragon Unbound"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Book Info */}
              <div>
                <h1 className="text-5xl font-bold text-primary mb-6">Dragon Unbound</h1>
                
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />
                  ))}
                  <span className="ml-2 text-muted-foreground">(5.0 - Reader Reviews)</span>
                </div>

                <div className="prose prose-lg mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-4">Synopsis</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    After a thousand years of captivity, a dragon awakens to find the world transformed. 
                    As ancient prophecies unfold, faith and courage must unite to face the darkness 
                    threatening both realms.
                  </p>
                  <p className="text-foreground leading-relaxed mb-4">
                    This epic tale explores themes of redemption and God's perfect timing, showing how 
                    even the mightiest creatures must learn to trust in divine providence. The dragon's 
                    journey mirrors our own spiritual awakening, as it discovers that true freedom comes 
                    not from physical liberation, but from surrendering to a higher purpose.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Through encounters with warriors, prophets, and unlikely allies, Dragon Unbound 
                    weaves a tapestry of faith and adventure that will captivate readers who love 
                    Christian fantasy with depth and meaning.
                  </p>
                </div>

                {/* Purchase Buttons */}
                <div className="space-y-3 mb-8">
                  <Button asChild size="lg" className="w-full">
                    <a href="https://books2read.com/ap/8G2gQM/Janice-Wee" target="_blank" rel="noopener noreferrer">
                      Buy on Books2Read
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
                        "A breathtaking journey of faith and redemption that captivated me from the first page. 
                        The dragon's awakening mirrors our own spiritual transformation."
                      </p>
                    </div>
                    <div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                      <p className="text-foreground italic">
                        "After a thousand years... these opening words drew me into an epic tale that 
                        beautifully illustrates God's sovereignty and perfect timing."
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