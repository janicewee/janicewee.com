import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Billy & Bluma: Double Trouble - Janice Wee",
  description: "The Adventures of Billy Lionheart Book 2 - Billy and Bluma team up for twice the adventure and twice the mischief.",
}

export default function BillyBlumaPage() {
  const bookData = {
    title: "Billy & Bluma: Double Trouble",
    subtitle: "The Adventures of Billy Lionheart",
    author: "Janice Wee",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billybluma-1760404534699.jpg",
  }

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
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billybluma-1760404534699.jpg"
                  alt="Billy & Bluma: Double Trouble"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-primary mb-2">Billy & Bluma: Double Trouble</h1>
              <p className="text-lg text-muted-foreground mb-4">The Adventures of Billy Lionheart - Book 2</p>
              <p className="text-xl text-foreground mb-6 leading-relaxed">
                Billy reunites with his childhood friend Bluma, and together they stumble upon a mysterious 
                glowing orb that leads to their greatest adventure yet. With Leonard Lion by their side, 
                the duo faces challenges that will test their friendship and faith.
              </p>

              <div className="space-y-3">
                <Button asChild size="lg" className="w-full md:w-auto">
                  <a href="https://books2read.com/u/mYeeQP" target="_blank" rel="noopener noreferrer">
                    Buy on Books2Read
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full md:w-auto md:ml-3">
                  <a href="https://www.barnesandnoble.com/s/billy%20bluma%20double%20trouble%20janice%20wee" target="_blank" rel="noopener noreferrer">
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
                src="https://www.youtube.com/embed/KXufmLKZva8"
                title="Billy & Bluma: Double Trouble Book Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          </section>

          {/* Book Description */}
          <section className="mb-12">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">About This Book</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed mb-4">
                  Billy has grown since his first adventures with Leonard Lion, but he's still the same 
                  curious boy at heart. When he reunites with Bluma, his childhood friend who can also 
                  talk to animals, their combined mischief creates double the trouble for their patient 
                  guardian.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  Everything changes when a mischievous monkey drops a mysterious glowing orb into Bluma's 
                  bread dough. The orb is indestructible, and when Leonard Lion accidentally bites into the 
                  baked bread, he breaks his tooth! The extraction leads to an even greater discovery: a 
                  porcelain box containing a map and a coin bearing the face of Aunt Mathilda, their 
                  resurrected grandmother.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  The map points to a hidden treasure, but getting there means facing dangers the children 
                  never imagined. With Leonard's tooth aching and the mystery deepening, Billy and Bluma 
                  must use their wits, courage, and faith to uncover the truth behind the glowing orb.
                </p>
                <p className="text-foreground leading-relaxed">
                  Filled with humor, heart-pounding adventures, and valuable lessons about friendship and 
                  trust in God's plan, <em>Billy & Bluma: Double Trouble</em> continues the beloved series 
                  with even more excitement and faith-filled fun.
                </p>
              </div>
            </Card>
          </section>

          {/* Series Navigation */}
          <section>
            <Card className="p-6 bg-muted/30">
              <h3 className="text-2xl font-bold text-primary mb-4">Part of The Adventures of Billy Lionheart Series</h3>
              <p className="text-foreground mb-4">
                Continue Billy's journey through the complete series:
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline">
                  <a href="/books/billy-the-lion-boy">Book 1: Billy The Lion Boy</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="/books/secret-hero-flying-lion">Book 3: Secret Hero & His Flying Lion</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="/books/billy-lionheart-series">View Complete Series</a>
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}