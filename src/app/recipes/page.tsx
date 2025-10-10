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
    title: "Classic Banana Scones",
    description: "These delightful banana scones are perfect for your afternoon tea and reading sessions. The sweetness of ripe bananas combined with buttery, flaky scones creates the perfect companion for any fantasy novel.",
    imageUrl: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&h=600&fit=crop",
    prepTime: "15 minutes",
    cookTime: "20 minutes",
    servings: "8 scones",
    ingredients: [
      "2 cups all-purpose flour",
      "1/3 cup sugar",
      "1 tablespoon baking powder",
      "1/2 teaspoon salt",
      "1/2 cup cold butter, cubed",
      "2 ripe bananas, mashed",
      "1/3 cup heavy cream",
      "1 egg",
      "1 teaspoon vanilla extract"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.",
      "In a large bowl, mix flour, sugar, baking powder, and salt.",
      "Cut in cold butter until mixture resembles coarse crumbs.",
      "In another bowl, combine mashed bananas, cream, egg, and vanilla.",
      "Gently fold wet ingredients into dry until just combined.",
      "Turn dough onto floured surface and pat into a circle about 1 inch thick.",
      "Cut into 8 wedges and place on prepared baking sheet.",
      "Bake for 18-20 minutes until golden brown.",
      "Serve warm with butter and tea!"
    ]
  },
  {
    id: 2,
    title: "Traditional English Scones",
    description: "A classic recipe for traditional English scones that pair beautifully with clotted cream and jam. Perfect for creating that cozy reading atmosphere while enjoying tales of dragons and lions.",
    imageUrl: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&h=600&fit=crop",
    prepTime: "10 minutes",
    cookTime: "15 minutes",
    servings: "6 scones",
    ingredients: [
      "2 cups self-rising flour",
      "1/4 cup sugar",
      "1/4 teaspoon salt",
      "6 tablespoons cold butter",
      "2/3 cup milk",
      "1 egg for brushing"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Mix flour, sugar, and salt in a bowl.",
      "Rub in butter until mixture resembles breadcrumbs.",
      "Add milk and mix to form a soft dough.",
      "Roll out to 3/4 inch thickness and cut into rounds.",
      "Place on greased baking tray and brush with beaten egg.",
      "Bake for 12-15 minutes until risen and golden.",
      "Serve with clotted cream and your favorite jam!"
    ]
  },
  {
    id: 3,
    title: "Blueberry Lemon Scones",
    description: "Fresh blueberries and zesty lemon create a delightful flavor combination in these scones. The perfect refreshing treat for summer reading sessions in your favorite fantasy worlds.",
    imageUrl: "https://images.unsplash.com/photo-1606313564558-fd1a4c7c5050?w=800&h=600&fit=crop",
    prepTime: "20 minutes",
    cookTime: "18 minutes",
    servings: "8 scones",
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1/3 cup sugar",
      "2 teaspoons baking powder",
      "1/2 teaspoon salt",
      "1/2 cup cold butter",
      "1 cup fresh blueberries",
      "2 tablespoons lemon zest",
      "2/3 cup buttermilk",
      "1 egg"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Combine flour, sugar, baking powder, and salt.",
      "Cut in butter until mixture is crumbly.",
      "Gently fold in blueberries and lemon zest.",
      "Mix buttermilk and egg, then add to flour mixture.",
      "Shape dough into circle and cut into 8 wedges.",
      "Bake for 16-18 minutes until golden.",
      "Optional: drizzle with lemon glaze when cooled!"
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