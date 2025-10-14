import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink, BookOpen, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Naughty Little Nonya - Adventures of Tammy | Janice Wee",
  description: "Welcome to the world of Tammy, a vivacious seven-year-old Nonya girl with an endless imagination and an unbridled sense of adventure. A delightful collection of short stories for Grade 3 reading level.",
  keywords: "Naughty Little Nonya, Tammy, children's fiction, Nonya culture, Janice Wee, family stories",
  openGraph: {
    title: "Naughty Little Nonya",
    description: "Welcome to the world of Tammy, a vivacious seven-year-old Nonya girl with an endless imagination and an unbridled sense of adventure.",
    type: "book",
  }
}

export default function NaughtyLittleNonyaPage() {
  const bookData = {
    title: "Naughty Little Nonya",
    author: "Janice Wee",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/nonya-1760416290723.jpg",
    trailer: "https://youtu.be/xMCOmPrSdEo?si=cr7CNY87PkNf3Lcw",
    description: "Welcome to the world of Tammy, a vivacious seven-year-old Nonya girl with an endless imagination and an unbridled sense of adventure. This delightful collection of short stories, designed for a Grade 3 reading level, brings you along as Tammy transforms her everyday life into a realm of laughter, excitement, and discovery.",
    excerpt: `"Let's forget the snowstorm," Casey picked a jumbo tube of talcum powder.
"What's that for?" Tammy squealed, excitement growing, anticipating the next wild game.
"Ice skating!" Casey's eyes sparkled, bright as stars.
With great diligence, the girls powdered the floor of the entire apartment.
"Careful, Tam," Casey caught the younger girl as she slipped and fell yet again.
Powdering the entire floor was back breaking work. Casey's balance was phenomenal. Not once did she fall.
Tammy on the other hand couldn't take a few steps without landing on her now painful butt. How she envied her athletic big sister.
Clang.`,
    authorNotes: "True confession: My cousin and I powdered the floor so that we could play ice-skating. Decades later, my mother's blood pressure still shot up when I mentioned that incident, which she still remembers vividly.",
    review: {
      name: "Miranda Yeoh",
      stars: 5,
      text: "This book has eight short stories about Little Nonya (or Nyonya) Tammy and her loving family. The significant people in her life comprised her Grandfather (\"Ah Kong\"), her Grandmother, her parents, and her cousins (Cassie, Dean, and Scott). Their interactions, conversations, and adventures are entertaining."
    },
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com.au/Naughty-Little-Nonya-Janice-Wee/dp/B0C4KYPJV9" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/naughty-little-nonya-janice-wee/1143421712" },
      { name: "Kobo", url: "https://www.kobo.com/sg/en/ebook/naughty-little-nonya" },
      { name: "Hoopla & Other Stores", url: "https://books2read.com/u/bwNjzZ" }
    ],
    isbn: {
      ebook: "9798215900369",
      paperback: "9798223258155"
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
                  <p className="text-foreground leading-relaxed">
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
                  <p className="text-foreground mb-4 leading-relaxed italic">
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