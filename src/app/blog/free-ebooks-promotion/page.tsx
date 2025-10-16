import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Free Ebooks: Current Promotions - Janice Wee",
  description: "Grab The Quest for Immortality and other free ebooks from Janice Wee",
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
              Free Ebooks
            </h1>
            <h2 className="text-2xl text-secondary mb-6">Janice Wee's Current Free Book Promotions</h2>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground pb-6 border-b border-border/30">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>September 19, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Janice Wee</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <blockquote className="text-xl italic border-l-4 border-primary pl-6 my-8">
              The Quest For Immortality by <em>Janice Wee</em>
            </blockquote>

            {/* Featured Image */}
            <div className="mb-12">
              <Link href="/books/the-quest-for-immortality.pdf">
                <img
                  src="https://www.janicewee.com/images/TQFI.jpeg"
                  alt="The Quest For Immortality by Janice Wee"
                  className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                />
              </Link>
            </div>

            <p className="lead text-xl mb-8">
              <strong>Craving an Epic Adventure? Grab The Quest for Immortality FREE Now!</strong><br />
              Looking for a thrilling read at zero cost? My must-read Emunah Chronicles novel, The Quest for Immortality, is yours FREE in PDF format—normally $9.99 on online stores! 
              This limited-time offer is my thank-you to you for your amazing support. Dive into a world of mystery and eternal quests before this exclusive giveaway ends without any prior warning!
            </p>

            <p className="text-center my-12">
              <Link href="https://www.janicewee.com/books/the-quest-for-immortality-full.pdf">
                <Button size="lg" className="text-lg">
                  Get the Free Ebook, the complete PDF version of The Quest For Immortality
                </Button>
              </Link>
            </p>

            <div className="my-16">
              <img
                src="https://www.janicewee.com/Emunah/images/book1.jpg"
                alt="Emunah Book 1: Disturbing Dreams"
                className="w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
            </div>

            <p>
              Have you ever woken up, terrified after a nightmare that was so real, you wonder whether it really happened?
            </p>

            <p>
              Disturbing Dreams, By Janice Wee is eerily fascinating and could happen in our lifetime.<br />
              The ebook is FREE right now. Get it before the promo suddenly ends.
            </p>

            <p className="text-center my-12">
              <Link href="https://www.janicewee.com/Emunah/book1.html">
                <Button size="lg" variant="secondary" className="text-lg">
                  Get the ebook Emunah Book 1: Disturbing Dreams, while it is FREE!
                </Button>
              </Link>
            </p>

            <div className="my-16">
              <img
                src="https://www.janicewee.com/Emunah/images/book8mary.jpg"
                alt="Emunah Short Stories Book 8: Mary's Flight"
                className="w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
            </div>

            <p>
              The grand finale of the Emunah Short Stories which can be read as a stand alone novel, Mary's Flight is a gripping adventure, sweet romance and supernatural thriller, rolled in one.
            </p>

            <p>
              Regular price for the ebook is $7, but right now, you can get it for free on Smashwords if you enter the coupon code <strong>Q8CEL</strong> when you check out. Hurry! Promo ends 27 September 2025.
            </p>

            <p className="text-center my-12">
              <Link href="https://www.smashwords.com/books/view/1674021">
                <Button size="lg" variant="secondary" className="text-lg">
                  Download Mary's Flight on Smashwords now!
                </Button>
              </Link>
            </p>

            <p className="mt-12">
              If you want a fun lighthearted read, check out my latest series, <Link href="https://www.janicewee.com/billyseries.html" className="text-primary hover:underline">The Adventures of Billy Lionheart.</Link>
            </p>

            <div className="my-12">
              <div className="aspect-video max-w-2xl mx-auto">
                <iframe 
                  src="https://www.youtube.com/embed/1tr8mrQuQf8?si=pW-e_VcCSfrj4Hw_" 
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
              Check out Janice Wee's latest novel <Link href="https://www.janicewee.com/Emunah/dragonunbound.html" className="text-primary hover:underline">Dragon Unbound.</Link>
            </p>

            <p>
              There's more.
            </p>

            <p className="text-center my-12">
              <Link href="/books">
                <Button size="lg" className="text-lg">
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