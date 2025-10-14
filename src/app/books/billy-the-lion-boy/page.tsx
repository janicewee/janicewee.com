import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Billy The Lion Boy - Janice Wee",
  description: "The Adventures of Billy Lionheart Book 1 - An orphan adventure with a lion guardian exploring themes of courage and divine protection.",
}

export default function BillyTheLionBoyPage() {
  const bookData = {
    title: "Billy The Lion Boy",
    subtitle: "The Adventures of Billy Lionheart",
    author: "Janice Wee",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billylionheart-1760404534476.jpg",
  }

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
                  src={bookData.image}
                  alt={bookData.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-primary mb-2">{bookData.title}</h1>
              <p className="text-lg text-muted-foreground mb-4">{bookData.subtitle} - Book 1</p>
              <p className="text-xl text-foreground mb-6 leading-relaxed">
                Billy is an orphan who yearns to be reunited with his parents. His guardian is a lion 
                who is his fierce protector despite the youngster's penchant for mischief. Follow their 
                adventures in this heartwarming tale of courage, faith, and divine protection.
              </p>

              <div className="space-y-3">
                <Button asChild size="lg" className="w-full md:w-auto">
                  <a href="https://books2read.com/u/mdxKd5" target="_blank" rel="noopener noreferrer">
                    Buy on Books2Read
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full md:w-auto md:ml-3">
                  <a href="https://www.barnesandnoble.com/s/billy%20the%20lion%20boy%20janice%20wee" target="_blank" rel="noopener noreferrer">
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

          {/* Book Description */}
          <section className="mb-12">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">About This Book</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed mb-4">
                  Young Billy is an orphan living during the Millennial Reign of Christ. Though he 
                  enjoys a life of peace and plenty, his heart aches for the parents he never knew. 
                  His constant companion and protector is Leonard Lion, a majestic creature assigned 
                  to watch over the spirited boy.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  Despite Leonard's best efforts, Billy's curiosity and adventurous nature often lead 
                  him into mischief. From sneaking away to explore forbidden places to asking difficult 
                  questions about his parents' fate, Billy tests the patience of his faithful guardian 
                  at every turn.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  As Billy grows, he begins to understand the deeper truths about faith, loss, and 
                  God's perfect plan. Through magical encounters and dangerous adventures, the bond 
                  between boy and lion strengthens, teaching valuable lessons about courage, trust, 
                  and the power of divine protection.
                </p>
                <p className="text-foreground leading-relaxed">
                  Perfect for middle-grade readers and fans of Christian fantasy, <em>Billy The Lion Boy</em> 
                  offers a Narnia-like adventure filled with wonder, wisdom, and the enduring hope found 
                  in God's love.
                </p>
              </div>
            </Card>
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
                "An entertaining and imaginative story. Fun to read with a gentle perspective on love and loss. 
                Billy is an orphan who yearns to be reunited with his parents. His guardian is a lion who is his 
                fierce protector despite the youngster's penchant for mischief. The tale maps their growing 
                relationship and offers a little bit of a Narnia-like adventure for younger readers."
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