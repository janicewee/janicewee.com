import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink, BookOpen, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Emunah Short Stories Book 1: Abigail - A Story of True Love and Betrayal | Janice Wee",
  description: "A charming yet tragic love triangle explores true love, betrayal and hope through the eyes of Abigail Applewood. When we fail to realize that what we longed for has been with us all along. Christian fiction by Janice Wee.",
  keywords: "Abigail, Emunah Short Stories, Christian fiction, love triangle, faith-based fiction, Janice Wee, biblical fiction",
  openGraph: {
    title: "Emunah Short Stories Book 1: Abigail",
    description: "A charming yet tragic love triangle explores true love, betrayal and hope through the eyes of Abigail Applewood.",
    type: "book",
  }
}

export default function AbigailBookPage() {
  const bookData = {
    title: "Emunah Short Stories Book 1: Abigail",
    author: "Janice Wee",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book1abigail-1760404534946.jpg",
    trailer: "https://youtu.be/PiBxmQxxSUY?si=ETQUTciXaM8A9X3e",
    description: "A charming yet tragic love triangle explores true love, betrayal and hope through the eyes of Abigail Applewood.",
    longDescription: `It's a tragedy when we fail to realise that what we longed for, has been with us all along….
Until it's too late. 
Such is the story of Abigail Applewood.`,
    excerpt: `"It's a tragedy when we fail to realise that what we longed for, has been with us all along….
Until it's too late. 
Such is the story of Abigail Applewood."`,
    authorNotes: "I drew on my own memories, and the stories of heartache shared by friends when I wrote this tale. You can say that Abigail is the composite of several real women whose identities will forever remain secret.",
    review: {
      name: "Miranda Yeoh",
      stars: 5,
      text: "Do you observe strong relationships, partnerships, and marriages often sprang up from childhood neighbors, school friends, or church pals? This story features Abigail - A heroine anyone can relate to, not an impeccably organized heroine, and not particularly endowed with physical beauty. A crush on a muscular guy with worldly values despite attending church services. \n\nIt is a tragedy when we do not realize we already have everything to be happy. Abigail took Aaron, her childhood pal, for granted. He was always loving and patient. The antagonist is Stella, a Sunday Christian, Abigail's boss. Stella was full of hate towards several people, including Abigail. Stella fired Abigail and is capable of more heinous sins. Would you think that hatred and murder are the same category of sins? What is the response of the believer in Christ? Do read the short story. You might learn some precious lessons."
    },
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com/Abigail-Emunah-Short-Stories-Janice/dp/B0D4SYB3NF" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/abigail-janice-wee/1145575901" },
      { name: "Kobo", url: "https://www.kobo.com/sg/en/ebook/abigail-47" },
      { name: "Hoopla & Other Stores", url: "https://books2read.com/u/bPwEYr" }
    ],
    isbn: {
      ebook: "9798224596621",
      paperback: "9798224433285"
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
    "numberOfPages": "Unknown",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": bookData.review.stars,
      "reviewCount": 1
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": bookData.review.stars
      },
      "author": {
        "@type": "Person",
        "name": bookData.review.name
      },
      "reviewBody": bookData.review.text
    }
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
                  <p className="text-foreground leading-relaxed whitespace-pre-line mt-4">
                    {bookData.longDescription}
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

                {/* Reader Review */}
                <Card className="p-6 mb-8 border-l-4 border-l-secondary">
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
                    <Quote className="mr-2 h-6 w-6 text-secondary" />
                    Reader Review
                  </h2>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < bookData.review.stars ? 'fill-secondary text-secondary' : 'text-secondary'}`} />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 leading-relaxed italic whitespace-pre-line">
                    "{bookData.review.text}"
                  </p>
                  <p className="text-sm text-muted-foreground font-semibold">
                    — {bookData.review.name}
                  </p>
                </Card>

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