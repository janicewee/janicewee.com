import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "The Quest For Immortality - Janice Wee",
  description: "A dystopian to utopian prophecy tale. A powerful narrative of hope and redemption.",
}

export default function QuestForImmortalityPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Book Header */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop"
                  alt="The Quest For Immortality"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-primary mb-4">The Quest For Immortality</h1>
              <p className="text-xl text-foreground mb-6 leading-relaxed">
                A dystopian to utopian prophecy tale. In a world where death seems to reign supreme, one 
                family's faith leads them on a quest that could change the fate of humanity forever. This 
                powerful narrative explores God's ultimate plan for redemption and the hope that transcends 
                even the darkest circumstances.
              </p>

              <div className="space-y-3">
                <Button asChild size="lg" className="w-full md:w-auto">
                  <a href="https://books2read.com/ap/8G2gQM/Janice-Wee" target="_blank" rel="noopener noreferrer">
                    Buy on Books2Read
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full md:w-auto md:ml-3">
                  <a href="https://www.barnesandnoble.com" target="_blank" rel="noopener noreferrer">
                    Buy on Barnes & Noble
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Video Trailer */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Book Trailer</h2>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/WWMFpSRllzQ"
                title="The Quest For Immortality Book Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          </section>

          {/* Reader Reviews */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Reader Reviews</h2>
            <Card className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
                Fiction or Reality? Is this the future? A must read. The author is creative & insightful in 
                weaving a story that grips you to the very end.
              </p>
              <p className="text-sm text-muted-foreground font-semibold">
                — Yvonne Sequerah
              </p>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}