import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ExternalLink, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Emunah Short Stories Book 3: Emunah - UFOs, Aliens & Faith | Janice Wee",
  description: "Do aliens exist? What is the truth behind UFOs? A freshman's life spirals into a thrilling web of friendship, forbidden love, alien encounters, and dark conspiracies. Christian speculative fiction by Janice Wee.",
  keywords: "Emunah, aliens, UFOs, Christian fiction, supernatural thriller, spiritual warfare, Janice Wee, biblical fiction, speculative fiction",
  openGraph: {
    title: "Emunah Short Stories Book 3: Emunah",
    description: "A freshman's life spirals into a thrilling web of friendship, forbidden love, alien encounters, and dark conspiracies.",
    type: "book",
  }
}

export default function EmunahBookPage() {
  const bookData = {
    title: "Emunah Short Stories Book 3: Emunah",
    author: "Janice Wee",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book3emunah-1760404534743.jpg",
    trailer: "https://youtu.be/nmUIBfMc_tg?si=3_l3rAQ3JJ3YKxfE",
    description: "Do aliens exists? What is the truth behind UFOs? A freshman's life spirals into a thrilling web of friendship, forbidden love, alien encounters, and dark conspiracies after a heroic senior saves her life.",
    excerpt: `Do beings from another reality exist?
What if someone, or something from another dimension is monitoring mankind?
What if that superior life form intends to direct the course of humanity towards its own agenda?
That's what my UFO obsessed buddy, Emma, proclaims. These aliens are the good guys who want to stop us from destroying the earth.
Leo, my flat mate, insists the Big Bang created the universe and Higgs boson proves it.
As for me?
I believe what my dad told me. That God created the universe in six days and rested on the seventh, even though my pals think I'm crazy.`,
    authorNotes: "One night, I saw an extra-terrestrial at the foot of my bed. It was studying me. I couldn't move. In terror, I cried for Jesus. The creature disappeared instantly when I called on the name of Jesus. I woke up in bed, not sure whether it was a dream… or not. I believe these extra-terrestrials are demons or spirits of deception. That incident inspired a scene in Emunah's tale.",
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com/Emunah-Short-Stories-Janice-Wee/dp/B0D7QR9CBJ" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/emunah-janice-wee/1145849359" },
      { name: "Kobo", url: "https://www.kobo.com/sg/en/ebook/emunah-2" },
      { name: "Hoopla & Other Stores", url: "https://books2read.com/u/4A1eyA" }
    ],
    isbn: {
      ebook: "9798227556059",
      paperback: "9798227012449"
    }
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": bookData.title,
    "author": {
      "@type": "Person",
      "name": bookData.author
    },
    "description": bookData.description,
    "isbn": bookData.isbn.ebook,
    "bookFormat": "EBook/Paperback",
    "inLanguage": "en",
    "numberOfPages": "Unknown"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Book Cover */}
              <div className="sticky top-8">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src={bookData.image}
                    alt={`${bookData.title} book cover`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Buy Buttons */}
                <div className="mt-6 space-y-3">
                  {bookData.buyLinks.map((link, index) => (
                    <Button key={index} asChild className="w-full" variant={index === 0 ? "default" : "outline"} size="lg">
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        Buy on {link.name}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>

                {/* ISBN Info */}
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>eBook ISBN:</strong> {bookData.isbn.ebook}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <strong>Paperback ISBN:</strong> {bookData.isbn.paperback}
                  </p>
                </div>
              </div>

              {/* Book Details */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  {bookData.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  by {bookData.author}
                </p>

                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-xl font-semibold text-foreground leading-relaxed">
                    {bookData.description}
                  </p>
                </div>

                {/* Book Trailer */}
                {bookData.trailer && (
                  <Card className="p-6 mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
                      <BookOpen className="mr-2 h-6 w-6 text-secondary" />
                      Book Trailer
                    </h2>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src={bookData.trailer.replace('youtu.be/', 'www.youtube.com/embed/').split('?')[0]}
                        title="Book Trailer"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </Card>
                )}

                {/* Book Excerpt */}
                <Card className="p-6 mb-8 bg-muted/30">
                  <h2 className="text-2xl font-bold text-primary mb-4">Book Excerpt</h2>
                  <blockquote className="text-foreground leading-relaxed italic border-l-4 border-secondary pl-4 whitespace-pre-line">
                    {bookData.excerpt}
                  </blockquote>
                </Card>

                {/* Author's Notes */}
                <Card className="p-6">
                  <h2 className="text-2xl font-bold text-primary mb-4">Author's Notes</h2>
                  <p className="text-foreground leading-relaxed">
                    {bookData.authorNotes}
                  </p>
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