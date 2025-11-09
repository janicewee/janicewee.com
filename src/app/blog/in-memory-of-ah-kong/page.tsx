import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "In Memory of Ah Kong - Janice Wee",
  description: "When Daddy was alive, he told me many stories of his late Dad's youth. My grandfather, Ah Kong, was incredibly strong. His could do all the stunts performed by circus strongmen.",
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
              In Memory of Ah Kong
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-secondary" />
                <span>November 8, 2025</span>
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
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ahkong-1762693225545.jpg?width=8000&height=8000&resize=contain"
                alt="Vintage photograph of Ah Kong performing his signature strongman feat - lifting four bodybuilders in a reverse pushup"
                className="w-full h-auto"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-8">
                When Daddy was alive, he told me many stories of his late Dad&apos;s youth. My grandfather, Ah Kong, was incredibly strong. His could do all the stunts performed by circus strongmen. His signature feat was to lift 4 body builders off the ground in a reverse pushup as seen in the old photo I posted here. My fourth uncle kept Ah Kong&apos;s photograph. My cousin restored this one and shared it with the rest of the extended Wee family, in memory of our amazing patriarch.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">A Hero&apos;s Courage</h2>
              
              <p className="text-lg leading-relaxed mb-8">
                Ah Kong was a hero. He once swam out in the open sea, the distance between Katong and East Coast Park (the land between Katong all the way through Marine Parade is reclaimed from the sea) to save a stranger from drowning. That gave me the opening scene for my book <Link href="/books/singapores-runaway" className="text-secondary hover:underline font-semibold">Singapore&apos;s Runaway</Link>.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">The Runaway Boy</h2>
              
              <p className="text-lg leading-relaxed mb-8">
                After Ah Kong&apos;s mother passed away, his father remarried. When he brought Ah Kong&apos;s step mother home, Ah Kong was so upset, he ran away from their family home in Bukit Timah, to join the crew of a sailing ship.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                His stepmom was a good woman. She sent her brothers to search the islands around Singapore, to as far as the Philipines for him, hoping to bring him back. One of his brothers found him in Indonesia and persuaded Ah Kong to return back to Singapore with him. That was why our entire tribe was born in Singapore, not Indonesia.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">A Miraculous Escape</h2>
              
              <p className="text-lg leading-relaxed mb-8">
                Another story Dad often told me was how, during World War 2, Ah Kong would have died in the hands of the Japanese, if not for his miraculous escape. To preserve his story, I wrote the short ebook, <Link href="/books/escape" className="text-secondary hover:underline font-semibold">Escape</Link>. The Sook Ching massacre was a tragic chapter in Singapore&apos;s history.
              </p>

              <div className="bg-muted/50 border-l-4 border-secondary p-8 my-12 rounded-r-lg">
                <p className="text-lg italic leading-relaxed text-foreground/90">
                  Ah Kong&apos;s legacy of strength, courage, and resilience lives on through these stories. His incredible feats and heroic actions continue to inspire our family and readers of my books.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-12">
                <div className="text-center">
                  <Button asChild size="lg" className="w-full text-lg px-8 py-6">
                    <Link href="/books/singapores-runaway">
                      Read Singapore&apos;s Runaway
                    </Link>
                  </Button>
                </div>
                <div className="text-center">
                  <Button asChild size="lg" variant="outline" className="w-full text-lg px-8 py-6">
                    <Link href="/books/escape">
                      Read Escape
                    </Link>
                  </Button>
                </div>
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
