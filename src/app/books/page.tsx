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
    description: "After a thousand years, the prophecy comes true. Dragon is released from his prison. With his band of fallen angels, he gathers the nations around the globe to wage war against the saints in the Holy City. The epic finale to the Emunah Chronicles.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/dragonunbound-1760074636345.jpg",
    review: "A must-read for fans of Christian speculative fiction, Janice Wee's Dragon Unbound plunges readers into a vibrant narrative set during the Millennial Kingdom, where biblical prophecy unfolds amidst the everyday lives of mortals and immortals alike.",
    reviewer: "Ting Chin",
    stars: 5,
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/dragonunbound" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/s/dragon%20unbound%20janice%20wee" }
    ]
  },
  {
    id: 2,
    title: "Billy The Lion Boy",
    slug: "billy-the-lion-boy",
    description: "Billy is an orphan who yearns to be reunited with his parents. His guardian is a lion who is his fierce protector despite the youngster's penchant for mischief. Follow their adventures in this heartwarming tale of courage, faith, and divine protection.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billylionheart-1760074636207.jpg",
    review: "An entertaining and imaginative story. Fun to read with a gentle perspective on love and loss. Billy is an orphan who yearns to be reunited with his parents. His guardian is a lion who is his fierce protector despite the youngster's penchant for mischief.",
    reviewer: "Kindle Customer",
    stars: 4,
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/billythelionboy" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/s/billy%20the%20lion%20boy%20janice%20wee" }
    ]
  },
  {
    id: 3,
    title: "Billy & Bluma: Double Trouble",
    slug: "billy-bluma-double-trouble",
    description: "Billy reunites with his childhood friend Bluma, and together they stumble upon a mysterious glowing orb that leads to their greatest adventure yet. With Leonard Lion by their side, the duo faces challenges that will test their friendship and faith.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billybluma-1760074636547.jpg",
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/billyblumadoubletrouble" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/s/billy%20bluma%20double%20trouble%20janice%20wee" }
    ]
  },
  {
    id: 4,
    title: "Secret Hero & His Flying Lion",
    slug: "secret-hero-flying-lion",
    description: "Billy's super strength goes wild at St Lydia's Academy, while Leonard Lion receives flying gloves he can't control. When someone poisons Leonard and tries to kill Billy and friends, can they stop the killer before it's too late?",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billyhero-1760074637493.jpg",
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/secretheroflyinglion" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/s/secret%20hero%20flying%20lion%20janice%20wee" }
    ]
  },
  {
    id: 5,
    title: "The Quest For Immortality",
    slug: "quest-for-immortality",
    description: "A dystopian to utopian prophecy tale. In a world where death seems to reign supreme, one family's faith leads them on a quest that spans from the darkest tribulation to the brightest hope of eternity. This powerful narrative explores God's ultimate plan for redemption.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book3k-1760074872135.jpg",
    review: "Fiction or Reality? Is this the future? A must read. The author is creative & insightful in weaving a story that grips you to the very end.",
    reviewer: "Yvonne Sequerah",
    stars: 5,
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/questforimmortality" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/s/quest%20for%20immortality%20janice%20wee" }
    ]
  },
  {
    id: 6,
    title: "Billy Lionheart Series",
    slug: "billy-lionheart-series",
    description: "Follow Billy's complete journey through this epic fantasy series where faith, family, and destiny intertwine. Experience the full saga of courage, redemption, and divine purpose as Billy grows from an orphan boy to a hero of legendary proportions.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billyhero-1760074637493.jpg",
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

                      {/* Review Snippet - Only show if review exists */}
                      {book.review && (
                        <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                          <div className="flex mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < (book.stars || 0) ? 'fill-secondary text-secondary' : 'text-secondary'}`} />
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground italic">"{book.review}"</p>
                          <p className="text-xs text-muted-foreground mt-1">— {book.reviewer}</p>
                        </div>
                      )}

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