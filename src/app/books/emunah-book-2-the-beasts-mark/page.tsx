import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink, BookOpen, Pen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Emunah Book 2: The Beast's Mark - Janice Wee",
  description: "Unravel the twisted web of intrigue, as a shadowy figure unleashes a chilling reign, where allegiance is branded by the Beast's Mark in this riveting dystopian saga.",
}

export default function BeastsMarkPage() {
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
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book2-1760411038422.jpg"
                  alt="Emunah Book 2: The Beast's Mark"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-primary mb-2">Emunah Book 2: The Beast's Mark</h1>
              <p className="text-lg text-muted-foreground mb-6">Emunah Chronicles Series</p>
              
              <p className="text-xl text-foreground mb-6 leading-relaxed">
                Unravel the twisted web of intrigue, as a shadowy figure unleashes a chilling reign, where allegiance is branded by the Beast's Mark in this riveting dystopian saga.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="https://books2read.com/u/38Wwjr" target="_blank" rel="noopener noreferrer">
                    Buy on Books2Read
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.barnesandnoble.com/w/the-beasts-mark-janice-wee/1143737088" target="_blank" rel="noopener noreferrer">
                    Barnes & Noble
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.kobo.com/sg/en/ebook/the-beast-s-mark" target="_blank" rel="noopener noreferrer">
                    Kobo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.amazon.com.au/Beasts-Mark-2-Janice-Wee/dp/B0CB2DDH1W" target="_blank" rel="noopener noreferrer">
                    Amazon
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Book Description */}
          <section className="mb-12">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">About This Book</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  Unravel the twisted web of intrigue, as a shadowy figure unleashes a chilling reign, where allegiance is branded by the Beast's Mark in this riveting dystopian saga.
                </p>
              </div>
            </Card>
          </section>

          {/* Book Excerpt */}
          <section className="mb-12">
            <Card className="p-8 bg-muted/30">
              <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-primary">Excerpt</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed italic">
                  Tongues of red, orange and gold glowed in the horizon, lighting the field in a magnificent yet horrendous sight.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  Ethan steeled himself as he witnessed the flames consume his crops.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  Distant chants crescendoed. Tiny specks from the distance grew with disturbing speed as the enemy approached.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  "Gather everyone. Head to the base. I'll hold them off," he urged his men.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  "They'll kill you," Carter replied.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  "I know." Eyes on the approaching beast-men, Ethan shrugged. "Now go."
                </p>
              </div>
            </Card>
          </section>

          {/* Author's Notes */}
          <section className="mb-12">
            <Card className="p-8 border-primary/20">
              <div className="flex items-center mb-6">
                <Pen className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-primary">Author's Notes</h2>
              </div>
              <p className="text-foreground leading-relaxed">
                This is short page turner will haunt you, if you dare read it.
              </p>
            </Card>
          </section>

          {/* ISBN Section */}
          <section className="mt-12">
            <Card className="p-6 bg-muted/20">
              <h3 className="text-lg font-semibold text-primary mb-3">Publication Details</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <span className="font-semibold">Ebook ISBN:</span> 9798223989080
                </div>
                <div>
                  <span className="font-semibold">Paperback ISBN:</span> 9798223974246
                </div>
              </div>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}