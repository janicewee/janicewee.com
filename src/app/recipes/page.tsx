import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Clock, Users, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Recipes - Janice Wee",
  description: "Delicious scone recipes perfect for tea time and reading. Enjoy these treats while diving into fantasy novels.",
}

const recipes = [
  {
    id: 1,
    title: "Janice's Banana Scones with Chocolate Lava",
    description: "My signature recipe! These moist banana scones with hidden chocolate lava centers are perfect for afternoon tea. The combination of banana and chocolate creates a delightful treat that pairs wonderfully with a good book.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/bananascone1-1760153643221.jpg",
    prepTime: "15 minutes",
    cookTime: "14 minutes",
    servings: "12 scones",
    ingredients: [
      "2 cups ground almonds",
      "A pinch of salt",
      "A pinch of baking soda",
      "1 big egg",
      "1 teaspoon vanilla extract",
      "2 large bananas",
      "Dark chocolate couverture buttons (optional)",
      "White chocolate couverture buttons (optional)"
    ],
    instructions: [
      "Mix the dry ingredients in a bowl.",
      "Mash the bananas into a smooth liquid.",
      "Mix the bananas and the rest of the wet ingredients together.",
      "Stir the wet ingredients into the dry ingredients until you have a ball of dough.",
      "Line a baking tray with baking paper.",
      "Use two spoons to scoop and shape the dough into balls on the baking sheet.",
      "Preheat the oven to 190 degrees (375°F).",
      "If you want chocolate in your banana scones, stuff a white chocolate button into each ball and bury it. Then stuff a dark chocolate button into the ball.",
      "If you want your scones to ooze with lava, stack, stuff and bury a few chocolate buttons (white for white lava, dark chocolate for chocolate lava) into each ball.",
      "Bake for 14 minutes in a preheated oven.",
      "Take the tray out to cool on a wire rack for 5 minutes before serving.",
      "Enjoy while warm - they're moist, with a hint of banana, enough chocolate for a scone, and yummy!"
    ]
  },
  {
    id: 2,
    title: "Quick and Easy No Wheat Scones",
    description: "Trying to cut down carbs, I baked my own breakfasts for a season, using ground almonds instead of flour. This has become my go to breakfast and my contribution for pot lucks because it's so quick and easy to bake. These are excellent as instant breakfasts too - freeze what you want to keep and heat up when you want to eat.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/scones-1760153805875.jpg",
    prepTime: "10 minutes",
    cookTime: "11 minutes",
    servings: "24-30 mini scones or 12-15 regular scones",
    ingredients: [
      "2 cups ground almonds",
      "1 pinch of salt",
      "1 pinch of baking soda",
      "Chocolate chips (up to half cup)",
      "Dried fruit (up to half cup)",
      "2 large eggs",
      "1 tablespoon maple syrup",
      "1 teaspoon to 1 tablespoon vanilla extract, depending on how strong you want the vanilla to be"
    ],
    instructions: [
      "Line your baking tray.",
      "Preheat the oven at 190 degrees celsius (375°F).",
      "Mix the dry ingredients in one bowl.",
      "Mix the wet ingredients in one bowl.",
      "Mix the wet mixture into the dry mixture.",
      "Shape the batter into balls. You could do mini scones of half a tablespoon each or regular scones at a heaped tablespoon each.",
      "Bake for 11 minutes.",
      "Take it out of the oven and set aside for 5 minutes to let it continue cooking with the residual heat.",
      "Enjoy! Freeze what you want to keep and heat up when you want to eat."
    ]
  }
]

export default function RecipesPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-primary mb-4">Scones & Recipes</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delicious treats perfect for tea time and reading adventures
            </p>
          </div>
        </section>

        {/* Recipes */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {recipes.map((recipe) => (
                <Card key={recipe.id} className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Recipe Image */}
                    <div className="relative aspect-video md:aspect-square">
                      <img
                        src={recipe.imageUrl}
                        alt={recipe.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Recipe Content */}
                    <div className="p-8">
                      <h2 className="text-3xl font-bold text-primary mb-4">{recipe.title}</h2>
                      <p className="text-foreground mb-6 leading-relaxed">{recipe.description}</p>

                      {/* Recipe Meta */}
                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>Prep: {recipe.prepTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>Cook: {recipe.cookTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{recipe.servings}</span>
                        </div>
                      </div>

                      {/* Ingredients */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-primary mb-3">Ingredients</h3>
                        <ul className="list-disc list-inside space-y-1 text-foreground">
                          {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Instructions */}
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">Instructions</h3>
                        <ol className="list-decimal list-inside space-y-2 text-foreground">
                          {recipe.instructions.map((instruction, index) => (
                            <li key={index} className="leading-relaxed">{instruction}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <Card className="p-8 bg-muted/30">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Scones with Tea and Reading
                </h3>
                <p className="text-foreground mb-6 max-w-2xl mx-auto">
                  Pair these delicious scones with a warm cup of tea and your favorite fantasy novel 
                  for the perfect afternoon. Check out my books to find your next reading adventure!
                </p>
                <Button asChild size="lg">
                  <a href="/books">
                    Explore My Books
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}