import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Dragon Unbound: New Book Trailer Unveiled - Janice Wee",
  description: "Watch the new trailer for Dragon Unbound. After a thousand years of paradise on earth, Dragon is released, driving a wedge between Billy and his family.",
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
              Dragon Unbound: New Book Trailer Unveiled
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-secondary" />
                <span>October 15, 2025</span>
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
            {/* Featured Image */}
            <div className="mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/dragonunboundwhite-1760676617965.jpg"
                alt="Dragon Unbound by Janice Wee"
                className="w-full h-auto"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary mb-6">Fantasy Novels with Faith and Family themes</h2>
              
              <blockquote className="border-l-4 border-secondary pl-6 italic text-xl mb-8">
                Dragon Unbound. <em>By Janice Wee</em>
              </blockquote>

              <p className="text-lg leading-relaxed mb-8">
                I just created a new trailer for my latest book, <strong>Dragon Unbound</strong>.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                After a thousand years of paradise on earth, Dragon is released, driving a wedge between Billy and his family.
              </p>

              {/* YouTube Video Embed */}
              <div className="my-12 rounded-lg overflow-hidden shadow-2xl">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/--zUPERLPfY?si=_XcIfvfF9h5qbufn"
                    title="Dragon Unbound Book Trailer"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mt-12 mb-6">About Dragon Unbound</h3>
              
              <p className="text-lg leading-relaxed mb-6">
                In a realm where mortals live under the divine rule of the King of Kings, best friends turned lovers Billy, gifted with divine strength, and Bluma face a world fracturing under Dragon, the Great Deceiver's lies.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                As Dragon recruits fallen man to his cause, sparking betrayal among families—sons and daughters against parents—alliances shatter, and loyalties are tested.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Who will stand? Who will fall?
              </p>

              <h3 className="text-2xl font-bold text-primary mt-12 mb-6">More from Janice Wee</h3>

              <p className="text-lg leading-relaxed mb-6">
                Do you have overripe bananas to rescue? Turn them into scones. Here's the{' '}
                <Link href="/recipes" className="text-secondary hover:underline">
                  Banana scone recipe
                </Link>{' '}
                I developed. The scones are moist, with a hint of banana, enough chocolate for a scone, and yummy!
              </p>

              <p className="text-lg leading-relaxed mb-6">
                In my humble opinion,{' '}
                <Link href="/recipes" className="text-secondary hover:underline">
                  scones
                </Link>{' '}
                go perfectly with tea and a good read. I love books and have loads of stories to tell.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                I ended up writing books which I enjoy reading time and again. If you like stories with unexpected twists, a good laugh or a good cry, or something thought provoking that sticks in your mind long after you've read it, you'll love my{' '}
                <Link href="/books" className="text-secondary hover:underline font-bold">
                  books
                </Link>.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-12 mb-6">The Adventures of Billy Lionheart</h3>

              <p className="text-lg leading-relaxed mb-8">
                For fun lighthearted read, check out my latest series,{' '}
                <Link href="/books/billy-lionheart-series" className="text-secondary hover:underline">
                  The Adventures of Billy Lionheart.
                </Link>
              </p>

              {/* Billy Lionheart Video Embed */}
              <div className="my-12 rounded-lg overflow-hidden shadow-2xl">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/1eAlI2Vnbqg?si=N5vBASAAp4AXuxYn"
                    title="The Adventures of Billy Lionheart"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-8">
                Curious what happens to Billy when he grows up? Check out Janice Wee's latest novel{' '}
                <Link href="/books/dragon-unbound" className="text-secondary hover:underline">
                  Dragon Unbound.
                </Link>
              </p>

              <p className="text-lg leading-relaxed mb-8">
                There's more.
              </p>

              <div className="text-center my-12">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="/books">
                    Explore My Books
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