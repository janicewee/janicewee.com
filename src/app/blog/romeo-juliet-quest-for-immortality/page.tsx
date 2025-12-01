import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, User, ArrowLeft, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "The Romeo and Juliet of The Quest for Immortality - Janice Wee",
  description: "Of all the lovebirds in the Emunah Chronicles novel: The Quest For Immortality, the most memorable pair to me is the tragic couple, Jayden and Ava. Their story is akin to Romeo and Juliet meets Titanic.",
}

export default function BlogPost() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-5xl font-bold text-primary mb-6 leading-tight">
              The Romeo and Juliet of The Quest for Immortality
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground mb-8 pb-6 border-b border-border">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-secondary" />
                <span>December 1, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-secondary" />
                <span>Janice Wee</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/jaydenavainlove-1764590221153.png?width=8000&height=8000&resize=contain"
              alt="Jayden and Ava - The tragic love story from The Quest for Immortality"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-foreground leading-relaxed mb-6">
              Of all the lovebirds in the Emunah Chronicles novel: <em>The Quest For Immortality</em>, the most memorable pair to me is the tragic couple, Jayden and Ava. Their story is akin to Romeo and Juliet meets Titanic. Although they are secondary characters, their love story spans several books.
            </p>

            <p className="text-foreground leading-relaxed mb-6">
              Jayden and Ava's romance is one of the most heart-wrenching elements of the Emunah Chronicles Universe. What makes their story so compelling is how it weaves through multiple books, allowing readers to witness the depth of their connection, the challenges they face, and ultimately, the sacrifices made for love.
            </p>

            <p className="text-foreground leading-relaxed mb-6">
              Like Shakespeare's star-crossed lovers, Jayden and Ava face insurmountable obstacles. Their love story unfolds against the backdrop of apocalyptic events, testing not just their devotion to each other, but their very survival. The parallels to Titanic become evident as their romance blooms in the face of impending catastrophe, with moments of pure joy shadowed by the knowledge that darkness is closing in.
            </p>

            <p className="text-foreground leading-relaxed mb-8">
              What sets their story apart is how it transcends the typical romance narrative. It's not just about two people falling in love—it's about faith, redemption, and the eternal question of what happens when love must face the ultimate test.
            </p>

            {/* Call to Action Card */}
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Discover More About Jayden & Ava</h2>
              <p className="text-foreground mb-6 leading-relaxed">
                Want to learn more about Jayden, Ava, and all the other fascinating characters in The Quest for Immortality? Explore their complete character profiles, discover which books they appear in, and uncover the intricate connections that make the Emunah Chronicles Universe so rich and compelling.
              </p>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/books/quest-for-immortality/characters">
                  <BookOpen className="mr-2 h-4 w-4" />
                  View All Characters
                </Link>
              </Button>
            </Card>

            <p className="text-foreground leading-relaxed mb-6">
              Their journey together is beautifully tragic, filled with moments that will stay with you long after you've finished reading. From their first meeting to their final moments together, every page of their story reminds us that true love is worth fighting for, even when the odds are impossible.
            </p>

            <p className="text-foreground leading-relaxed">
              If you're a fan of epic romances with depth, meaning, and emotional resonance, Jayden and Ava's story in The Quest for Immortality is one you won't want to miss.
            </p>
          </div>

          {/* Related Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">Related Reading</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Button asChild variant="outline" size="lg">
                <Link href="/books/quest-for-immortality">
                  <BookOpen className="mr-2 h-4 w-4" />
                  The Quest for Immortality
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/books/quest-for-immortality/characters">
                  <BookOpen className="mr-2 h-4 w-4" />
                  All Characters
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
