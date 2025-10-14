import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink, BookOpen, Pen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Two Worlds - Janice Wee",
  description: "Singapore's runaway falls in love with a beautiful Indonesian girl, while men die mysteriously in her village. Villagers blame these deaths on a mythical ghost, but could these deaths be linked to an international opium syndicate?",
}

export default function TwoWorldsPage() {
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
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/2worlds-1760410225289.jpg"
                  alt="Two Worlds"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-primary mb-2">Two Worlds</h1>
              <p className="text-lg text-muted-foreground mb-6">Singapore Tales Series</p>
              
              <p className="text-xl text-foreground mb-6 leading-relaxed">
                Singapore's runaway falls in love with a beautiful Indonesian girl, while men die mysteriously in her village. Villagers blame these deaths on a mythical ghost, but could these deaths be linked to an international opium syndicate?
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="https://books2read.com/u/bWYxA1" target="_blank" rel="noopener noreferrer">
                    Buy on Books2Read
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.barnesandnoble.com/w/two-worlds-janice-wee/1144978614" target="_blank" rel="noopener noreferrer">
                    Barnes & Noble
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.kobo.com/sg/en/ebook/two-worlds-35" target="_blank" rel="noopener noreferrer">
                    Kobo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.amazon.com.au/Two-Worlds-Love-Serial-Killer/dp/B0C22LGZQK" target="_blank" rel="noopener noreferrer">
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
                src="https://www.youtube.com/embed/xeOQ9UOJBmI"
                title="Two Worlds Book Trailer"
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
                  Singapore's runaway falls in love with a beautiful Indonesian girl, while men die mysteriously in her village. Villagers blame these deaths on a mythical ghost, but could these deaths be linked to an international opium syndicate?
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
                  Mary's eyes darted to the door, and then the windows, as if to ensure no one was eavesdropping. "It wasn't them. He was the serial killer's first victim."
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  "Serial killer?" Eve's heart raced.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  "They say, it's a Kuntilanak," came Mary's hushed reply. "Henry said he has a close encounter last night in the forest."
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  "What happened?" asked Eve.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  "He saw a woman wearing white. Her hair covered her face. He smelled jasmines and heard a baby wailing. She walked towards him," Mary whispered.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  "And then?" Eve leaned forward.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  "He ran all the way home. Locked the door so she couldn't get in," Mary shuddered.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  "You think it's her? The Kuntilanak?" Eve shuddered.
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
                In Transylvania, you have stories of vampires, the most famous of which is Dracula. The Southeast Asia equivalent is the Pontianak in Singapore or Malaysia, called the Kuntilanak in Indonesia. These were stories told around campfires or night events to scare us when we were kids. It's this region's version of ghost stories.
              </p>
            </Card>
          </section>

          {/* ISBN Section */}
          <section className="mt-12">
            <Card className="p-6 bg-muted/20">
              <h3 className="text-lg font-semibold text-primary mb-3">Publication Details</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <span className="font-semibold">Ebook ISBN:</span> 9798224406258
                </div>
                <div>
                  <span className="font-semibold">Paperback ISBN:</span> 9798224985647
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