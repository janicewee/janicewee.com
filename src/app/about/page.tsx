import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { BookOpen, Heart, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About - Janice Wee",
  description: "Learn more about Janice Wee, indie author of Christian speculative fiction featuring fantasy novels with faith and family themes.",
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
                  Indie Author of Christian Speculative Fiction
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary mb-6">My Journey as an Author</h2>
              <p className="text-foreground leading-relaxed mb-6">
                Welcome to my world of fantasy and faith. I am Janice Wee, an indie author passionate about 
                crafting Christian speculative fiction that explores the depths of God's sovereignty, 
                the power of redemption, and the beauty of family bonds. Through my novels, I weave epic 
                adventures featuring dragons, lions, and ancient prophecies with timeless biblical truths.
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                My writing journey began with a simple question: How can fantasy fiction illuminate 
                spiritual truths? This question led me to create stories where the supernatural intersects 
                with faith, where mythical creatures become vehicles for exploring God's character, and 
                where family drama reflects our relationship with our Heavenly Father.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-6 mt-12">Themes in My Writing</h2>
              
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <Card className="p-6 text-center">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">God's Sovereignty</h3>
                  <p className="text-muted-foreground text-sm">
                    Every story explores how God's perfect plan unfolds even in the midst of chaos and uncertainty.
                  </p>
                </Card>

                <Card className="p-6 text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Redemption</h3>
                  <p className="text-muted-foreground text-sm">
                    Characters journey from darkness to light, discovering hope and transformation through faith.
                  </p>
                </Card>

                <Card className="p-6 text-center">
                  <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Family Drama</h3>
                  <p className="text-muted-foreground text-sm">
                    Complex family relationships mirror our spiritual journey and connection with God.
                  </p>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-6 mt-12">My Books</h2>
              <p className="text-foreground leading-relaxed mb-6">
                <strong>Dragon Unbound</strong> tells the story of a dragon awakening after a thousand years 
                of captivity to find a world transformed. This epic tale explores themes of redemption and 
                God's timing, showing how faith and courage must unite to face darkness.
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                <strong>Billy The Lion Boy</strong> follows an orphan who discovers his extraordinary destiny 
                when befriended by a mystical lion guardian. This heartwarming adventure explores divine 
                protection and the courage that comes from trusting in God's plan.
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                <strong>The Quest For Immortality</strong> presents a dystopian to utopian prophecy tale 
                where one family's faith leads them on a quest that could change humanity's fate. This 
                powerful narrative showcases God's ultimate plan for redemption and eternal life.
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                <strong>The Billy Lionheart Series</strong> encompasses Billy's complete journey as he grows 
                from an orphan boy to a hero of legendary proportions. This comprehensive saga explores the 
                depths of God's love and the power of unwavering faith across multiple adventures.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-6 mt-12">Why Christian Fantasy?</h2>
              <p className="text-foreground leading-relaxed mb-6">
                Fantasy fiction has a unique power to illuminate spiritual truths in fresh, imaginative ways. 
                When C.S. Lewis wrote The Chronicles of Narnia, he showed how mythical creatures and magical 
                worlds could point readers to Christ. I follow in this tradition, using dragons to symbolize 
                transformation, lions to represent divine protection, and epic quests to mirror our spiritual 
                journey toward God.
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                In my novels, family drama isn't just conflict—it's a reflection of our relationship with 
                our Heavenly Father. Every character's struggle with faith, every moment of doubt and triumph, 
                echoes the spiritual battles we all face. Through fantasy, I can explore these themes with 
                wonder and imagination while staying true to biblical principles.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-6 mt-12">Beyond Writing</h2>
              <p className="text-foreground leading-relaxed mb-6">
                When I'm not writing, you'll find me baking scones for afternoon tea, experimenting with 
                recipes that pair perfectly with reading time. I believe that the simple pleasures—a warm 
                scone, a cup of tea, a good book—are gifts from God to be savored and shared. That's why 
                I include recipes on this site, creating a complete experience for my readers.
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                I'm passionate about encouraging other indie authors, especially those called to write 
                faith-based fiction. The publishing journey isn't always easy, but seeing how stories 
                can touch hearts and point readers to Christ makes every challenge worthwhile.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-12">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Ready to Begin Your Adventure?
                </h3>
                <p className="text-foreground mb-6 max-w-2xl mx-auto">
                  Explore my collection of fantasy novels and discover stories that will challenge your faith, 
                  warm your heart, and transport you to worlds where God's love shines through every page.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <a href="/books">Explore My Books</a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="/contact">Get in Touch</a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}