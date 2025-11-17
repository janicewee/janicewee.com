import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Guillemard East Primary School - Janice Wee",
  description: "Memories of Guillemard East Primary School, which closed in 1987, and its connection to Little Nonya's Escapades.",
}

export default function GuillemardEastPrimarySchoolPost() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            
            <h1 className="text-5xl font-bold text-primary mb-6">
              Guillemard East Primary School
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>November 16, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Janice Wee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/geps-1763381011250.jpg?width=8000&height=8000&resize=contain"
                alt="Guillemard East Primary School memorabilia showing school crest and student name Janice Wee"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-8 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="text-foreground space-y-6 text-lg leading-relaxed">
                <p>
                  Guillemard East Primary School was located behind Singapore Badminton Hall. Sadly, it closed in 1987 due to low enrollment.
                </p>

                <p>
                  Memories of the old school are kept alive through the Facebook group <em>Guillemard East Primary School</em>.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Cherished Memories</h2>

                <p>
                  That school held fond childhood memories for me. It's also where my father worked as a teacher. He'd drop me off then head for his duties while I go for class. After school, we meet and I'd follow him around. He took care of the library and coached the Badminton team after school. We'd have lunch nearby. I vaguely remember enjoying the chicken rice in a coffee shop nearby.
                </p>

                <p>
                  The school tuckshop had tasty food we can get for recess. I loved the mee there.
                </p>

                <p>
                  It might be my imagination but the snacks from the snack shop were a lot tastier than the same snacks today. Jack and Jill potato chips, crispy noodle snacks and so much more were a huge treat then. They don't taste as good these days.
                </p>

                <p>
                  I also remember cars parked under sprawling trees near the outdoor assembly area.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-12 mb-6">The Teachers Who Cared</h2>

                <p>
                  We had amazing teachers there who cared for their students. It was a safe place for everyone then. The teachers and kindly principal Mr. Leong saw to it.
                </p>

                <p>
                  I last met our teachers at my dad's funeral wake a decade ago. They showed up to send my dad off, joking that they only met at funerals of former colleagues, wondering whose would be next. They were as warm, welcoming and jovial as ever. The close knit group of our old teachers were family.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-12 mb-6">The School Song</h2>

                <p>
                  The lyrics of the school song as shared by friends and former schoolmates in the Guillemard East Primary School facebook group:
                </p>

                <div className="bg-muted/30 p-8 rounded-lg border border-border my-8">
                  <p className="font-semibold text-primary mb-4">Verse 1.</p>
                  <p className="mb-4">
                    In Lorong Twenty is our school,<br />
                    With our friends we work and play,<br />
                    Tis where we learn of true virtue,<br />
                    As we live from day to day.
                  </p>

                  <p className="font-semibold text-primary mb-4">Chorus:</p>
                  <p className="mb-4">
                    Guillemard East Primary School,<br />
                    We will always be alert,<br />
                    With discipline and with verve,<br />
                    Ready to serve, ready to serve.
                  </p>

                  <p className="font-semibold text-primary mb-4">Verse 2</p>
                  <p>
                    Rugged and strong we aim to be,<br />
                    Disciplined and forward looking,<br />
                    Pioneers brave we dare to be,<br />
                    Champs in every field of learning.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-12 mb-6">The Setting for Little Nonya's Escapades</h2>

                <p className="italic text-muted-foreground">
                  Fiction inspired by fragments of the Author's memories from decades ago.
                </p>

                <p>
                  The sequel to <Link href="/books/naughty-little-nonya" className="text-primary hover:text-secondary underline">Naughty Little Nonya</Link>, <Link href="/books/little-nonyas-escapades" className="text-primary hover:text-secondary underline">Little Nonya's Escapades</Link>, is set in Guillemard East Primary school so that even though our old school is physically gone, its memories live on through this tale.
                </p>

                <p>
                  Tammy's Daddy in the story is inspired by my own Daddy, Mr. Wee. I thought of him as my father and teacher when I wrote this work of fiction. You can get it in Amazon and other bookshops for a touch of nostalgia through Tammy's tale.
                </p>

                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="/books/little-nonyas-escapades">
                      Read Little Nonya's Escapades
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                    <Link href="/books/naughty-little-nonya">
                      Read Naughty Little Nonya
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
