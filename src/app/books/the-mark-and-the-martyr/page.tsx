import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "The Mark and The Martyr | Janice Wee",
  description: "In 'The Mark and the Martyr,' four face the Great Tribulation. A clone handler flees the Antichrist's Beast Corp, a repentant Christian treads the fine balance, and more. Emunah Short Stories (5-8) grip with deception and courage. Christian fiction by Janice Wee.",
  keywords: "The Mark and The Martyr, Emunah Short Stories, Christian fiction, Tribulation, martyrs, Janice Wee, biblical fiction, collection",
  openGraph: {
    title: "The Mark and The Martyr",
    description: "4 gripping tales of faith, rebellion, and sacrifice during the Great Tribulation.",
    type: "book",
  }
}

export default function MarkMartyrPage() {
  const bookData = {
    title: "The Mark and The Martyr",
    author: "Janice Wee",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/markmartyr-1760410897201.jpg",
    description: "In 'The Mark and the Martyr,' four face the Great Tribulation. A clone handler flees the Antichrist's Beast Corp, a repentant Christian treads the fine balance between business with the Antichrist and providing for the survivors, a woman finds faith through twelve bleak Christmases, and a Jewish survivor endures until Christ's return. Emunah Short Stories (5-8) grip with deception and courage.",
    excerpt: `Manifesting inhuman, demonic power, a giant emerged from the bottomless pit.

Bile rose as recognition hit.
Beast!

Exuding raw power, Liam's once dead, now larger than life friend, levitated before God's Two Witnesses.

Beast's eyes glowed red.
Fangs protruded from his menacing grin.

What terrified Liam most was the eerie shadow looming behind Beast. Shaped like a dragon, it mirrored Beast's movements.`,
    authorNotes: "4 gripping tales of faith, rebellion, and sacrifice. These martyrs reject Beast's Mark of eternal damnation, choosing instead to face certain death with unwavering faith in Christ's return.",
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com.au/Mark-Martyr-2-Janice-Wee/dp/B0DZN43SH7" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/the-mark-and-the-martyr-janice-wee/1147095024" }
    ]
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