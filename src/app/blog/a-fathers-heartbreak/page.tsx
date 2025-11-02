import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "A Father's Heartbreak - Janice Wee",
  description: "When I wrote Dragon Unbound, Leia's story stuck in my mind, haunting me. It's too real, how one could be so busy chasing life's pursuits, even noble causes, that one neglects one's kids.",
}

export default function BlogPost() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" className="mb-8">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              A Father&apos;s Heartbreak
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-secondary" />
                <span>November 1, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-secondary" />
                <span>Janice Wee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured Image - Placeholder for attached image */}
            <div className="mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dragonunboundcurtain-1762090791130.jpg?width=8000&height=8000&resize=contain"
                alt="Dragon Unbound book cover by Janice Wee featuring ethereal forest scene with glowing lights and the Emunah Chronicles Universe Finale subtitle"
                className="w-full h-auto"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-8">
                When I wrote <Link href="/books/dragon-unbound" className="text-secondary hover:underline font-semibold">Dragon Unbound</Link>, Leia&apos;s story stuck in my mind, haunting me. It&apos;s too real, how one could be so busy chasing life&apos;s pursuits, even noble causes, that one neglects one&apos;s kids.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Misunderstandings can lead to bitterness, which can be exploited by wolves in sheep&apos;s clothing.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                This is Leia&apos;s story in <Link href="/books/dragon-unbound" className="text-secondary hover:underline font-semibold">Dragon Unbound</Link>.
              </p>

              <p className="text-lg leading-relaxed mb-12">
                Here&apos;s the book trailer I made to portray a key scene from <Link href="/books/dragon-unbound" className="text-secondary hover:underline font-semibold">Dragon Unbound</Link>, one that still haunts me.
              </p>

              {/* YouTube Video Embed */}
              <div className="my-12 rounded-lg overflow-hidden shadow-2xl">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/3qYv8rvklaE?si=G6M0NxdgcvAv7g3S"
                    title="A Father's Heartbreak - Dragon Unbound Book Trailer"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="text-center my-12">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="/books/dragon-unbound">
                    Learn More About Dragon Unbound
                  </Link>
                </Button>
              </div>
            </div>

            {/* Back to Blog Button */}
            <div className="mt-16 pt-8 border-t border-border">
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to All Posts
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}