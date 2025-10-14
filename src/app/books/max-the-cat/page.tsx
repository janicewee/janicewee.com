import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink, BookOpen, Pen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Max The Cat - Janice Wee",
  description: "Sam, Max's human, has gone missing. It's up to Max the cat and Monroe Mongoose to save the humans in this delightful tale.",
}

export default function MaxTheCatPage() {
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
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/maxthecat-1760410341047.jpg"
                  alt="Max The Cat"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-primary mb-2">Max The Cat</h1>
              <p className="text-lg text-muted-foreground mb-6">Short Stories From Long Hill Series</p>
              
              <p className="text-xl text-foreground mb-6 leading-relaxed">
                Sam, Max's human, has gone missing. It's up to Max the cat and Monroe Mongoose to save the humans in this delightful tale.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="https://books2read.com/u/m2Kklr" target="_blank" rel="noopener noreferrer">
                    Buy on Books2Read
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.barnesandnoble.com/w/max-the-cat-janice-wee/1145041009" target="_blank" rel="noopener noreferrer">
                    Barnes & Noble
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.kobo.com/sg/en/ebook/max-the-cat" target="_blank" rel="noopener noreferrer">
                    Kobo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.amazon.com.au/Max-Cat-3-Janice-Wee/dp/B0CY79SD4H" target="_blank" rel="noopener noreferrer">
                    Amazon
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
                src="https://www.youtube.com/embed/0pVQ4XLezBs"
                title="Max The Cat Book Trailer"
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
                <p className="text-foreground leading-relaxed">
                  Sam, Max's human, has gone missing. It's up to Max the cat and Monroe Mongoose to save the humans in this delightful tale.
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
                  Strong rays of sunlight streamed through the window, illuminating the waiting breakfast at the table. Max strode into his Castle. Sam, his well-trained human had set the table and prepared his morning banquet. Max's breakfast kibble filled his personal dish, which in turn held down today's funnies, featuring Max's favourite cat.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  "Sam?" Max meowed.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  Sam would usually sit beside him, but today, he was nowhere to be found.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  That's strange. A steaming cup of coffee sat on top of Sam's newspaper. A half-eaten bagel, spread with cream cheese lay abandoned on Sam's plate.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  Every morning, Sam waits for Max's return. They always eat breakfast and read their papers together. Sam taught Max human symbols which meant something in Human speak. They looked like squiggles to Max, but he could match them with some effort.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  Max's stomach growled.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  Breakfast first.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  Sam must be using the human litterbox and would take some time. Not bothering to wait, Max tucked into his kibble.
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
                There was a neighbourhood cat that everyone claimed as their pet. One sad day, the ginger cat passed away. This was written in memory of that cat. I wanted to write his real adventures but never got down to it. Maybe one day…
              </p>
            </Card>
          </section>

          {/* ISBN Section */}
          <section className="mt-12">
            <Card className="p-6 bg-muted/20">
              <h3 className="text-lg font-semibold text-primary mb-3">Publication Details</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <span className="font-semibold">Ebook ISBN:</span> 9798224724529
                </div>
                <div>
                  <span className="font-semibold">Paperback ISBN:</span> 9798224054930
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