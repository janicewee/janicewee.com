import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ExternalLink, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Emunah Short Stories Book 8: Mary's Flight | Janice Wee",
  description: "When the mob strings up her people, Mary flees into a world unraveling. With Barry, her defiant landlord-turned-love, she clings to hope through the Tribulation's fire. A tale of love, faith, and the darkest hour. Christian fiction by Janice Wee.",
  keywords: "Mary's Flight, Emunah Short Stories, Christian fiction, Tribulation, prophecy, Janice Wee, biblical fiction, end times",
  openGraph: {
    title: "Emunah Short Stories Book 8: Mary's Flight",
    description: "As Armageddon looms, their bond faces the ultimate test: survive the end, or rise with the King's return.",
    type: "book",
  }
}

export default function MarysFlightBookPage() {
  const bookData = {
    title: "Emunah Short Stories Book 8: Mary's Flight",
    author: "Janice Wee",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book8mary-1760410829856.jpg",
    trailer: "https://www.youtube.com/embed/Gw-E2VA-TSE",
    description: "When the mob strings up her people, Mary flees into a world unraveling. With Barry, her defiant landlord-turned-love, she clings to hope through the Tribulation's fire—haunted by a winged woman in her dreams. As Armageddon looms, their bond faces the ultimate test: survive the end, or rise with the King's return. A tale of love, faith, and the darkest hour.",
    excerpt: `Jim's half-empty cup sat on his desk. A half-eaten doughnut had fallen on the table, missing the plate. His seat was still warm.

It was as if Jim vanished mid-bite.

"This doesn't make any sense," Barry's brow furrowed.

"I think Samantha is right. Jesus raptured his church." Freaking out, Mary couldn't stop the tremors that gripped her. "If Sam was right about the rapture, then what comes next…"

Barry pulled Mary into a comforting hug, rubbing soothing circles on her back. "There must be some other explanation."`,
    authorNotes: "When I first started writing these Bible Prophecy Fiction books, I tried to keep time and location as vague as possible so that the readers could relate to the stories. Having grown up with western media, I decided to set the tale in the West. I consulted my uncle, a Bible teacher and Bible Prophecy nerd, who pointed out that the Seven Year Tribulation is the time of Jacob's trouble and most of the action takes place in Israel. Hence Mary's Flight which covers the entire timeline, is about a Jewish woman who moves to Israel and experiences the events unfolding around her.",
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com.au/Marys-Flight-8-Janice-Wee/dp/B0DSK1X348" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/marys-flight-janice-wee/1146790785?ean=9798230595366" },
      { name: "Kobo", url: "https://www.kobo.com/sg/en/ebook/mary-s-flight" },
      { name: "Hoopla & Other Stores", url: "https://books2read.com/u/4NNakJ" }
    ],
    isbn: {
      ebook: "9798230826545",
      paperback: "9798230595366"
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