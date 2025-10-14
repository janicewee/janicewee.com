import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ExternalLink, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Emunah Short Stories Book 5: Mei - A Gripping Thriller | Janice Wee",
  description: "Former clone handler for Beast Corp realises the truth behind the Immortality Project. She flees and finds new purpose with the rebels as a rescue pilot. A gripping thriller by Janice Wee.",
  keywords: "Mei, Emunah Short Stories, Christian fiction, thriller, dystopian, persecution, Janice Wee, biblical fiction",
  openGraph: {
    title: "Emunah Short Stories Book 5: Mei",
    description: "Former clone handler flees Beast Corp and joins the rebels. Her past returns to haunt her.",
    type: "book",
  }
}

export default function MeiBookPage() {
  const bookData = {
    title: "Emunah Short Stories Book 5: Mei",
    author: "Janice Wee",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book5mei-1760410829482.jpg",
    trailer: "https://youtu.be/bpASpLyaPj4?si=v75IACedaNkUWD_M",
    description: "Former clone handler for Beast Corp realises the truth behind the Immortality Project. She flees and finds new purpose with the rebels as a rescue pilot. Her past returns to haunt her, slaughtering those close to her. A gripping thriller that will keep you up at night.",
    excerpt: `"Class A Enhanced soldiers used their flames to raze this camp," she announced, estimating a dozen superhuman soldiers prowling the ruins.

Mei combed a rustic stone house. 
A deep sense of unease gripped her.
Too-heavy click of boots against stone steps sent her heart racing.

"Missed me?" A voice rasped as the stench of sulphur entwined with musk suffocated her.
Ben!

She had one shot. 
In a single movement, she drew her gun and blasted a sphere at his forehead. His bulletproof skin dissolved, but the explosive did not go off.

"No," she paled as Ben's lips curled in a cruel smirk.`,
    authorNotes: "I heard from friends about the underground church in a country in China, and based the community Mei joined after she was thrown out from her home on such a church. Persecution of Christians is already rife around the world, even before the start of the 7 year Tribulation. Mei is from such a nation where the true church is oppressed.",
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com.au/Mei-5-Janice-Wee/dp/B0DGDFTP31" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/mei-janice-wee/1146253390" },
      { name: "Kobo", url: "https://www.kobo.com/sg/en/ebook/mei-7" },
      { name: "Hoopla & Other Stores", url: "https://books2read.com/u/mq5ZzO" }
    ],
    isbn: {
      ebook: "9798227256447",
      paperback: "9798227186492"
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
                        src={bookData.trailer.replace('youtu.be/', 'www.youtube.com/embed/').split('?')[0]}
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