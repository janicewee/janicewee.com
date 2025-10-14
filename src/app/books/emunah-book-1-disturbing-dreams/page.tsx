import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink, BookOpen, Pen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Emunah Book 1: Disturbing Dreams - Janice Wee",
  description: "Meet Emunah, a spirited young woman whose life takes an eerie turn when ominous dreams seep into reality. The first full-length novel in the Emunah Chronicles.",
}

export default function DisturbingDreamsPage() {
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
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book1-1760411021422.jpg"
                  alt="Emunah Book 1: Disturbing Dreams"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-primary mb-2">Emunah Book 1: Disturbing Dreams</h1>
              <p className="text-lg text-muted-foreground mb-6">Emunah Chronicles Series</p>
              
              <p className="text-xl text-foreground mb-6 leading-relaxed">
                Meet Emunah, a spirited young woman whose life takes an eerie turn when ominous dreams seep into reality. Beast Corp, an enigmatic conglomerate, casts an increasingly monstrous shadow over their world. With each spine-tingling discovery, Emunah and her friends stumble further into a terrifying plot that threatens to fracture their existence.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="https://books2read.com/u/4A2rGp" target="_blank" rel="noopener noreferrer">
                    Buy on Books2Read
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.barnesandnoble.com/w/disturbing-dreams-janice-wee/1143658446" target="_blank" rel="noopener noreferrer">
                    Barnes & Noble
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.kobo.com/sg/en/ebook/disturbing-dreams" target="_blank" rel="noopener noreferrer">
                    Kobo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.amazon.com.au/Disturbing-Dreams-1-Janice-Wee/dp/B0C87Y2VLC" target="_blank" rel="noopener noreferrer">
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
                src="https://www.youtube.com/embed/GB4vC2zg5Vk"
                title="Disturbing Dreams Book Trailer"
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
                  Meet Emunah, a spirited young woman whose life takes an eerie turn when ominous dreams seep into reality. Beast Corp, an enigmatic conglomerate, casts an increasingly monstrous shadow over their world. With each spine-tingling discovery, Emunah and her friends stumble further into a terrifying plot that threatens to fracture their existence.
                </p>
                <p className="text-foreground leading-relaxed">
                  Artificial Intelligence, cloning and other emerging technologies converge as Christians around the world disappear in what some call The Rapture while others, The Vanishing. The resultant global chaos enables the rise of a one world dictator.
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
                  Winds howled. Voices chanted. A chill ran up her spine. The closer they got to the clearing, the deeper the sense of foreboding gripped her.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  A child screamed.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  The metallic stench of blood hit her nose.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  "Oh God," Oliver whisper-yelled, covering her eyes to protect her from some gory sight.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  "They're murderers," he whispered. "Run." He nudged her to leave while himself recording evidence with LeoTech.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  Curiosity got the better of her. She crept closer, regretting instantly.
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
                Let's just say that writing this book scared the daylights out of me. But if you look beyond the current convergence of events and the terrifying possibilities that modern technology presents, an amazing future lies in the horizon, through that Blessed Hope. Sounds too cryptic? Read the book.
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
                "Eerily scary and could happen in our lifetime."
              </p>
              <p className="text-sm text-muted-foreground font-semibold">
                — A beta reader
              </p>
            </Card>
          </section>

          {/* ISBN Section */}
          <section className="mt-12">
            <Card className="p-6 bg-muted/20">
              <h3 className="text-lg font-semibold text-primary mb-3">Publication Details</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <span className="font-semibold">Ebook ISBN:</span> 9798215364949
                </div>
                <div>
                  <span className="font-semibold">Paperback ISBN:</span> 9798223338338
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