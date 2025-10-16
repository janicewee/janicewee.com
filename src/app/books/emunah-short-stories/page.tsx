import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Emunah Short Stories Series - Biblical Fiction | Janice Wee",
  description: "Explore the complete Emunah Short Stories series - 8 gripping tales of faith, prophecy, and redemption set during the Tribulation. Christian speculative fiction by Janice Wee.",
  keywords: "Emunah Short Stories, Christian fiction, biblical prophecy, Tribulation, end times fiction, Janice Wee, speculative fiction",
  openGraph: {
    title: "Emunah Short Stories Series",
    description: "8 gripping tales of faith, prophecy, and redemption set during the Tribulation.",
    type: "website",
  }
}

const seriesBooks = [
  {
    number: 1,
    title: "Abigail",
    slug: "emunah-book-1-abigail",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book1abigail-1760404534946.jpg",
    description: "A charming yet tragic love triangle explores true love, betrayal and hope through the eyes of Abigail Applewood.",
    trailer: "https://www.youtube.com/embed/PiBxmQxxSUY"
  },
  {
    number: 2,
    title: "Oliver",
    slug: "emunah-book-2-oliver",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book2oliver-1760404534983.jpg",
    description: "Grieving his brother's death, Oliver becomes an outlier in his pursuit of souls, but appearances are deceiving.",
    trailer: "https://www.youtube.com/embed/3keYVfUeJTY"
  },
  {
    number: 3,
    title: "Emunah",
    slug: "emunah-book-3-emunah",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book3emunah-1760404534743.jpg",
    description: "A freshman's life spirals into a thrilling web of friendship, forbidden love, alien encounters, and dark conspiracies.",
    trailer: "https://www.youtube.com/embed/nmUIBfMc_tg"
  },
  {
    number: 4,
    title: "John",
    slug: "emunah-book-4-john",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book4john-1760404535976.jpg",
    description: "Can a frail young man conquer the odds in a weightlifting competition to save his mother?",
    trailer: "https://www.youtube.com/embed/W0K1CUGwgw8"
  },
  {
    number: 5,
    title: "Mei",
    slug: "emunah-book-5-mei",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book5mei-1760410829482.jpg",
    description: "Former clone handler flees Beast Corp and joins the rebels. Her past returns to haunt her.",
    trailer: "https://www.youtube.com/embed/bpASpLyaPj4"
  },
  {
    number: 6,
    title: "Liam's Dark Secrets",
    slug: "emunah-book-6-liams-dark-secrets",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book6liam-1760410829493.jpg",
    description: "Caught between his childhood sweetheart and a dangerously seductive dark mistress, Liam must choose.",
    trailer: "https://www.youtube.com/embed/PJ1EiNOuFUU"
  },
  {
    number: 7,
    title: "Lydia's 12 Christmases",
    slug: "emunah-book-7-lydias-12-christmases",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book7lydia-1760410829051.jpg",
    description: "Peek into Lydia's private life as she transitions from a sheltered girl to a leader of the survivors.",
    trailer: "https://www.youtube.com/embed/dvH0nguzr5w"
  },
  {
    number: 8,
    title: "Mary's Flight",
    slug: "emunah-book-8-marys-flight",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book8mary-1760410829856.jpg",
    description: "As Armageddon looms, Mary and Barry's bond faces the ultimate test: survive the end, or rise with the King's return.",
    trailer: "https://www.youtube.com/embed/Gw-E2VA-TSE"
  }
]

export default function EmunahSeriesPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Series Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary mb-6">Emunah Short Stories</h1>
            <p className="text-xl text-foreground max-w-4xl mx-auto leading-relaxed mb-4">
              Journey through eight captivating tales set during the Tribulation—a time of unprecedented testing, 
              supernatural encounters, and ultimate redemption. Each story weaves together biblical prophecy, human 
              drama, and the transformative power of faith in the darkest hours of history.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From love triangles and spiritual warfare to alien encounters and the ultimate battle of Armageddon, 
              these interconnected stories reveal how ordinary people respond when faced with extraordinary circumstances. 
              Will they choose faith or fear? Redemption or rebellion?
            </p>
          </div>

          {/* Series Books Grid */}
          <section className="space-y-12">
            {seriesBooks.map((book, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-5 gap-6 p-6">
                  {/* Book Number Badge */}
                  <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                      {book.number}
                    </div>
                    <h3 className="text-2xl font-bold text-primary md:mt-4 text-center md:text-left">
                      {book.title}
                    </h3>
                  </div>

                  {/* Book Cover */}
                  <div className="md:col-span-1">
                    <a href={`/books/${book.slug}`}>
                      <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <img
                          src={book.coverUrl}
                          alt={`${book.title} book cover`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </a>
                  </div>

                  {/* Book Description & Video */}
                  <div className="md:col-span-3 flex flex-col justify-between">
                    <p className="text-foreground leading-relaxed text-lg mb-4">
                      {book.description}
                    </p>
                    
                    {/* Video Embed */}
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg mb-4">
                      <iframe
                        width="100%"
                        height="100%"
                        src={book.trailer}
                        title={`${book.title} Book Trailer`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Button asChild>
                        <a href={`/books/${book.slug}`}>
                          View Book Details
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </section>

          {/* Series Info */}
          <section className="mt-16">
            <Card className="p-8 bg-muted/30">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">About the Series</h2>
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="leading-relaxed mb-4">
                  The <strong>Emunah Short Stories</strong> series explores the biblical concept of emunah—faithfulness, 
                  steadfastness, and unwavering trust in God—through the lens of end-times prophecy. Set during the 
                  seven-year Tribulation period described in the Book of Revelation, these stories follow diverse 
                  characters as they navigate a world transformed by supernatural forces, technological tyranny, 
                  and spiritual warfare.
                </p>
                <p className="leading-relaxed mb-4">
                  Each book can be read independently, but together they form a tapestry of interconnected lives, 
                  revealing how faith sustains believers through persecution, deception, and the ultimate test of loyalty. 
                  From the intimate struggles of love and betrayal to epic confrontations with darkness itself, 
                  these tales challenge readers to consider: What would you do if you lived through the end of the world?
                </p>
                <p className="leading-relaxed">
                  Drawing from biblical prophecy, personal testimonies, and real-world observations of faith under fire, 
                  author Janice Wee crafts compelling narratives that blend speculative fiction with timeless spiritual truths.
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