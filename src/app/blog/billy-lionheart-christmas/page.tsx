import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Billy Lionheart: The Lion Boy Who'll Steal Your Kids' Hearts This Christmas - Janice Wee",
  description: "Bring joy and wonder into your child's life this Christmas with The Adventures of Billy Lionheart series - three novels kids of all ages will love!",
  openGraph: {
    title: "Billy Lionheart: The Lion Boy Who'll Steal Your Kids' Hearts This Christmas",
    description: "Bring joy and wonder into your child's life this Christmas with The Adventures of Billy Lionheart series - three novels kids of all ages will love!",
    type: "article",
    publishedTime: "2025-12-06",
    authors: ["Janice Wee"],
  }
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
            
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Billy Lionheart: The Lion Boy Who'll Steal Your Kids' Hearts This Christmas (And Yours Too)
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-secondary" />
                <span>December 6, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-secondary" />
                <span>Janice Wee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/BillyLionheart-1765016057490.png?width=8000&height=8000&resize=contain"
                alt="Billy Lionheart book series featuring a young boy with black hair and bright blue eyes"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              <div className="text-foreground space-y-6 leading-relaxed">
                <p className="text-xl font-semibold text-primary">
                  Remember curling up to Narnia when you were a kid? Bring that joy and wonder into your child's life this Christmas with The Adventures of Billy Lionheart.
                </p>

                <p>
                  <Link href="/books/billy-lionheart-series" className="text-secondary hover:text-primary underline font-semibold transition-colors">
                    It's a series of 3 novels
                  </Link> that kids of all ages will love!
                </p>

                <div className="bg-card border border-border rounded-lg p-6 my-8">
                  <h2 className="text-2xl font-bold text-primary mb-4">The Adventures Await:</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-secondary mb-2">Billy The Lion Boy</h3>
                      <p className="mb-2">
                        Imagine learning to fly a plane when you are only seven. How about exploring a world with your lion guardian, living in a beautiful fantasy forest with talking animals while you frolic among lion cubs as the only human cub in your adoptive lion family.
                      </p>
                      <p>
                        Join Billy in his journey from orphan raised by lions to royalty as the only son of immortal parents.
                      </p>
                      <Button asChild className="mt-3">
                        <Link href="https://www.billylionheart.com/books/4" target="_blank" rel="noopener noreferrer">
                          Discover Billy The Lion Boy
                        </Link>
                      </Button>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-secondary mb-2">Billy & Bluma: Double Trouble</h3>
                      <p>
                        Experience wonder with Billy and Bluma as they sneak out of school to search for their aunt Mathilda, exploring the brave new world where they meet a mysterious new friend, who turns foe.
                      </p>
                      <Button asChild className="mt-3">
                        <Link href="https://www.billylionheart.com/books/5" target="_blank" rel="noopener noreferrer">
                          Read Billy & Bluma: Double Trouble
                        </Link>
                      </Button>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-secondary mb-2">Secret Hero & His Flying Lion</h3>
                      <p>
                        Returning with super strength, Billy's new power goes wild in this action-packed adventure!
                      </p>
                      <Button asChild className="mt-3">
                        <Link href="https://www.billylionheart.com/books/6" target="_blank" rel="noopener noreferrer">
                          Explore Secret Hero & His Flying Lion
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-6 my-8">
                  <h2 className="text-2xl font-bold text-primary mb-4">More Billy Lionheart Resources:</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="mb-2">
                        <strong className="text-secondary">Book Club Resources:</strong> Get fun-filled activities at the book club resources page!
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link href="http://www.billylionheart.com/book-club" target="_blank" rel="noopener noreferrer">
                          Visit Book Club
                        </Link>
                      </Button>
                    </div>

                    <div>
                      <p className="mb-2">
                        <strong className="text-secondary">Join the Community:</strong> Read, connect with fellow friends of Billy and discuss these books!
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link href="http://www.billylionheart.com" target="_blank" rel="noopener noreferrer">
                          Visit BillyLionheart.com
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12 pt-8 border-t border-border">
                  <p className="text-lg text-muted-foreground mb-6">
                    Give your children the gift of adventure, faith, and friendship this Christmas!
                  </p>
                  <Button asChild size="lg">
                    <Link href="/books/billy-lionheart-series">
                      Explore The Billy Lionheart Series
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
