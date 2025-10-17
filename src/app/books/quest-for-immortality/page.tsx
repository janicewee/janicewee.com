import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "The Quest For Immortality - Janice Wee",
  description: "Emunah Chronicles Novel - A dystopian to utopian prophecy tale exploring God's ultimate plan for redemption.",
}

export default function QuestForImmortalityPage() {
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
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book3k-1760074872135.jpg"
                  alt="The Quest For Immortality"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-primary mb-2">The Quest For Immortality</h1>
              <p className="text-lg text-muted-foreground mb-4">Emunah Chronicles Novel</p>
              <p className="text-xl text-foreground mb-6 leading-relaxed">
                A dystopian to utopian prophecy tale. In a world where death seems to reign supreme, 
                one family's faith leads them on a quest that spans from the darkest tribulation to 
                the brightest hope of eternity. This powerful narrative explores God's ultimate plan 
                for redemption.
              </p>

              <div className="space-y-3">
                <Button asChild size="lg" className="w-full md:w-auto">
                  <a href="https://books2read.com/u/boXak1" target="_blank" rel="noopener noreferrer">
                    Buy on Books2Read
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full md:w-auto md:ml-3">
                  <a href="https://www.barnesandnoble.com/s/quest%20for%20immortality%20janice%20wee" target="_blank" rel="noopener noreferrer">
                    Buy on Barnes & Noble
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg" className="w-full md:w-auto md:ml-3">
                  <a href="https://www.janicewee.com/books/the-quest-for-immortality-full.pdf" target="_blank" rel="noopener noreferrer">
                    Download Free PDF
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
                src="https://www.youtube.com/embed/WWMFpSRllzQ"
                title="The Quest For Immortality Book Trailer"
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
                  <em>The Quest for Immortality</em> is an epic journey through the end times and beyond, 
                  following characters as they navigate the seven-year tribulation period prophesied in 
                  the Bible. This compelling narrative weaves together personal stories of faith, loss, 
                  and redemption against the backdrop of global upheaval and spiritual warfare.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  As the world descends into chaos, families are torn apart and individuals must make 
                  impossible choices. Some choose to stand firm in their faith despite persecution and 
                  death, while others are deceived by the promises of a false messiah. Through it all, 
                  God's plan unfolds with perfect precision, leading to the ultimate triumph of good 
                  over evil.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  The story doesn't end with tribulation—it continues into the Millennial Kingdom, where 
                  Christ reigns on earth and humanity experiences a taste of paradise. But even in this 
                  perfect setting, the human heart still struggles with faith and obedience. The quest 
                  for true immortality becomes a quest to understand God's love and accept His gift of 
                  eternal life.
                </p>
                <p className="text-foreground leading-relaxed">
                  <em>The Quest for Immortality</em> is more than a prophecy novel—it's a profound 
                  exploration of what it means to live by faith in the darkest times and brightest days. 
                  Through vivid characters and biblically-grounded storytelling, this book offers readers 
                  both a warning and a hope: that no matter how dark the world becomes, God's light will 
                  ultimately prevail.
                </p>
              </div>
            </Card>
          </section>

          {/* Emunah Chronicles Timeline Link */}
          <section className="mb-12">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
              <h2 className="text-3xl font-bold text-primary mb-4">Explore the Full Timeline</h2>
              <p className="text-foreground leading-relaxed mb-6">
                Discover how <em>The Quest for Immortality</em> fits into the complete Emunah Chronicles saga. 
                Follow the journey from before the Rapture through the Tribulation to the Millennial Kingdom.
              </p>
              <Button asChild size="lg">
                <a href="/emunah-timeline">
                  View Emunah Chronicles Timeline
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Card>
          </section>

          {/* Reader Reviews */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Reader Reviews</h2>
            <Card className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
                "Fiction or Reality? Is this the future? A must read. The author is creative & insightful in 
                weaving a story that grips you to the very end."
              </p>
              <p className="text-sm text-muted-foreground font-semibold">
                — Yvonne Sequerah
              </p>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}