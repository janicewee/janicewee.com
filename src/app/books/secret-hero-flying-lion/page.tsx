import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Secret Hero & His Flying Lion - Janice Wee",
  description: "The Adventures of Billy Lionheart Book 3 - Billy discovers superpowers and faces his greatest challenges yet at St Lydia's Academy.",
}

export default function SecretHeroPage() {
  const bookData = {
    title: "Secret Hero & His Flying Lion",
    subtitle: "The Adventures of Billy Lionheart",
    author: "Janice Wee",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billyhero-1760404535888.jpg",
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
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billyhero-1760404535888.jpg"
                  alt="Secret Hero & His Flying Lion"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-primary mb-2">Secret Hero & His Flying Lion</h1>
              <p className="text-lg text-muted-foreground mb-4">The Adventures of Billy Lionheart - Book 3</p>
              <p className="text-xl text-foreground mb-6 leading-relaxed">
                Billy's super strength goes wild at St Lydia's Academy, while Leonard Lion receives flying 
                gloves he can't control. When someone poisons Leonard and tries to kill Billy and friends, 
                can they stop the killer before it's too late?
              </p>

              <div className="space-y-3">
                <Button asChild size="lg" className="w-full md:w-auto">
                  <a href="https://books2read.com/u/bpgDOX" target="_blank" rel="noopener noreferrer">
                    Buy on Books2Read
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full md:w-auto md:ml-3">
                  <a href="https://www.barnesandnoble.com/s/secret%20hero%20flying%20lion%20janice%20wee" target="_blank" rel="noopener noreferrer">
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
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/reZdAGNZs9I"
                title="Book Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </section>

          {/* Book Description */}
          <section className="mb-12">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">About This Book</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed mb-4">
                  Billy Lionheart received super strength in his previous adventure, but now it's becoming 
                  a problem. As he and Bluma return to St Lydia's Academy for a new school term, Billy's 
                  strength goes haywire at the worst possible moments. Billy's losing control, and his secret 
                  is in danger of being exposed.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  Meanwhile, Leonard Lion receives a technology upgrade from Immortal King Jayden: flying 
                  gloves that should allow him to soar through the skies. There's just one problem—Leonard 
                  can't figure out how to use them! His attempts at flight result in comedic crashes and 
                  near-disasters that leave everyone on edge.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  But the laughter stops when the students embark on a school trip and someone poisons 
                  Leonard Lion. As the faithful guardian fights for his life, Billy and his friends realize 
                  they're being hunted. Someone wants them dead, and they're not going to stop until they 
                  succeed.
                </p>
                <p className="text-foreground leading-relaxed">
                  Racing against time, Billy must learn to control his powers, master Leonard's flying 
                  gloves, and unmask the killer before tragedy strikes. With danger lurking around every 
                  corner and his friends' lives at stake, Billy discovers what it truly means to be a hero. 
                  <em>Secret Hero & His Flying Lion</em> delivers thrilling action, mystery, and powerful 
                  lessons about courage, friendship, and trusting in God's strength when our own fails.
                </p>
              </div>
            </Card>
          </section>

          {/* Cozy Mystery Notice */}
          <section className="mb-12">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-3">A Cozy Mystery Adventure</h3>
              <p className="text-foreground leading-relaxed">
                If you love high school tales with crushes, superpowers, and talking animals, you'll love 
                this lighthearted read with unexpected twists. Billy has known Bluma since they were babies, 
                but when they meet at St Lydia's Academy, something's changed. This story takes place after 
                Billy & Bluma: Double Trouble, continuing their adventures with new challenges, new friends, 
                and a mystery that will keep you guessing until the very end.
              </p>
            </Card>
          </section>

          {/* Series Navigation */}
          <section>
            <Card className="p-6 bg-muted/30">
              <h3 className="text-2xl font-bold text-primary mb-4">Part of The Adventures of Billy Lionheart Series</h3>
              <p className="text-foreground mb-4">
                Continue Billy's journey through the complete series:
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline">
                  <a href="/books/billy-the-lion-boy">Book 1: Billy The Lion Boy</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="/books/billy-bluma-double-trouble">Book 2: Billy & Bluma: Double Trouble</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="/books/billy-lionheart-series">View Complete Series</a>
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}