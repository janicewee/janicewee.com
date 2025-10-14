import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ExternalLink, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Emunah Short Stories Book 8: Mary's Flight - A Story of Courage and Faith | Janice Wee",
  description: "Mary flees for her life when assassins try to murder her and her unborn baby. Will God save her?  Christian fiction by Janice Wee.",
  keywords: "Mary's Flight, Emunah Short Stories, Christian fiction, survival story, faith-based fiction, Janice Wee, biblical fiction",
  openGraph: {
    title: "Emunah Short Stories Book 8: Mary's Flight",
    description: "Mary flees for her life when assassins try to murder her and her unborn baby. Will God save her?",
    type: "book",
  }
}

export default function MarysFlightBookPage() {
  const bookData = {
    title: "Emunah Short Stories Book 8: Mary's Flight",
    author: "Janice Wee",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book8mary.jpg",
    trailer: "https://www.youtube.com/watch?v=dwGcWPDiFJA",
    description: "Mary flees for her life when assassins try to murder her and her unborn baby. Will God save her?",
    excerpt: `Why can't I remember anything? 

Mary wondered as she groaned, blinking to focus in the pitch blackness. Where am I? What happened to me? Then she remembered.

Assassins! They tried to kill me.`,
    authorNotes: "I drew on my experiences fleeing from danger many years ago. When you don't have money, or a place to go, or anyone you can safely turn to for help—you hope God will provide. As He always does—in His own time, and in His own way, that is.",
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com/Marys-Flight-Emunah-Short-Stories-ebook/dp/B0DN9LFRFW" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/marys-flight-janice-wee/1146549876?ean=9798230409496" },
      { name: "Kobo", url: "https://www.kobo.com/sg/en/ebook/mary-s-flight" },
      { name: "Hoopla & Other Stores", url: "https://books2read.com/u/4jqe8l" }
    ],
    isbn: {
      ebook: "9798230409496",
      paperback: "9798230408987"
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
                        src={bookData.trailer.replace('youtu.be/', 'www.youtube.com/embed/').replace('watch?v=', 'embed/').split('?')[0]}
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