import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink, BookOpen, Pen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sweetcorn Suzie - Janice Wee",
  description: "Experience life's challenges and triumphs through seven short stories featuring bumbling blur queen, Sweetcorn Suzie.",
}

export default function SweetcornSuziePage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Book Header */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Suzie-1760410252107.jpg"
                  alt="Sweetcorn Suzie"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-primary mb-2">Sweetcorn Suzie</h1>
              <p className="text-lg text-muted-foreground mb-6">Singapore Tales Series</p>
              
              <p className="text-xl text-foreground mb-6 leading-relaxed">
                Experience life's challenges and triumphs through seven short stories featuring bumbling blur queen, Sweetcorn Suzie. Witness the trauma of a Home Economics cooking class. Laugh with her through her antics. Delight at unexpected twists and turns as she blunders through life. Through these stories, the author shares the miracles in her life, grief, and coming to terms with loss.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="https://books2read.com/u/mg5XDq" target="_blank" rel="noopener noreferrer">
                    Buy on Books2Read
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.barnesandnoble.com/w/sweetcorn-suzie-janice-wee/1144699682" target="_blank" rel="noopener noreferrer">
                    Barnes & Noble
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.kobo.com/sg/en/ebook/sweetcorn-suzie" target="_blank" rel="noopener noreferrer">
                    Kobo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.amazon.com.au/Sweetcorn-Suzie-Janice-Wee/dp/B0CVW2TMSC" target="_blank" rel="noopener noreferrer">
                    Amazon
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Video Trailer */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Book Trailer</h2>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/AM4E63vWBt8"
                title="Sweetcorn Suzie Book Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          </section>

          {/* Book Description */}
          <section className="mb-12">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">About This Book</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  Experience life's challenges and triumphs through seven short stories featuring bumbling blur queen, Sweetcorn Suzie. Witness the trauma of a Home Economics cooking class. Laugh with her through her antics. Delight at unexpected twists and turns as she blunders through life. Through these stories, the author shares the miracles in her life, grief, and coming to terms with loss.
                </p>
              </div>
            </Card>
          </section>

          {/* Book Excerpt */}
          <section className="mb-12">
            <Card className="p-8 bg-muted/30">
              <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-primary">Excerpt</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed italic">
                  Fire blazed, frightening us thirteen-year-old girls in our first cooking class. Cool as a cucumber, Miss Melody took the pan of burning oil from our classmate's trembling hand and set it in the middle the concrete kitchen floor.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  "Remember girls," Miss Melody emphasised as she filled a bucket with water. "Do not try this."
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  Our hearts pounding with morbid curiosity, we stood fixated. We couldn't tear our eyes off our teacher as she carried the pail full of water, striding towards the flaming oil.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  "Stand back," she ordered - an unnecessary command. We weren't stupid. All of us had the sense to stay as far from the fire as we could.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  Bracing herself, several feet away from the pan of flames, she flung the water at the burning oil, putting it out. It was a miracle the heated oil had not splashed on her, or any of us, for that matter. We were fortunate to escape unscathed.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  "This is an example of what NOT to do when the oil catches fire," she concluded, stunning her impressionable audience.
                </p>
              </div>
            </Card>
          </section>

          {/* Author's Notes */}
          <section className="mb-12">
            <Card className="p-8 border-primary/20">
              <div className="flex items-center mb-6">
                <Pen className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-primary">Author's Notes</h2>
              </div>
              <p className="text-foreground leading-relaxed">
                Truth is stranger than fiction. Each story is a memory that sounds unbelievable, but these actually happened. Only the names are fiction, changed to protect the identities of everyone involved. Decades later, I reminisced with my classmate about that Home Economics incident. She's so traumatised that when she had to light a gas stove, she too would duck.
              </p>
            </Card>
          </section>

          {/* ISBN Section */}
          <section className="mt-12">
            <Card className="p-6 bg-muted/20">
              <h3 className="text-lg font-semibold text-primary mb-3">Publication Details</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <span className="font-semibold">Ebook ISBN:</span> 9798224021796
                </div>
                <div>
                  <span className="font-semibold">Paperback ISBN:</span> 9798224953530
                </div>
              </div>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}