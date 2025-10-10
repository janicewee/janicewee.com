import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Billy The Lion Boy - Janice Wee",
  description: "An orphan adventure with a lion guardian. Young Billy discovers his extraordinary destiny in this heartwarming tale by Janice Wee.",
}

export default function BillyTheLionBoyPage() {
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
                    src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=600&h=900&fit=crop"
                    alt="Billy The Lion Boy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Book Info */}
              <div>
                <h1 className="text-5xl font-bold text-primary mb-6">Billy The Lion Boy</h1>
                
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />
                  ))}
                  <span className="ml-2 text-muted-foreground">(5.0 - Reader Reviews)</span>
                </div>

                <div className="prose prose-lg mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-4">Synopsis</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    An orphan adventure with a lion guardian. Young Billy discovers his extraordinary destiny 
                    when he befriends a mystical lion who protects him through perilous journeys and magical 
                    encounters.
                  </p>
                  <p className="text-foreground leading-relaxed mb-4">
                    This heartwarming tale explores themes of courage, family bonds, and divine protection 
                    through the eyes of a brave young boy. Billy's journey from orphan to hero demonstrates 
                    how God places guardians in our lives and reveals His purpose through unexpected friendships.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Perfect for readers of all ages, Billy The Lion Boy combines adventure, faith, and the 
                    timeless message that we are never truly alone when we trust in God's protection and plan 
                    for our lives.
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
                        "A heartwarming adventure that teaches courage and faith. Billy's bond with his lion 
                        guardian is beautifully written and will inspire young readers everywhere."
                      </p>
                    </div>
                    <div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                      <p className="text-foreground italic">
                        "Billy's courage and faith inspire readers of all ages. A beautiful story about 
                        divine guardianship and finding your purpose."
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