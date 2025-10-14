import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Max The Cat | Janice Wee",
  description: "Join Max the Cat on his curious adventures filled with fun and valuable life lessons.",
  keywords: "Max The Cat, Janice Wee, children's fiction, cat stories",
  openGraph: {
    title: "Max The Cat",
    description: "Join Max the Cat on his curious adventures filled with fun and valuable life lessons.",
    type: "book",
  }
}

export default function MaxTheCatPage() {
  const bookData = {
    title: "Max The Cat",
    author: "Janice Wee",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/maxthecat-1760410341047.jpg",
    description: "Join Max the Cat on his curious adventures filled with fun and valuable life lessons.",
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/ap/8G2gQM/Janice-Wee" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com" }
    ]
  }

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-b from-primary/10 to-background py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="sticky top-8">
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

                <Card className="p-6">
                  <p className="text-muted-foreground">More details coming soon...</p>
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