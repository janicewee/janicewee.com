import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Billy Lionheart Series - Janice Wee",
  description: "Follow Billy's complete journey through this epic fantasy series where faith, family, and destiny intertwine.",
}

const seriesBooks = [
  {
    title: "Billy The Lion Boy",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billylionheart-1760074636207.jpg",
    videoUrl: "https://www.youtube.com/embed/rjkZTe1RwhE",
    description: "Billy is an orphan who yearns to be reunited with his parents. His guardian is a lion who is his fierce protector despite the youngster's penchant for mischief."
  },
  {
    title: "Billy & Bluma: Double Trouble",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billybluma-1760074636547.jpg",
    videoUrl: "https://www.youtube.com/embed/KXufmLKZva8",
    description: "Billy and Bluma team up for twice the adventure and twice the mischief in this exciting continuation of their story."
  },
  {
    title: "Secret Hero & His Flying Lion",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billyhero-1760074637493.jpg",
    videoUrl: "https://www.tiktok.com/@janicewee07/video/7520151600225144071?_r=1&_t=ZS-8xWP5liVTb2",
    description: "Billy discovers new powers as he and his lion companion soar to greater heights in their most thrilling adventure yet."
  }
]

export default function BillyLionheartSeriesPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Series Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary mb-6">The Adventures of Billy Lionheart</h1>
            <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
              Follow Billy's complete journey through this epic fantasy series where faith, family, and destiny 
              intertwine. Experience the full saga of courage, redemption, and divine purpose as Billy grows from 
              an orphan boy to a hero of legendary proportions. This comprehensive series explores the depths of 
              God's love and the power of unwavering faith.
            </p>
            <div className="mt-8 space-y-3">
              <Button asChild size="lg">
                <a href="https://books2read.com/ap/8G2gQM/Janice-Wee" target="_blank" rel="noopener noreferrer">
                  Buy the Series on Books2Read
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="md:ml-3">
                <a href="https://www.barnesandnoble.com" target="_blank" rel="noopener noreferrer">
                  Buy on Barnes & Noble
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Series Books */}
          <section className="space-y-12">
            {seriesBooks.map((book, index) => (
              <Card key={index} className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Book Cover */}
                  <div className="order-1">
                    <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-xl mx-auto max-w-sm">
                      <img
                        src={book.coverUrl}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className={`order-2 flex flex-col justify-center ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <h2 className="text-3xl font-bold text-primary mb-4">{book.title}</h2>
                    <p className="text-foreground mb-6 leading-relaxed text-lg">
                      {book.description}
                    </p>
                    
                    {/* Video Embed */}
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                      {book.videoUrl.includes('tiktok') ? (
                        <div className="flex items-center justify-center h-full bg-muted">
                          <a 
                            href={book.videoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Watch on TikTok →
                          </a>
                        </div>
                      ) : (
                        <iframe
                          width="100%"
                          height="100%"
                          src={book.videoUrl}
                          title={`${book.title} Book Trailer`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </section>

          {/* Reader Review */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">What Readers Say</h2>
            <Card className="p-8 max-w-3xl mx-auto">
              <div className="flex mb-4">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
                <Star className="h-5 w-5 text-secondary" />
              </div>
              <p className="text-foreground mb-4 leading-relaxed text-lg">
                An entertaining and imaginative story. Fun to read with a gentle perspective on love and loss. 
                Billy is an orphan who yearns to be reunited with his parents. His guardian is a lion who is his 
                fierce protector despite the youngster's penchant for mischief. The tale maps their growing 
                relationship and offers a little bit of a Narnia-like adventure for younger readers.
              </p>
              <p className="text-sm text-muted-foreground font-semibold">
                — Kindle Customer
              </p>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}