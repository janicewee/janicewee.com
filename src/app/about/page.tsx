import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { BookOpen, Coffee, Heart, Book, Sparkles, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About - Janice Wee",
  description: "Get to know the person behind the books. Learn about Janice Wee, Singaporean author of adventure and romance.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-primary mb-6">About Janice Wee</h1>
                <p className="text-xl text-foreground leading-relaxed">
                  Author of adventure and romance
                </p>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&h=600&fit=crop"
                  alt="Writing desk with books"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed text-lg">
                Janice Wee is a Singaporean author who has published several books across a variety of genres, 
                including multicultural stories and kids stories. She is known for her vivid descriptions of 
                characters and settings, as well as her engaging and immersive writing style.
              </p>
            </div>

            {/* Background */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Home className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-primary">Background</h2>
              </div>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  A Straits Born Chinese from Singapore, Janice is the daughter of English teachers, with her 
                  father being the school librarian. Growing up in Rambai Road, she developed a love for books 
                  and comics from an early age.
                </p>
                <p>
                  She graduated from the National University of Singapore and now writes fiction, 
                  typically at grade 3 reading level, for the enjoyment of readers of all ages.
                </p>
              </div>
            </Card>

            {/* Childhood Memories */}
            <Card className="p-8 bg-gradient-to-br from-secondary/10 to-primary/5">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-primary">Naughty Little Nonya</h2>
              </div>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  She was a naughty Little Nonya growing up. She and her cousin Ray have fond memories of talcum 
                  powder shenanigans. They would powder their uncle's workout bench to turn it into a slide. They 
                  powdered the floor to make an ice skating rink which inspired a short story in her book{' '}
                  <a href="/books/naughty-little-nonya" className="text-primary hover:underline font-semibold">
                    Naughty Little Nonya
                  </a>.
                </p>
                <p>
                  Janice studied in Guillemard East Primary School where her late father worked as a teacher. She 
                  spent six wonderfully memorable years there.
                </p>
                <p>
                  Her book{' '}
                  <a href="/books/little-nonyas-escapades" className="text-primary hover:underline font-semibold">
                    Little Nonya's Escapades
                  </a>{' '}
                  is a work of fiction (more or less) based on her six years there, written in memory of her late 
                  Daddy, Mr Anthony Wee. Tammy's story is based on Janice's personal experience—fragments of precious 
                  childhood memories wrapped in fiction.
                </p>
              </div>
            </Card>

            {/* Food & Health */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Coffee className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-primary">Food as Medicine</h2>
              </div>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Janice enjoys eating Buah Keluak and is a foodie who loves a good cup of tea with scones. Here's her 
                  favourite{' '}
                  <a href="/recipes" className="text-primary hover:underline font-semibold">
                    scone recipe
                  </a>.
                </p>
                <p>
                  Due to weight problems and arthritis, in her new season in life as a full time author, she uses food 
                  as her medicine, cooking her meals with the health properties of the ingredients in mind. Her favourite 
                  daily protein source is her{' '}
                  <a href="/recipes/chicken-breast" className="text-primary hover:underline font-semibold">
                    Anti-inflammatory oven baked chicken breast
                  </a>. Done right, it's tender and juicy and totally yummy.
                </p>
                <p>
                  She also has high cholesterol, which led her to experiment with overnight oats. Here's her favourite:{' '}
                  <a href="/recipes/overnight-oats" className="text-primary hover:underline font-semibold">
                    Mango Avocado Chocolate Overnight Oats Recipe
                  </a>.
                </p>
              </div>
            </Card>

            {/* Chronicles of Emunah */}
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-primary">About The Chronicles of Emunah</h2>
              </div>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Growing up, the highlight of my school holidays was staying with my cousin Ray. Sometimes she'd stay 
                  at our home. Other times, I'd stay in her home.
                </p>
                <p>
                  I remember those holidays in Siglap. Her dad, Dr Peter Wee HL was passionate about eschatology. He, 
                  my dad and all their brothers were huge comic book fans. My uncle has a library with decades worth of 
                  carefully preserved comic books. One of my favourite things then was to raid his collection. We'd get 
                  stacks of comics and spend the afternoons in the fantasy world of DC comics.
                </p>
                <p>
                  Meals were memorable with lively discourse on eschatology and comic book storylines. The book of 
                  Revelation was often a dinner topic which brought endless fascination although at that tender age, 
                  I struggled to follow their discussions.
                </p>
                <p>
                  That was decades ago.
                </p>
                <p>
                  Now, I feel a strong calling to write this epic. It's too difficult a project for me to do alone. My 
                  uncle, Dr Peter Wee has been amazing in guiding me through the difficult bits of Revelation and 
                  Eschatology so that I could write the novel,{' '}
                  <a href="/books/quest-for-immortality" className="text-primary hover:underline font-semibold">
                    The Quest for Immortality
                  </a>, the main story for this series.
                </p>
                <p>
                  I have a sense that it is for someone I don't know, whom I may never meet, but whom I'd meet in 
                  eternity one day. Whoever you are, I hope this book, though a work of fiction, would encourage and 
                  bless you.
                </p>
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Book className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-primary">Stay Connected</h3>
              </div>
              <p className="text-foreground mb-6 max-w-2xl mx-auto">
                Get notified every time Janice Wee releases a new book.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="https://books2read.com/author/janice-wee/subscribe/50444/" target="_blank" rel="noopener noreferrer">
                    Subscribe for Updates
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/books">View All Books</a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Full List of Janice Wee's{' '}
                <a href="/books" className="text-primary hover:underline font-semibold">
                  Books
                </a>{' '}
                and where to get them.
              </p>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}