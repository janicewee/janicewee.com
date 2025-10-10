import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "The Quest For Immortality - Janice Wee",
  description: "A dystopian to utopian prophecy tale. One family's faith leads them on a quest that could change humanity's fate by Janice Wee.",
}

export default function QuestForImmortalityPage() {
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
                    src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=900&fit=crop"
                    alt="The Quest For Immortality"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Book Info */}
              <div>
                <h1 className="text-5xl font-bold text-primary mb-6">The Quest For Immortality</h1>
                
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />
                  ))}
                  <span className="ml-2 text-muted-foreground">(5.0 - Reader Reviews)</span>
                </div>

                <div className="prose prose-lg mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-4">Synopsis</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    A dystopian to utopian prophecy tale. In a world where death seems to reign supreme, 
                    one family's faith leads them on a quest that could change the fate of humanity forever.
                  </p>
                  <p className="text-foreground leading-relaxed mb-4">
                    This powerful narrative explores God's ultimate plan for redemption and the hope that 
                    transcends even the darkest circumstances. Through trials and tribulations, the family 
                    discovers that true immortality isn't found in avoiding death, but in embracing the 
                    eternal life promised through faith.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    The Quest For Immortality takes readers on a prophetic journey from darkness to light, 
                    showcasing how God's promises unfold even when all seems lost. This tale of hope and 
                    transformation will resonate with anyone seeking deeper meaning in life's struggles.
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
                        "A prophetic journey from darkness to light. This dystopian tale offers hope and 
                        showcases God's ultimate plan for humanity. Powerful and moving."
                      </p>
                    </div>
                    <div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                      <p className="text-foreground italic">
                        "A prophetic journey that offers hope and showcases divine purpose. 
                        Truly transformative and deeply meaningful."
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