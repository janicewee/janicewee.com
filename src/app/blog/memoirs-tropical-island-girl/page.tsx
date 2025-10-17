import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Memoirs of a Tropical Island Girl - Janice Wee",
  description: "My Private Memories - Little Nonya Series by Janice Wee",
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
              Memoirs of a Tropical Island Girl
            </h1>
            <h2 className="text-2xl text-secondary mb-6">My Private Memories</h2>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground pb-6 border-b border-border/30">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>October 1, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Janice Wee</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <Link href="/books/little-nonyas-escapades">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/nonya-escapades-1760677006633.jpg"
                alt="Little Nonya Escapades by Janice Wee"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            </Link>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl mb-8">
              <strong>Numbers switch places and letters confuse Tammy when she's tired. She's probably dyslexic.</strong><br />
              Who knows? She was never diagnosed.<br />
              No one ever suspected.<br />
              Who could ever guess that the girl who topped the entire cohort year after year might have a learning disability!
            </p>

            <div className="my-12">
              <div className="aspect-video max-w-2xl mx-auto">
                <iframe 
                  src="https://www.youtube.com/embed/GMnr_uOlUYM?si=9s6P4iNsDZ5sSrxV" 
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
              When I first wrote <Link href="/books/little-nonyas-escapades" className="text-primary hover:underline">Little Nonya Escapades</Link>, I intended to write a fictional story, using my own childhood memories as an initial draft.
            </p>

            <p>
              I had an amazing childhood. Dad and Mum were both schoolteachers who spent a lot of quality time with me. When my parents were working, grandpa doted on me.
            </p>

            <p>
              When it was time to go to primary school, they enrolled me in Daddy's school. Every day for those 6 years, when I was in the car with Daddy, he was Daddy. When I got out of the car and was in school grounds, he was Mr Wee. I was proud of my "professionalism" back then. I never knew until decades later, after he had passed on, that it hurt him. The other teachers' kids called their parents "Daddy" or "Mummy" if they happened to meet. I was the only one who greeted my dad like any student would greet a teacher, with that respectful nod and impersonal greeting.
            </p>

            <p>
              As I wrote, I poured my memories of those six years into my manuscript. I could remember every detail as clearly as if it had happened yesterday. I shared the first draft, my raw memories with my sister, for feedback. I had changed all the names except Daddy's and Teacher Elizabeth. That was my first step in "fictionalising" my story.
            </p>

            <p>
              She advised me to keep it as is. Let it be my autobiography.
            </p>

            <p>
              I'm fifty-six now. All this happened almost fifty years ago. Some of these events were so outlandish, readers would assume these to be figments of my imagination, so I didn't bother to turn any of it into fiction. No one would know the difference anyway.... Unless they happened to be there all those decades ago. I changed the names of everyone in the story to protect all identities.
            </p>

            <p>
              I don't think that really worked. Mum read it and in spite of the name changes, she knew every character. She even pointed out that I had forgotten to include Uncle Lye Hoe in one of the scenes. Oops.
            </p>

            <p>
              I didn't change Teacher Elizabeth's name because for so many decades, I wondered what happened to her. After that scene I described in my book, she disappeared. I never saw her again. I hoped that somehow somewhere, she might pick up my book and read it, and know what I never had a chance to tell her.
            </p>

            <p>
              After I published <Link href="/books/little-nonyas-escapades" className="text-primary hover:underline"><strong>Little Nonya Escapades</strong></Link>, I asked my mother about her. Teacher Elizabeth disappeared because she had joined OMF and had become a missionary in India. She had just retired and was finally back in Singapore after all these decades. I got her number from my mother.
            </p>

            <p>
              Teacher Elizabeth never answers calls from numbers she did not recognise, but when I called her, for some unknown reason, she answered my call. We met for lunch with my mum, and have been meeting up every once in a while. The best news?
            </p>

            <p>
              She's my Godma now. 😍
            </p>

            <p className="text-center my-12">
              <Link href="/books/little-nonyas-escapades">
                <Button size="lg" className="text-lg">
                  Read Little Nonya Escapades now!
                </Button>
              </Link>
            </p>

            <p>
              If you want more fiction mixed with memories, check out my collection of short stories, <Link href="/books/naughty-little-nonya" className="text-primary hover:underline">Naughty Little Nonya</Link>. Some of these are true, some are figments of my imagination.
            </p>

            <p>
              Which really happened?<br />
              Ask my mom.<br />
              If her blood pressure shoots up, yeah, that story actually happened.
            </p>

            <p className="mt-12">
              If you want a fun lighthearted read, check out my latest series, <Link href="/books/billy-lionheart-series" className="text-primary hover:underline">The Adventures of Billy Lionheart.</Link>
            </p>

            <div className="my-12">
              <div className="aspect-video max-w-2xl mx-auto">
                <iframe 
                  src="https://www.youtube.com/embed/1eAlI2Vnbqg?si=N5vBASAAp4AXuxYn" 
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