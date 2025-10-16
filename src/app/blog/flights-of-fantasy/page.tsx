import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Flights of Fantasy with Janice Wee",
  description: "Fantasy adventure books grounded in reality - Mary's Flight by Janice Wee",
}

export default function BlogPost() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-5xl font-bold text-primary mb-6 leading-tight">
              Flights of Fantasy with Janice Wee
            </h1>
            <h2 className="text-2xl text-secondary mb-6">Fantasy adventure books grounded in reality</h2>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground pb-6 border-b border-border/30">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>September 23, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Janice Wee</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <Link href="/books/emunah-book-8-marys-flight">
              <img
                src="https://www.janicewee.com/images/marysflight.jpeg"
                alt="Mary's Flight by Janice Wee"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            </Link>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <blockquote className="text-xl italic border-l-4 border-primary pl-6 my-8">
              Mary's Flight by <em>Janice Wee</em>
            </blockquote>

            <p className="lead text-xl mb-8">
              <strong>Mary flees from her birth home to her ancestral land. She falls in love with her gorgeous landlord. Then global chaos hits. A charismatic leader promises peace, but things are not what they seem.</strong>
            </p>

            <div className="my-12">
              <div className="aspect-video max-w-2xl mx-auto">
                <iframe 
                  src="https://www.youtube.com/embed/Gw-E2VA-TSE?si=lMPDR2CMJJ_j_Tgl" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>

            <p className="text-center my-12">
              <Link href="/books/emunah-book-8-marys-flight">
                <Button size="lg" className="text-lg">
                  <strong>Read it now!</strong>
                </Button>
              </Link>
            </p>

            <p>
              Hurry, don't miss out!
            </p>

            <p className="mt-12">
              If you want a fun lighthearted read, check out my latest series, <Link href="/books/billy-lionheart-series" className="text-primary hover:underline">The Adventures of Billy Lionheart.</Link>
            </p>

            <div className="my-12">
              <div className="aspect-video max-w-2xl mx-auto">
                <iframe 
                  src="https://www.youtube.com/embed/KXufmLKZva8?si=odfqjZBvgWZnPA65" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>

            <p>
              Curious what happens to Billy when he grows up?<br />
              Check out Janice Wee's latest novel <Link href="/books/dragon-unbound" className="text-primary hover:underline">Dragon Unbound.</Link>
            </p>

            <p>
              There's more.
            </p>

            <p className="text-center my-12">
              <Link href="/books">
                <Button size="lg" variant="secondary" className="text-lg">
                  Explore My Books
                </Button>
              </Link>
            </p>
          </div>

          {/* Back Button */}
          <div className="mt-16 pt-8 border-t border-border/30">
            <Button asChild variant="outline">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}