import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ExternalLink, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Emunah Short Stories Book 4: John - An Inspiring Tale of Strength | Janice Wee",
  description: "With his mother's health declining and ruthless Rabbi Caleb harassing them, John feels trapped. Can the frail young man conquer the odds in a weightlifting competition and save his mother? Christian sports fiction by Janice Wee.",
  keywords: "John, Emunah Short Stories, Christian fiction, sports fiction, weightlifting, perseverance, Janice Wee, inspirational fiction, biblical fiction",
  openGraph: {
    title: "Emunah Short Stories Book 4: John",
    description: "Can a frail young man conquer the odds in a weightlifting competition to save his mother?",
    type: "book",
  }
}

export default function JohnBookPage() {
  const bookData = {
    title: "Emunah Short Stories Book 4: John",
    author: "Janice Wee",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book4john-1760404535976.jpg",
    trailer: "https://youtu.be/W0K1CUGwgw8?si=cySNr-oTA7Qwo5gi",
    description: "With his mother's health declining and ruthless Rabbi Caleb harassing them for money, John feels trapped. John learns of a weightlifting competition with a cash prize that could cover his mother's medical expenses and free them from Caleb. Can the frail young man conquer the odds and save his mother? This inspiring tale of perseverance and inner strength will leave you cheering for the underdog.",
    excerpt: `Samson killed a lion with his bare hands. He pulled up the gates of the city and carried them to the top of a hill at midnight as a prank. Samson, of the tribe of Dan, was John's great (a great many greats) grandfather's brother on his mother's side. John's father, and therefore John himself, was from the tribe of Benjamin. But hey, John still had Samson's DNA through mom, so that counts. Sort of.
Pride swelled in John's heart as he reflected on his heritage. He studied the man in the mirror, examining his smooth spaghetti-like arms, a product of his sedentary lifestyle. Lifting books didn't help his physique. Maybe he should keep his hair long? It worked for Samson.
Who was he kidding?`,
    authorNotes: "Grandpa's nickname was superman. He could do all the stunts the strongman in a circus might perform. On top of that, his favourite stunt was to lie on the ground face up, hands behind his shoulders, four muscular men balancing on his body from his shoulders to his hips while he lifted everyone off the ground in a reverse pushup, holding that pose for a photograph. My dad was skinny with an 18 inch waist in his youth. Embarrassed, he took up body building. The transformation was astounding.\n\nOn my mother's side, grandma's brother was a competitive bodybuilder. He trained his son, my uncle, Ah Joo, to represent our nation in weightlifting competitions. His mom cooked for him, to fuel his training and prepare him for the competitions. Grandma would bring me along with her on visits to their home, where the conversations revolved around weightlifting. It's the only sport I know enough to write about, through osmosis, listening to the family discuss the ins and outs of competitive weightlifting.\n\nMy sports fiction, John, is inspired by these strong men who raised me when I was little.",
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com/John-Emunah-Short-Stories-Janice/dp/B0DB6DNSL4" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/john-janice-wee/1146057067" },
      { name: "Kobo", url: "https://www.kobo.com/sg/en/ebook/john-127" },
      { name: "Hoopla & Other Stores", url: "https://books2read.com/u/bagXL6" }
    ],
    isbn: {
      ebook: "9798227159359",
      paperback: "9798227165350"
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
              <div className="md:sticky md:top-8">
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
                  <p className="text-xl font-semibold text-foreground leading-relaxed">
                    {bookData.description}
                  </p>
                </div>

                {/* Emunah Chronicles Timeline Link */}
                <Card className="p-6 mb-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
                  <h2 className="text-2xl font-bold text-primary mb-3">Part of the Emunah Chronicles</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    See where John's story fits in the complete timeline from the Pre-Tribulation Rapture 
                    through the Millennial Kingdom.
                  </p>
                  <Button asChild>
                    <a href="/emunah-timeline">
                      View Full Timeline
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </Card>

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
                  <p className="text-foreground leading-relaxed whitespace-pre-line">
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