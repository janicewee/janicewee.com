import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ExternalLink, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Emunah Short Stories Book 2: Oliver - A Supernatural Thriller | Janice Wee",
  description: "Grieving his brother's death, Oliver becomes an outlier in his pursuit of souls, but appearances are deceiving. A gripping supernatural Christian fiction by Janice Wee.",
  keywords: "Oliver, Emunah Short Stories, Christian fiction, supernatural thriller, spiritual warfare, Janice Wee, ghost stories, biblical fiction",
  openGraph: {
    title: "Emunah Short Stories Book 2: Oliver",
    description: "Grieving his brother's death, Oliver becomes an outlier in his pursuit of souls, but appearances are deceiving.",
    type: "book",
  }
}

export default function OliverBookPage() {
  const bookData = {
    title: "Emunah Short Stories Book 2: Oliver",
    author: "Janice Wee",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book2oliver-1760404534983.jpg",
    trailer: "https://youtu.be/3keYVfUeJTY?si=DEnWGIesdNZIIP2d",
    description: "Grieving his brother's death, Oliver becomes an outlier in his pursuit of souls, but appearances are deceiving.",
    excerpt: `Have you ever had the feeling that someone or something is watching you? You feel eyes boring through you, but when you look up, there's no one around.`,
    authorNotes: "The ghosts or familiar spirits stories are based on real life experiences of people I know, shared in private, whose names remain confidential.",
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com/Oliver-Emunah-Short-Stories-Janice/dp/B0D6Q65HHG" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/oliver-janice-wee/1145730081" },
      { name: "Kobo", url: "https://www.kobo.com/sg/en/ebook/oliver-47" },
      { name: "Hoopla & Other Stores", url: "https://www.janicewee.com/Emunah/book2oliver.html" }
    ],
    isbn: {
      ebook: "9798227805324",
      paperback: "9798227661821"
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
              <div className="md:sticky md:top-8">
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

                {/* Emunah Chronicles Timeline Link */}
                <Card className="p-6 mb-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
                  <h2 className="text-2xl font-bold text-primary mb-3">Part of the Emunah Chronicles</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    See where Oliver's story fits in the complete timeline from the Pre-Tribulation Rapture 
                    through the Millennial Kingdom.
                  </p>
                  <Button asChild>
                    <a href="/emunah-timeline">
                      View Full Timeline
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </Card>

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