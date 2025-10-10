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
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/dragonunbound-1760074636345.jpg",
    review: "A must-read for fans of Christian speculative fiction, Janice Wee's Dragon Unbound plunges readers into a vibrant narrative set during the Millennial Kingdom, where biblical prophecy unfolds amidst the everyday lives of mortals and immortals alike.",
    reviewer: "Ting Chin",
    stars: 5,
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
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billylionheart-1760074636207.jpg",
    review: "An entertaining and imaginative story. Fun to read with a gentle perspective on love and loss. Billy is an orphan who yearns to be reunited with his parents. His guardian is a lion who is his fierce protector despite the youngster's penchant for mischief.",
    reviewer: "Kindle Customer",
    stars: 4,
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
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book3k-1760074872135.jpg",
    review: "Fiction or Reality? Is this the future? A must read. The author is creative & insightful in weaving a story that grips you to the very end.",
    reviewer: "Yvonne Sequerah",
    stars: 5,
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
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billyhero-1760074637493.jpg",
    review: "An epic saga that will stay with you long after the final page. Masterfully crafted.",
    reviewer: "Reader Review",
    stars: 5,
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
                      <a href={`/books/${book.slug}`}>
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                          <img
                            src={book.coverUrl}
                            alt={book.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </a>
                    </div>

                    {/* Book Info */}
                    <div className="sm:col-span-3 flex flex-col">
                      <a href={`/books/${book.slug}`}>
                        <h2 className="text-2xl font-bold text-primary mb-3 hover:underline">{book.title}</h2>
                      </a>
                      
                      <p className="text-foreground mb-4 leading-relaxed flex-grow">
                        {book.description}
                      </p>

                      {/* Review Snippet */}
                      <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < book.stars ? 'fill-secondary text-secondary' : 'text-secondary'}`} />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground italic">"{book.review}"</p>
                        <p className="text-xs text-muted-foreground mt-1">— {book.reviewer}</p>
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