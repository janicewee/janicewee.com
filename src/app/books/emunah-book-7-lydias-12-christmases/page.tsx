import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ExternalLink, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Emunah Short Stories Book 7: Lydia's 12 Christmases | Janice Wee",
  description: "Peek into Lydia's private life as she transitions from a sheltered girl to a leader of the survivors and becomes their hero. Christian fiction by Janice Wee.",
  keywords: "Lydia's 12 Christmases, Emunah Short Stories, Christian fiction, survival, leadership, Janice Wee, biblical fiction",
  openGraph: {
    title: "Emunah Short Stories Book 7: Lydia's 12 Christmases",
    description: "Peek into Lydia's private life as she transitions from a sheltered girl to a leader of the survivors.",
    type: "book",
  }
}

export default function LydiasBookPage() {
  const bookData = {
    title: "Emunah Short Stories Book 7: Lydia's 12 Christmases",
    author: "Janice Wee",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book7lydia-1760410829051.jpg",
    trailer: "https://www.youtube.com/embed/dvH0nguzr5w",
    description: "Peek into Lydia's private life as she transitions from a sheltered girl to a leader of the survivors and becomes their hero.",
    excerpt: `She scaled the ocean-facing mountain slope with practiced ease, perching on her favourite ledge to take in the majestic view. 

Imagining Daddy, Mummy, Oliver and Aaron around her, she wrapped her arms around herself and sang in soft voice.
"Happy birthday to me.
Happy birthday to me.
Happy birthday to Lydia.
Happy birthday to me."

She closed her eyes, and blew out the candles of an imaginary cake.`,
    authorNotes: "I have a confession to make. I wrote my own childbirth experience delivering my first baby into that opening scene. Yes, I threatened to kick anyone who tried to stick that big needle into me.",
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com.au/Lydias-12-Christmases-Janice-Wee/dp/B0DN3QDCWJ" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/lydias-12-christmases-janice-wee/1146520842?ean=9798230251316" },
      { name: "Kobo", url: "https://www.kobo.com/sg/en/ebook/lydia-s-12-christmases" },
      { name: "Hoopla & Other Stores", url: "https://books2read.com/u/3nkE2o" }
    ],
    isbn: {
      ebook: "9798227708984",
      paperback: "9798230251316"
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
    "inLanguage": "en"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-b from-primary/10 to-background py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="md:sticky md:top-8">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src={bookData.image}
                    alt={`${bookData.title} book cover`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
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

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>eBook ISBN:</strong> {bookData.isbn.ebook}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <strong>Paperback ISBN:</strong> {bookData.isbn.paperback}
                  </p>
                </div>
              </div>

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

                <Card className="p-6 mb-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
                  <h2 className="text-2xl font-bold text-primary mb-3">Part of the Emunah Chronicles</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    Follow Lydia's journey through the Tribulation years. See where her story fits in the 
                    complete timeline from the Pre-Tribulation Rapture through the Millennial Kingdom.
                  </p>
                  <Button asChild>
                    <a href="/emunah-timeline">
                      View Full Timeline
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </Card>

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
                        src={bookData.trailer}
                        title="Book Trailer"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </Card>
                )}

                <Card className="p-6 mb-8 bg-muted/30">
                  <h2 className="text-2xl font-bold text-primary mb-4">Book Excerpt</h2>
                  <blockquote className="text-foreground leading-relaxed italic border-l-4 border-secondary pl-4 whitespace-pre-line">
                    {bookData.excerpt}
                  </blockquote>
                </Card>

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