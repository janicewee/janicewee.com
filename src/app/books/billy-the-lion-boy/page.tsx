import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Billy The Lion Boy - Janice Wee",
  description: "An orphan adventure with a lion guardian. A heartwarming tale of courage and faith.",
}

export default function BillyTheLionBoyPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Book Header */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billylionheart-1760074636207.jpg"
                  alt="Billy The Lion Boy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-primary mb-4">Billy The Lion Boy</h1>
              <p className="text-xl text-foreground mb-6 leading-relaxed">
                An orphan adventure with a lion guardian. Young Billy discovers his extraordinary destiny 
                when he befriends a mystical lion who protects him through perilous journeys and magical 
                encounters. This heartwarming tale explores themes of courage, family bonds, and divine 
                protection through the eyes of a brave young boy.
              </p>

              <div className="space-y-3">
                <Button asChild size="lg" className="w-full md:w-auto">
                  <a href="https://books2read.com/ap/8G2gQM/Janice-Wee" target="_blank" rel="noopener noreferrer">
                    Buy on Books2Read
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full md:w-auto md:ml-3">
                  <a href="https://www.barnesandnoble.com" target="_blank" rel="noopener noreferrer">
                    Buy on Barnes & Noble
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Video Trailer */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Book Trailer</h2>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/rjkZTe1RwhE"
                title="Billy The Lion Boy Book Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          </section>

          {/* Reader Reviews */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Reader Reviews</h2>
            <Card className="p-6">
              <div className="flex mb-4">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
                <Star className="h-5 w-5 text-secondary" />
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
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