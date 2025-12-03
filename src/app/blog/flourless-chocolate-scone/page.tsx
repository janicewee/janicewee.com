import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, User, Clock, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Flourless Chocolate Scone Recipe - Janice Wee",
  description: "A delicious flourless chocolate scone recipe made with ground almonds, cocoa powder, and chocolate chips. Perfect for tea time and reading!",
}

export default function FlouressChocolateScone() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-gradient-to-b from-primary/10 to-background">
          <div className="absolute inset-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/chocolatescones-1764742693118.jpg?width=8000&height=8000&resize=contain"
              alt="Flourless Chocolate Scones"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              Flourless Chocolate Scone
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>December 3, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Janice Wee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-2xl mb-12">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/chocolatescones-1764742693118.jpg?width=8000&height=8000&resize=contain"
              alt="Flourless Chocolate Scones on baking tray"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-foreground leading-relaxed">
              These flourless chocolate scones are a chocolate lover's dream! Made with ground almonds instead of flour, 
              they're perfect for those looking for a wheat-free treat. Rich cocoa powder combined with both regular and 
              white chocolate chips creates layers of chocolate flavor in every bite.
            </p>
          </div>

          {/* Recipe Meta */}
          <Card className="p-6 mb-12 bg-muted/30">
            <div className="flex flex-wrap gap-6 text-foreground">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-sm text-muted-foreground">Prep Time</p>
                  <p className="font-semibold">15 minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-sm text-muted-foreground">Cook Time</p>
                  <p className="font-semibold">11 minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-sm text-muted-foreground">Servings</p>
                  <p className="font-semibold">12-15 scones</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Ingredients */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Ingredients</h2>
            
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-4">Dry Ingredients</h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start">
                    <span className="text-secondary mr-3">•</span>
                    <span>1 1/2 cup ground almonds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3">•</span>
                    <span>3/4 to 1/2 cup cocoa powder, depending on how chocolatey you want it to be</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3">•</span>
                    <span>1/3 to 1/2 cup regular baking chocolate chips</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3">•</span>
                    <span>1/3 cup white chocolate chips</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3">•</span>
                    <span>1/4 teaspoon baking soda</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3">•</span>
                    <span>A pinch of salt</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-4">Wet Ingredients</h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start">
                    <span className="text-secondary mr-3">•</span>
                    <span>2 large eggs or 3 regular eggs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3">•</span>
                    <span>1 tablespoon honey</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3">•</span>
                    <span>1 teaspoon vanilla extract</span>
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Method */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Method</h2>
            <Card className="p-6">
              <ol className="space-y-4 text-foreground">
                <li className="flex items-start">
                  <span className="font-bold text-secondary mr-3 min-w-[2rem]">1.</span>
                  <span>Preheat the oven at 190 degrees Celsius</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-secondary mr-3 min-w-[2rem]">2.</span>
                  <span>Mix the dry ingredients together in a large bowl</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-secondary mr-3 min-w-[2rem]">3.</span>
                  <span>Beat the wet ingredients</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-secondary mr-3 min-w-[2rem]">4.</span>
                  <span>Make a well in the dry mixture</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-secondary mr-3 min-w-[2rem]">5.</span>
                  <span>Pour the wet ingredients into the well and stir the wet ingredients into the dry ingredients to make a big lump of dough</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-secondary mr-3 min-w-[2rem]">6.</span>
                  <span>Line a baking tray with baking paper</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-secondary mr-3 min-w-[2rem]">7.</span>
                  <span>Scoop and drop spoonfuls of dough on the baking paper</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-secondary mr-3 min-w-[2rem]">8.</span>
                  <span>Shape each spoonful of dough into a ball</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-secondary mr-3 min-w-[2rem]">9.</span>
                  <span>Bake these chocolate balls in the oven for 11 minutes</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-secondary mr-3 min-w-[2rem]">10.</span>
                  <span>Let it cool for 5 minutes</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-secondary mr-3 min-w-[2rem]">11.</span>
                  <span>Enjoy!</span>
                </li>
              </ol>
            </Card>
          </section>

          {/* Tips */}
          <section className="mb-12">
            <Card className="p-6 bg-muted/30">
              <h3 className="text-2xl font-bold text-primary mb-4">Baker's Tips</h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start">
                  <span className="text-secondary mr-3">✓</span>
                  <span>Adjust the amount of cocoa powder based on how intensely chocolatey you want your scones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3">✓</span>
                  <span>These scones are best enjoyed warm, fresh from the oven</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3">✓</span>
                  <span>Perfect paired with a cup of tea and your favorite fantasy novel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3">✓</span>
                  <span>Store leftovers in an airtight container for up to 3 days</span>
                </li>
              </ul>
            </Card>
          </section>

          {/* Related Content */}
          <section>
            <h3 className="text-2xl font-bold text-primary mb-6">More Delicious Recipes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-bold text-secondary mb-3">
                  <Link href="/recipes" className="hover:text-primary transition-colors">
                    View All Recipes
                  </Link>
                </h4>
                <p className="text-muted-foreground mb-4">
                  Explore more delicious scone recipes perfect for tea time and reading.
                </p>
                <Button asChild variant="outline">
                  <Link href="/recipes">Browse Recipes</Link>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-bold text-secondary mb-3">
                  <Link href="/books" className="hover:text-primary transition-colors">
                    Pair with a Good Book
                  </Link>
                </h4>
                <p className="text-muted-foreground mb-4">
                  Enjoy these scones while reading one of my fantasy adventures.
                </p>
                <Button asChild variant="outline">
                  <Link href="/books">Explore Books</Link>
                </Button>
              </Card>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  )
}
