import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink, BookOpen, Pen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Singapore's Runaway - Janice Wee",
  description: "Stanley, a daring young man from Singapore, defies the expectations of his traditional Peranakan family and escapes to a thrilling new life at sea. But the adventure turns chilling when he discovers the ship he's boarded is haunted.",
}

export default function SingaporesRunawayPage() {
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
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/runaway-1760410193575.jpg"
                  alt="Singapore's Runaway"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-primary mb-2">Singapore's Runaway</h1>
              <p className="text-lg text-muted-foreground mb-6">Singapore Tales Series</p>
              
              <p className="text-xl text-foreground mb-6 leading-relaxed">
                Stanley, a daring young man from Singapore, defies the expectations of his traditional Peranakan family and escapes to a thrilling new life at sea. But the adventure turns chilling when he discovers the ship he's boarded is haunted.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="https://books2read.com/u/mV0WoM" target="_blank" rel="noopener noreferrer">
                    Buy on Books2Read
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.barnesandnoble.com/w/singapores-runaway-janice-wee/1143158544" target="_blank" rel="noopener noreferrer">
                    Barnes & Noble
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.kobo.com/sg/en/ebook/singapore-s-runaway" target="_blank" rel="noopener noreferrer">
                    Kobo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.amazon.com.au/Singapores-Runaway-1-Janice-Wee/dp/B0BXQ41VJV" target="_blank" rel="noopener noreferrer">
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
                src="https://www.youtube.com/embed/ekzFU49Z2m0"
                title="Singapore's Runaway Book Trailer"
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
                  Stanley, a daring young man from Singapore, defies the expectations of his traditional Peranakan family and escapes to a thrilling new life at sea. But the adventure turns chilling when he discovers the ship he's boarded is haunted.
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
                  A rustling sound broke the night's silence. Arnott. Dressed in black. Picking a lock on the door?
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  A rolled up parchment peeked from under his arm.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  Glass bottles flew at him. He ducked. Splinters sprayed around him when the bottles hit the wall, some lodging in his skin. When he looked up, Arnott was gone.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  "You. Shall. Die."
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  That eerie voice.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  The Ghost of The Everingham.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  Again.
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
                My daddy told me that when my grandpa was young, his mom died and his dad remarried. Grandpa was so upset when great grandpa brought home his new step mom that he ran away and joined a ship's crew, sailing away from Singapore. His new stepmom was a good woman and got her brothers to use their family's ships to scour the seas around Singapore, from Malaysia, Indonesia and possibly further in search of Grandfather. They had their own business and ships to bring in the goods and used these resources to look for Grandpa. One of his step mom's brothers found him on an island in Indonesia and convinced him to return to Singapore. That was the inspiration of this story. Dad told me of grandpa's heroism - how he swam out to sea to rescue a drowning woman. These two stories inspired my tale. The rest of the book is pure fiction.
              </p>
            </Card>
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
              <p className="text-foreground mb-4 leading-relaxed italic">
                "As a Singaporean now living in Canada, this book brought back so many memories of my Singaporean people and history that are absolutely still a vital part of me! I was thrown into the sounds of water, the mix of our unique languages, the racial dynamics, plus some mystical and historical folklore! Fun, easy to read, engaging. Plus this being written by my own family member, taking our family history into a new interpretation, is completely thrilling! Well Done!"
              </p>
              <p className="text-sm text-muted-foreground font-semibold">
                — Tien Neo
              </p>
            </Card>
          </section>

          {/* ISBN Section */}
          <section className="mt-12">
            <Card className="p-6 bg-muted/20">
              <h3 className="text-lg font-semibold text-primary mb-3">Publication Details</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <span className="font-semibold">Ebook ISBN:</span> 9798215714737
                </div>
                <div>
                  <span className="font-semibold">Paperback ISBN:</span> 9798215680414
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