import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Dragon Unbound - Janice Wee",
  description: "A Christian Epic Fantasy Novel - The first book in the Emunah Chronicles. Experience a saga of family, sacrifice, and an ancient evil.",
}

export default function DragonUnboundPage() {
  const bookData = {
    title: "Dragon Unbound",
    subtitle: "Emunah Chronicles Universe Finale",
    author: "Janice Wee",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/dragonunbound-1760404534966.jpg",
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
              <h1 className="text-4xl font-bold text-primary mb-4">{bookData.title}</h1>
              <p className="text-xl text-foreground mb-6 leading-relaxed">
                After a thousand years, the prophecy comes true. Dragon is released from his prison. 
                With his band of fallen angels, he gathers the nations around the globe to wage war 
                against the saints in the Holy City. The epic finale to the Emunah Chronicles.
              </p>

              <div className="space-y-3">
                <Button asChild size="lg" className="w-full md:w-auto">
                  <a href="https://books2read.com/u/4NJ9p9" target="_blank" rel="noopener noreferrer">
                    Buy on Books2Read
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full md:w-auto md:ml-3">
                  <a href="https://www.barnesandnoble.com/s/dragon%20unbound%20janice%20wee" target="_blank" rel="noopener noreferrer">
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
                src="https://www.youtube.com/embed/--zUPERLPfY"
                title="Dragon Unbound Book Trailer"
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
                  Billy Lionheart was a little orphan boy who became the patriarch of a new nation. 
                  Bluma was his childhood sweetheart who became the matriarch. Together, they navigated 
                  a millennium of trials and tribulations, raising children, teaching grandchildren, 
                  and watching their family multiply into a mighty nation.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  Throughout the thousand years of peace, spiritual attacks came in many forms. The 
                  enemy worked tirelessly to deceive Billy and Bluma's descendants, turning family 
                  members against one another, sowing seeds of doubt and rebellion.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  When Dragon is finally released from his prison, he gathers the nations for one 
                  final battle against the saints in the Holy City. This epic conclusion to the 
                  Emunah Chronicles explores themes of faith, family, perseverance, and God's 
                  ultimate victory over evil.
                </p>
                <p className="text-foreground leading-relaxed">
                  Set during the Millennial Kingdom, <em>Dragon Unbound</em> offers a unique 
                  perspective on biblical prophecy through the eyes of ordinary people living 
                  extraordinary lives of faith.
                </p>
              </div>
            </Card>
          </section>

          {/* Emunah Chronicles Timeline Link */}
          <section className="mb-12">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
              <h2 className="text-3xl font-bold text-primary mb-4">Explore the Full Timeline</h2>
              <p className="text-foreground leading-relaxed mb-6">
                <em>Dragon Unbound</em> is the epic finale to the Emunah Chronicles. Discover how the entire 
                saga unfolds from the Pre-Tribulation Rapture through the Millennial Kingdom to this climactic conclusion.
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
                "A must-read for fans of Christian speculative fiction, Janice Wee's Dragon Unbound plunges readers into a vibrant narrative set during the Millennial Kingdom, where biblical prophecy unfolds amidst the everyday lives of mortals and immortals alike. The story spans a thousand years, centering on the captivating journey of Billy Lionheart and Bluma, from childhood friends to patriarch and matriarch of a new nation. Their lives are intertwined with significant spiritual events, including the long-awaited release of Dragon (Satan) from his thousand-year prison, leading to widespread deception and spiritual warfare. Janice effectively portrays the challenges of faith and family in this post-Tribulation world, as characters grapple with spiritual attacks, personal struggles, and the consequences of deception, even within their own households. The inclusion of direct biblical passages and theological explanations enriches the narrative, offering clear spiritual insights that resonate deeply with Christian readers. While covering mature themes, the writing style is straightforward and accessible, ensuring that the complex overarching narrative remains easy to follow. This direct approach allows the story's powerful messages of God's sovereignty, redemption, and ultimate triumph over evil to shine through. The author, being a Straits Born Chinese from Singapore, brings a unique perspective to this epic tale, making it a compelling read. If you're looking for an allegorical story that blends action, family drama, and profound spiritual themes, Dragon Unbound will not disappoint. It's a journey of faith, perseverance, and the unwavering love of God in the face of ultimate evil."
              </p>
              <p className="text-sm text-muted-foreground font-semibold">
                — Ting Chin
              </p>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}