import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink, BookOpen, Pen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Chico & Yvette - Janice Wee",
  description: "Enemies as baby chicks, Chico and Yvette see each other in different light when they grow up, but the path of true love is never smooth.",
}

export default function ChicoAndYvettePage() {
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
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/chicoyvette-1760410316628.jpg"
                  alt="Chico & Yvette"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-primary mb-2">Chico & Yvette</h1>
              <p className="text-lg text-muted-foreground mb-6">Short Stories From Long Hill Series</p>
              
              <p className="text-xl text-foreground mb-6 leading-relaxed">
                Enemies as baby chicks, Chico and Yvette see each other in different light when they grow up, but the path of true love is never smooth.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="https://books2read.com/u/mVY6gP" target="_blank" rel="noopener noreferrer">
                    Buy on Books2Read
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.barnesandnoble.com/w/escape-to-long-hill-janice-wee/1144828376" target="_blank" rel="noopener noreferrer">
                    Barnes & Noble
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.kobo.com/sg/en/ebook/escape-to-long-hill" target="_blank" rel="noopener noreferrer">
                    Kobo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.amazon.com.au/Escape-Long-Hill-Janice-Wee/dp/B0CZGNN7KD" target="_blank" rel="noopener noreferrer">
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
                  Enemies as baby chicks, Chico and Yvette see each other in different light when they grow up, but the path of true love is never smooth.
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
                  The whole gang was home but where's Chico?
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  "Yvette?" A rooster trilled. The sun's golden rays lit the newcomer's stunning plumage. A gorgeous young rooster, majestic and beautiful stood at the doorway staring at her.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  Yvette blinked. It couldn't be him. She stared at his face – Chico's face.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  "I've been waiting for you to return." The rooster crowed, bobbing his head to show off his impressive comb and wattle.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  Yvette couldn't take her eyes off her old friend. He'd grown into the finest rooster she had ever seen.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  Two new hens clucked as they flanked Chico with expectant look in their eyes. "Yvette, this is Bambi and that's Hattie."
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
                This is a standalone ebook at Amazon but I suggest you get the Escape To Long Hill paperback with the small print "includes book 2 Chico & Yvette" as that book contains both books 1 and 2 in a single volume.
              </p>
            </Card>
          </section>

          {/* ISBN Section */}
          <section className="mt-12">
            <Card className="p-6 bg-muted/20">
              <h3 className="text-lg font-semibold text-primary mb-3">Publication Details</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <span className="font-semibold">Ebook ISBN:</span> 9798224828647
                </div>
                <div>
                  <span className="font-semibold">Paperback ISBN:</span> 9798224748020
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