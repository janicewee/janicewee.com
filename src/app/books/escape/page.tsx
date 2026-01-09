import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Script from 'next/script'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Escape - Janice Wee",
  description: "A true story of survival during World War 2. When the Japanese occupied Singapore, my grandfather escaped death in Changi by God's grace.",
}

export default function EscapePage() {
  const bookData = {
    title: "Escape",
    author: "Janice Wee",
    isbn: "9798215283820",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Escape-2-1762605567370.jpg?width=1200&height=1200&resize=contain",
  }

  return (
    <>
      {/* Structured Data for Book */}
      <Script id="schema-book" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Book",
          "name": "Escape",
          "author": {
            "@type": "Person",
            "name": "Janice Wee"
          },
          "isbn": "9798215283820",
          "description": "When the Japanese occupied Singapore during World War 2, they selected our stronger men, had them dig their own graves and killed them. My grandfather was one of those rounded up to be slaughtered. By God's grace, he escaped. This is the story of how my grandfather dodged death in Changi.",
          "genre": ["Historical Fiction", "True Story", "War", "Faith"],
          "about": ["World War 2", "Singapore", "Survival", "Faith", "Japanese Occupation", "Changi"],
          "image": bookData.image,
          "url": "https://janicewee.com/books/escape",
          "bookFormat": "https://schema.org/EBook",
          "inLanguage": "en",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "url": "https://books2read.com/u/m2QQjk"
          }
        })}
      </Script>

      <Navigation />
      
      <main className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Book Header */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={bookData.image}
                  alt="Escape book cover by Janice Wee - A story of survival during World War 2 Singapore"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-primary mb-4">{bookData.title}</h1>
              <p className="text-xl text-foreground mb-6 leading-relaxed">
                When the Japanese occupied Singapore during World War 2, they selected our stronger men, 
                had them dig their own graves and killed them. My grandfather was one of those rounded up 
                to be slaughtered. By God's grace, he escaped.
              </p>
              <p className="text-lg text-muted-foreground mb-6 italic">
                This is the story of how my grandfather dodged death in Changi, as related to me by my late father.
              </p>

              <div className="mb-6">
                <p className="text-sm text-muted-foreground">
                  <strong>Author:</strong> {bookData.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>ISBN:</strong> {bookData.isbn}
                </p>
              </div>

              <div className="space-y-3">
                <Button asChild size="lg" className="w-full md:w-auto">
                  <a href="https://books2read.com/u/m2QQjk" target="_blank" rel="noopener noreferrer">
                    Get the eBook
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Book Description */}
          <section className="mb-12">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">About This Book</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed mb-4">
                  When the Japanese occupied Singapore during World War 2, they selected our stronger men, 
                  had them dig their own graves and killed them. My grandfather was one of those rounded up 
                  to be slaughtered. By God's grace, he escaped.
                </p>
                <p className="text-foreground leading-relaxed">
                  This is the story of how my grandfather dodged death in Changi, as related to me by my late father.
                </p>
              </div>
            </Card>
          </section>

          {/* Book Excerpt */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Book Excerpt</h2>
            <Card className="p-8 bg-muted/30">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed mb-4">
                  The trucks delivered the men to Changi. There, they waited.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  Night fell. Uneasiness grew. What insidious plans did those Japs have?
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  There were armed guards everywhere. By all counts, escape would be impossible. 
                  That was what the friends he was detained with said.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  "Better do what the Japs say. These ruthless killers have guns."
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  "If we stay, we die," he replied.
                </p>
                <p className="text-foreground leading-relaxed mb-4 italic">
                  God helps those who help themselves.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  That was what he believed and taught his grandchildren decades later.
                </p>
                <p className="text-foreground leading-relaxed mb-4 italic">
                  Another thing he used to say: God gave you a brain. He expects you to use it.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  Ah Kong and his friends watched and waited for an opportune time to make their move.
                </p>
                <p className="text-foreground leading-relaxed">
                  Schooled in St Joseph's Institution and raised a Catholic, Ah Kong had heard about God. 
                  He prayed, then took that leap of faith.
                </p>
              </div>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
