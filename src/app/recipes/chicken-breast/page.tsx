import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Clock, Users, ChefHat } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Anti-inflammatory Oven Baked Chicken Breast - Janice Wee",
  description: "Tender and juicy anti-inflammatory oven baked chicken breast recipe. Perfect for a healthy meal using food as medicine.",
}

export default function ChickenBreastRecipePage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-primary mb-4">
                Anti-inflammatory Oven Baked Chicken Breast
              </h1>
              <p className="text-xl text-muted-foreground">
                Tender, juicy, and totally yummy - done right!
              </p>
            </div>
          </div>
        </section>

        {/* Recipe Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden">
              {/* Hero Image */}
              <div className="relative aspect-video w-full">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/chickenbreast-1760408454456.png"
                  alt="Anti-inflammatory baked chicken breast with potatoes"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 space-y-8">
                {/* Introduction */}
                <div>
                  <p className="text-foreground leading-relaxed text-lg">
                    Due to weight problems and arthritis, in my new season in life as a full time author, 
                    I use food as my medicine, cooking my meals with the health properties of the ingredients 
                    in mind. My favourite daily protein source is this anti-inflammatory oven baked chicken 
                    breast. Done right, it's tender and juicy and totally yummy.
                  </p>
                </div>

                {/* Recipe Meta */}
                <div className="flex flex-wrap gap-6 py-6 border-y border-border">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm">Prep Time</div>
                      <div className="font-semibold text-foreground">10 minutes</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm">Cook Time</div>
                      <div className="font-semibold text-foreground">35-40 minutes</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm">Servings</div>
                      <div className="font-semibold text-foreground">2-4 servings</div>
                    </div>
                  </div>
                </div>

                {/* Ingredients */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <ChefHat className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold text-primary">Ingredients</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">For the Chicken:</h3>
                      <ul className="list-disc list-inside space-y-2 text-foreground">
                        <li>2-4 chicken breast fillets</li>
                        <li>2 tablespoons olive oil</li>
                        <li>1 teaspoon turmeric powder (anti-inflammatory)</li>
                        <li>1 teaspoon garlic powder</li>
                        <li>1 teaspoon paprika</li>
                        <li>½ teaspoon ground ginger (anti-inflammatory)</li>
                        <li>Salt and black pepper to taste</li>
                        <li>Fresh herbs (rosemary, thyme, or parsley)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">For the Potatoes:</h3>
                      <ul className="list-disc list-inside space-y-2 text-foreground">
                        <li>4-6 medium potatoes, sliced</li>
                        <li>2 tablespoons olive oil</li>
                        <li>Salt and pepper to taste</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Instructions */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">Method</h2>
                  <ol className="list-decimal list-inside space-y-3 text-foreground">
                    <li className="leading-relaxed">
                      Preheat your oven to 190°C (375°F).
                    </li>
                    <li className="leading-relaxed">
                      Line a baking tray with parchment paper.
                    </li>
                    <li className="leading-relaxed">
                      Slice the potatoes and arrange them on the baking tray. Drizzle with olive oil, 
                      salt, and pepper.
                    </li>
                    <li className="leading-relaxed">
                      In a small bowl, mix together the turmeric, garlic powder, paprika, ground ginger, 
                      salt, and pepper.
                    </li>
                    <li className="leading-relaxed">
                      Pat the chicken breasts dry with paper towels. Rub them with olive oil, then coat 
                      generously with the spice mixture.
                    </li>
                    <li className="leading-relaxed">
                      Place the seasoned chicken breasts on top of the potatoes. Add fresh herbs around 
                      the chicken.
                    </li>
                    <li className="leading-relaxed">
                      Bake in the preheated oven for 35-40 minutes, or until the chicken reaches an 
                      internal temperature of 75°C (165°F) and the juices run clear.
                    </li>
                    <li className="leading-relaxed">
                      Remove from the oven and let rest for 5 minutes before serving.
                    </li>
                  </ol>
                </div>

                {/* Tips */}
                <div className="bg-secondary/10 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-primary mb-3">Tips for Success:</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>• Don't overcook - use a meat thermometer to ensure perfect doneness</li>
                    <li>• Let the chicken rest after baking to keep it juicy</li>
                    <li>• Turmeric and ginger are powerful anti-inflammatory spices</li>
                    <li>• This recipe is great for meal prep - refrigerate for up to 4 days</li>
                  </ul>
                </div>

                <div className="text-center pt-6">
                  <p className="text-2xl font-bold text-primary mb-4">Enjoy!</p>
                  <Button asChild variant="outline">
                    <a href="/recipes">← Back to All Recipes</a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}