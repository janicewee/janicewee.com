import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Clock, Users, ChefHat } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Mango Avocado Chocolate Overnight Oats - Janice Wee",
  description: "Delicious and healthy mango avocado chocolate overnight oats recipe. Perfect for managing high cholesterol with food as medicine.",
}

export default function OvernightOatsRecipePage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-primary mb-4">
                Mango Avocado Chocolate Overnight Oats
              </h1>
              <p className="text-xl text-muted-foreground">
                A delicious and heart-healthy breakfast treat
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
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/mangoavocadochocolateoats-1760408454436.jpeg"
                  alt="Mango Avocado Chocolate Overnight Oats"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 space-y-8">
                {/* Introduction */}
                <div>
                  <p className="text-foreground leading-relaxed text-lg">
                    I have high cholesterol, which led me to experiment with overnight oats. This is my 
                    favourite recipe! The combination of heart-healthy oats, omega-rich avocado, and 
                    antioxidant-packed mango with a touch of chocolate creates a delicious breakfast that's 
                    as nutritious as it is satisfying.
                  </p>
                </div>

                {/* Recipe Meta */}
                <div className="flex flex-wrap gap-6 py-6 border-y border-border">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm">Prep Time</div>
                      <div className="font-semibold text-foreground">5 minutes</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm">Chill Time</div>
                      <div className="font-semibold text-foreground">Overnight (6-8 hours)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm">Servings</div>
                      <div className="font-semibold text-foreground">1 serving</div>
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
                      <h3 className="font-semibold text-lg mb-2">Base:</h3>
                      <ul className="list-disc list-inside space-y-2 text-foreground">
                        <li>½ cup rolled oats</li>
                        <li>½ cup unsweetened almond milk (or milk of choice)</li>
                        <li>2 tablespoons plain Greek yogurt</li>
                        <li>1 tablespoon chia seeds</li>
                        <li>1 tablespoon unsweetened cocoa powder</li>
                        <li>1 teaspoon maple syrup or honey (optional)</li>
                        <li>½ teaspoon vanilla extract</li>
                        <li>Pinch of salt</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Toppings:</h3>
                      <ul className="list-disc list-inside space-y-2 text-foreground">
                        <li>½ ripe mango, diced</li>
                        <li>¼ ripe avocado, diced</li>
                        <li>1 tablespoon dark chocolate chips or cacao nibs</li>
                        <li>Optional: additional fresh fruit, nuts, or seeds</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Instructions */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">Method</h2>
                  <ol className="list-decimal list-inside space-y-3 text-foreground">
                    <li className="leading-relaxed">
                      In a mason jar or airtight container, combine the rolled oats, almond milk, Greek 
                      yogurt, chia seeds, cocoa powder, maple syrup (if using), vanilla extract, and salt.
                    </li>
                    <li className="leading-relaxed">
                      Stir well to combine, making sure the cocoa powder is fully incorporated and there 
                      are no lumps.
                    </li>
                    <li className="leading-relaxed">
                      Cover the container with a lid and refrigerate overnight, or for at least 6-8 hours. 
                      The oats will absorb the liquid and become soft and creamy.
                    </li>
                    <li className="leading-relaxed">
                      In the morning, give the oats a good stir. If the mixture is too thick, add a splash 
                      more milk to reach your desired consistency.
                    </li>
                    <li className="leading-relaxed">
                      Top with diced mango, avocado, and dark chocolate chips.
                    </li>
                    <li className="leading-relaxed">
                      Enjoy cold straight from the fridge, or warm it up in the microwave for 30-60 seconds 
                      if you prefer it warm.
                    </li>
                  </ol>
                </div>

                {/* Health Benefits */}
                <div className="bg-secondary/10 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-primary mb-3">Health Benefits:</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>• <strong>Oats:</strong> Rich in soluble fiber (beta-glucan) that helps lower cholesterol</li>
                    <li>• <strong>Avocado:</strong> Packed with heart-healthy monounsaturated fats</li>
                    <li>• <strong>Mango:</strong> High in antioxidants and vitamins A and C</li>
                    <li>• <strong>Chia Seeds:</strong> Excellent source of omega-3 fatty acids</li>
                    <li>• <strong>Dark Chocolate:</strong> Contains flavonoids that support heart health</li>
                  </ul>
                </div>

                {/* Tips */}
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-primary mb-3">Tips:</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>• Prepare 2-3 jars at once for easy grab-and-go breakfasts</li>
                    <li>• Add the fresh fruit toppings just before eating to keep them fresh</li>
                    <li>• Store in the refrigerator for up to 3 days (without fresh toppings)</li>
                    <li>• Feel free to customize with your favorite fruits and nuts</li>
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