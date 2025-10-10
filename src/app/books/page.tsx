import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Books - Janice Wee",
  description: "Explore all fantasy novels by Janice Wee: Dragon Unbound, Billy The Lion Boy, The Quest For Immortality, and the Billy Lionheart Series.",
}

const books = [
  {
    id: 1,
    title: "Dragon Unbound",
    slug: "dragon-unbound",
    description: "After a thousand years of captivity, a dragon awakens to find the world transformed. As ancient prophecies unfold, faith and courage must unite to face the darkness threatening both realms. This epic tale weaves themes of redemption, God's sovereignty, and the power of faith through a fantasy adventure that will captivate readers.",
    coverUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop",
    review: "A breathtaking journey of faith and redemption that captivated me from the first page.",
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/ap/8G2gQM/Janice-Wee" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com" }
    ]
  },
  {
    id: 2,
    title: "Billy The Lion Boy",
    slug: "billy-the-lion-boy",
    description: "An orphan adventure with a lion guardian. Young Billy discovers his extraordinary destiny when he befriends a mystical lion who protects him through perilous journeys and magical encounters. This heartwarming tale explores themes of courage, family bonds, and divine protection through the eyes of a brave young boy.",
    coverUrl: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=400&h=600&fit=crop",
    review: "Billy's courage and faith inspire readers of all ages. A beautiful story about divine guardianship.",
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/ap/8G2gQM/Janice-Wee" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com" }
    ]
  },
  {
    id: 3,
    title: "The Quest For Immortality",
    slug: "quest-for-immortality",
    description: "A dystopian to utopian prophecy tale. In a world where death seems to reign supreme, one family's faith leads them on a quest that could change the fate of humanity forever. This powerful narrative explores God's ultimate plan for redemption and the hope that transcends even the darkest circumstances.",
    coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
    review: "A prophetic journey that offers hope and showcases divine purpose. Truly transformative.",
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/ap/8G2gQM/Janice-Wee" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com" }
    ]
  },
  {
    id: 4,
    title: "Billy Lionheart Series",
    slug: "billy-lionheart-series",
    description: "Follow Billy's complete journey through this epic fantasy series where faith, family, and destiny intertwine. Experience the full saga of courage, redemption, and divine purpose as Billy grows from an orphan boy to a hero of legendary proportions. This comprehensive series explores the depths of God's love and the power of unwavering faith.",
    coverUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    review: "An epic saga that will stay with you long after the final page. Masterfully crafted.",
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/ap/8G2gQM/Janice-Wee" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com" }
    ]
  }
]

export default function BooksPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-primary mb-4">My Books</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my collection of fantasy novels woven with faith and family themes
            </p>
          </div>
        </section>

        {/* Books Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {books.map((book) => (
                <Card key={book.id} className="overflow-hidden">
                  <div className="grid sm:grid-cols-5 gap-6 p-6">
                    {/* Book Cover */}
                    <div className="sm:col-span-2">
                      <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={book.coverUrl}
                          alt={book.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Book Info */}
                    <div className="sm:col-span-3 flex flex-col">
                      <h2 className="text-2xl font-bold text-primary mb-3">{book.title}</h2>
                      
                      <p className="text-foreground mb-4 leading-relaxed flex-grow">
                        {book.description}
                      </p>

                      {/* Review Snippet */}
                      <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground italic">"{book.review}"</p>
                      </div>

                      {/* Buy Links */}
                      <div className="space-y-2">
                        {book.buyLinks.map((link, index) => (
                          <Button key={index} asChild className="w-full" variant={index === 0 ? "default" : "outline"}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                              Buy on {link.name}
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}