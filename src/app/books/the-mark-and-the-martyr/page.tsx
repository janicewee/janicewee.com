import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ExternalLink, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "The Mark and The Martyr - A Tale of Faith and Tribulation | Janice Wee",
  description: "A compilation of Emunah Short Stories Book 5 to Book 8 combining four powerful stories of faith, survival, and divine protection during the end times. Christian fiction by Janice Wee.",
  keywords: "The Mark and The Martyr, Emunah Short Stories compilation, Christian fiction, end times, tribulation, faith-based fiction, Janice Wee, biblical fiction",
  openGraph: {
    title: "The Mark and The Martyr",
    description: "A compilation of Emunah Short Stories Book 5 to Book 8 combining four powerful stories of faith, survival, and divine protection.",
    type: "book",
  }
}

export default function MarkAndMartyrBookPage() {
  const bookData = {
    title: "The Mark and The Martyr",
    author: "Janice Wee",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/markmartyr.jpg",
    trailer: "https://youtube.com/watch?v=Jx_QrYWgWg8&feature=youtu.be",
    description: "A compilation of Emunah Short Stories Book 5 to Book 8 combining four powerful stories of faith, survival, and divine protection during the end times.",
    longDescription: `This powerful compilation brings together four interconnected stories that explore themes of faith, courage, and divine intervention during the tribulation period:

• Book 5: Mei - A story of faith and survival
• Book 6: Liam's Dark Secrets - Uncovering hidden truths
• Book 7: Lydia's 12 Christmases - A hero's transformation
• Book 8: Mary's Flight - A desperate escape for survival

Experience the complete journey of these remarkable characters as they face impossible choices, discover hidden strengths, and rely on God's providence in humanity's darkest hour.`,
    excerpt: `Four interconnected stories. One powerful message of faith.

From Mei's unwavering courage to Mary's desperate flight for survival, witness how ordinary people become extraordinary heroes when they trust in God's protection during the most challenging times.`,
    authorNotes: "Combining these four stories into one volume allows readers to experience the full scope of God's faithfulness during the tribulation. Each story builds upon the others, creating a tapestry of hope, courage, and divine intervention that reminds us that we are never alone, even in our darkest moments.",
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com/Mark-Martyr-Emunah-Short-Stories/dp/B0DPBZD2YS" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/the-mark-and-the-martyr-janice-wee/1146823779?ean=9798230543008" },
      { name: "Kobo", url: "https://www.kobo.com/sg/en/ebook/the-mark-and-the-martyr" },
      { name: "Hoopla & Other Stores", url: "https://books2read.com/u/4Nja9g" }
    ],
    isbn: {
      ebook: "9798230543008",
      paperback: "9798230542803"
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
                  <p className="text-xl font-semibold text-foreground leading-relaxed mb-4">
                    {bookData.description}
                  </p>
                  <p className="text-foreground leading-relaxed whitespace-pre-line">
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
                        src={bookData.trailer.replace('youtube.com/watch?v=', 'youtube.com/embed/').replace('youtu.be/', 'youtube.com/embed/').split('?')[0].split('&')[0]}
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
                  <h2 className="text-2xl font-bold text-primary mb-4">About This Collection</h2>
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