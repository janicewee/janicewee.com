import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ExternalLink, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Emunah Short Stories Book 6: Liam's Dark Secrets | Janice Wee",
  description: "Liam's dark secrets threaten to destroy those who dare to get too close. Caught between his childhood sweetheart and a dangerously seductive dark mistress, Liam must make a choice with eternal consequences. Christian fiction by Janice Wee.",
  keywords: "Liam's Dark Secrets, Emunah Short Stories, Christian fiction, betrayal, redemption, Janice Wee, biblical fiction, thriller",
  openGraph: {
    title: "Emunah Short Stories Book 6: Liam's Dark Secrets",
    description: "Can he outmanoeuvre the devil in a high-stakes game where betrayal and salvation hang in the balance?",
    type: "book",
  }
}

export default function LiamsBookPage() {
  const bookData = {
    title: "Emunah Short Stories Book 6: Liam's Dark Secrets",
    author: "Janice Wee",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book6liam-1760410829493.jpg",
    trailer: "https://youtu.be/PJ1EiNOuFUU?si=oJV2BnrmeiZNtqrn",
    description: "Liam's dark secrets threaten to destroy those who dare to get too close.\nCaught in a torturous tug-of-war between his childhood sweetheart and a dangerously seductive dark mistress, Liam has to make a choice that will have eternal consequences.\nOn one hand, Liam funds The Ark - a refuge for those defying the Antichrist; on the other, he strikes Faustian deals with Beast himself.\nCan he outmanoeuvre the devil in a high-stakes game where betrayal and salvation hang in the balance?",
    excerpt: `Is it possible to love someone too much?
The more you love a person, the more power he has to hurt you.
The more you trust someone, the greater the pain of betrayal.`,
    authorNotes: "A survey in a mega church showed the disturbing large number of affairs within the membership. Newspapers are splashed with extramarital affairs within the leadership of certain churches or Christian organisations. These stories inspired Sue's tragic tale in Liam's Dark Secrets.",
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com.au/Liams-Dark-Secrets-Janice-Wee/dp/B0DJRXQCV4" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/liams-dark-secrets-janice-wee/1146394455?ean=9798227661562" },
      { name: "Kobo", url: "https://www.kobo.com/sg/en/ebook/liam-s-dark-secrets" },
      { name: "Hoopla & Other Stores", url: "https://books2read.com/u/4j7O8Y" }
    ],
    isbn: {
      ebook: "9798227020956",
      paperback: "9798227661562"
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
                  <p className="text-xl font-semibold text-foreground leading-relaxed whitespace-pre-line">
                    {bookData.description}
                  </p>
                </div>

                <Card className="p-6 mb-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
                  <h2 className="text-2xl font-bold text-primary mb-3">Part of the Emunah Chronicles</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    Liam's story takes place after the Rapture during the Tribulation. See where it fits in the 
                    complete timeline from the Pre-Tribulation Rapture through the Millennial Kingdom.
                  </p>
                  <Button asChild>
                    <a href="/emunah-timeline">
                      View Full Timeline
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </Card>

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