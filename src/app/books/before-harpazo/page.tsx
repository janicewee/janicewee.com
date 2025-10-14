import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Before Harpazo - Volume 1 | Janice Wee",
  description: '"Before Harpazo" is a gripping collection of 4 short stories set before The Christian Rapture of The Church. Each tale explores love, faith, and the supernatural, with characters facing extraordinary challenges. Christian fiction by Janice Wee.',
  keywords: "Before Harpazo, Emunah Short Stories, Christian fiction, Rapture, faith-based fiction, Janice Wee, biblical fiction, collection",
  openGraph: {
    title: "Before Harpazo - Volume 1",
    description: "A gripping collection of 4 short stories set before The Christian Rapture of The Church.",
    type: "book",
  }
}

export default function BeforeHarpazoPage() {
  const bookData = {
    title: "Before Harpazo",
    author: "Janice Wee",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/vol1-1760410867752.jpg",
    description: '"Before Harpazo" is a gripping collection of 4 short stories set before The Christian Rapture of The Church. Each tale explores love, faith, and the supernatural, with characters facing extraordinary challenges and personal dilemmas. From romantic choices and spiritual battles to alien encounters and heroic transformations, this collection promises to captivate. Includes Books 1 to 4 of Janice Wee\'s Emunah Short Stories.',
    excerpt: `"What the hell happened?!?" with utmost tenderness Ben caressed Penelope's cheek. He administered cardiopulmonary resuscitation but there was no response.
"C'mon P. Breathe," he pleaded.
The paramedics declared her dead.
"No!" Ben punched the wall, bloodying his fist.
"No." Ben buried his face in his hands. "Couldn't save her." His hoarse voice, no more than a whisper.`,
    authorNotes: 'This volume collects the following books: "Abigail", "Oliver", "Emunah" and "John". By getting all 4 stories in a single book instead of a story per book, you save 52% for the paperback, or 56% for the ebook! It is amazing value for your money!',
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com.au/Before-Harpazo-1-Janice-Wee/dp/B0DCHMCFDK" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/before-harpazo-janice-wee/1146133654" },
      { name: "Kobo", url: "https://www.kobo.com/sg/en/ebook/before-harpazo" },
      { name: "Hoopla & Other Stores", url: "https://books2read.com/u/3LJgd7" }
    ],
    isbn: {
      ebook: "9798227340139",
      paperback: "9798227410191"
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