import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Cosy Mysteries: Lighthearted Reads with Unexpected Twists - Janice Wee",
  description: "Discover cosy mystery books including Secret Hero & His Flying Lion and Two Worlds",
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
              Cosy Mysteries
            </h1>
            <h2 className="text-2xl text-secondary mb-6">Lighthearted reads with unexpected twists.</h2>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground pb-6 border-b border-border/30">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>September 1, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Janice Wee</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <Link href="https://www.janicewee.com/Emunah/billy3.html">
              <img
                src="https://www.janicewee.com/images/billy3outdoor.jpg"
                alt="Secret Hero & His Flying Lion by Janice Wee"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            </Link>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <blockquote className="text-xl italic border-l-4 border-primary pl-6 my-8">
              Secret Hero & His Flying Lion by <em>Janice Wee</em>
            </blockquote>

            <p className="lead text-xl mb-8">
              Looking for a good cosy mystery?<br />
              I've got two for you.
            </p>

            <p>
              If you love historical romances, I recommend <Link href="https://www.janicewee.com/book2e2.html" className="text-primary hover:underline">Two Worlds</Link>. Fugitive Stanley falls in love with Daddy's girl, a beautiful islander, Eve. Men in Eve's village drop dead unexpectedly around the star-crossed lovers. Natives blame the village ghost. But when Stanley finds the corpse of his friend, he realises there's something more to this.
            </p>

            <p>
              If you like high school tales with crushes, superpowers and talking animals, you'd love <Link href="https://www.janicewee.com/Emunah/billy3.html" className="text-primary hover:underline">Secret Hero & His Flying Lion</Link>.<br />
              Billy has known Bluma since they were babies. But when they meet in St Lydia's Academy, something's changed. This story takes place after Billy & Bluma. Double Trouble. Billy returns from his adventure with super strength which he loses control of, now and then.
            </p>

            <div className="my-12">
              <div className="aspect-video max-w-2xl mx-auto">
                <iframe 
                  src="https://www.youtube.com/embed/reZdAGNZs9I?si=3gpICZb8ujMbQbnS" 
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
              <Link href="https://www.janicewee.com/Emunah/billy3.html">
                <Button size="lg" className="text-lg">
                  Get Secret Hero & His Flying Lion
                </Button>
              </Link>
            </p>

            <p>
              Besides stories set in the <Link href="https://www.janicewee.com/blog/EmunahChronicles.html" className="text-primary hover:underline">Emunah Chronicles Universe</Link>, I've written Historical Romance, Adventure Stories, Animal stories and stories of Kids Pranks (inspired by the mischief my cousins and I got up to during our childhood. The common thread in my fiction is that these stories could have happened. It's realistic fiction, and at times, real life memories repackaged as fiction, with all names changed to protect the identities of everyone involved.
            </p>

            <p>
              Curious?<br />
              Read the books!<br />
              You can ask your local library for the books or buy them here.
            </p>

            <p>
              The ebook versions of them are available for free. My main novel, The Quest for Immortality is available in PDF format free of charge right <Link href="https://www.janicewee.com/books/the-quest-for-immortality-full.pdf" className="text-primary hover:underline">here</Link>.
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