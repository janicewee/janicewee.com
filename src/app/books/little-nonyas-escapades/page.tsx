import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ExternalLink, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Little Nonya's Escapades - School Adventures of Tammy | Janice Wee",
  description: "Tammy's off to a bright start in her new school, but can she keep her embarassing secret from everyone? Join the naughty little nonya in her adventures in her new school, under the watchful eyes of her Daddy, a teacher there.",
  keywords: "Little Nonya's Escapades, Tammy, children's fiction, school stories, Janice Wee, autobiography",
  openGraph: {
    title: "Little Nonya's Escapades",
    description: "Tammy's off to a bright start in her new school, but can she keep her embarassing secret from everyone?",
    type: "book",
  }
}

export default function LittleNonyasEscapadesPage() {
  const bookData = {
    title: "Little Nonya's Escapades",
    author: "Janice Wee",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/littlenonyaescapades-1760416064407.jpg",
    trailer: "https://youtu.be/GMnr_uOlUYM",
    description: "Tammy's off to a bright start in her new school, but can she keep her embarassing secret from everyone? Join the naughty little nonya in her adventures in her new school, under the watchful eyes of her Daddy, a teacher there.",
    excerpt: `An idle mind is a devil's playground. Tammy was bored. A piece of chalk on the ground beside her table caught her attention. How good's her aim?
She threw it across the room and hit a boy who was walking past. Annoyed, he retaliated with a chalk from the board. That led to an all-out chalk war with girls against boys.
Adrenaline pumping in her veins, Tammy led the chalk throwing when their form teacher walked in.
The entire class stood up. "Good morning Mr. Wee," they chorused.
"Who started this," Mr. Wee's voice was low, laced with anger.
Tammy shuddered. Never in her life had she seen Daddy so furious.`,
    authorNotes: "These are my actual memories, with all names changed except Mr Wee's, Teacher Elizabeth, and Guillemard East Primary School. My original plan was to write out all my memories, then find ways to fictionise everything so that nothing is recognisable. I showed the first draft, my raw memories to my sister. She encouraged me to write my memories as is, as an autobiography, so here it is! Daddy has passed away. My old school is no more, but I found teacher Elizabeth after publishing my book. She's my Godma now.",
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com.au/Little-Nonyas-Escapades-Janice-Wee/dp/B0CCQ618NK" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/little-nonyas-escapades-janice-wee/1143816075" },
      { name: "Kobo", url: "https://www.kobo.com/sg/en/ebook/little-nonya-s-escapades" },
      { name: "Hoopla & Other Stores", url: "https://books2read.com/u/3LjoN1" }
    ],
    isbn: {
      ebook: "9798223201267",
      paperback: "9798223042976"
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