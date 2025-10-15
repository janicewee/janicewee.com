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
    title: "Emunah Short Stories Book 1: Abigail",
    slug: "emunah-book-1-abigail",
    description: "A charming yet tragic love triangle explores true love, betrayal and hope through the eyes of Abigail Applewood.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book1abigail-1760410829274.jpg",
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com/Abigail-Emunah-Short-Stories-Janice/dp/B0D4SYB3NF" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/abigail-janice-wee/1145575901" }
    ]
  },
  {
    id: 2,
    title: "Emunah Short Stories Book 2: Oliver",
    slug: "emunah-book-2-oliver",
    description: "Grieving his brother's death, Oliver becomes an outlier in his pursuit of souls, but appearances are deceiving.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book2oliver-1760410830850.jpg",
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com/Oliver-Emunah-Short-Stories-Janice/dp/B0D6Q65HHG" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/oliver-janice-wee/1145730081" }
    ]
  },
  {
    id: 3,
    title: "Emunah Short Stories Book 3: Emunah",
    slug: "emunah-book-3-emunah",
    description: "Do aliens exists? What is the truth behind UFOs? A freshman's life spirals into a thrilling web of friendship, forbidden love, alien encounters, and dark conspiracies.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book3emunah-1760410828785.jpg",
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com/Emunah-Short-Stories-Janice-Wee/dp/B0D7QR9CBJ" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/emunah-janice-wee/1145849359" }
    ]
  },
  {
    id: 4,
    title: "Emunah Short Stories Book 4: John",
    slug: "emunah-book-4-john",
    description: "John, a penniless widow's son and 97-pound weakling, must win a weightlifting competition to save his mother's life.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book4john-1760410829487.jpg",
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com/John-Emunah-Short-Stories-Janice/dp/B0DB6DNSL4" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/john-janice-wee/1146057067" }
    ]
  },
  {
    id: 5,
    title: "Before Harpazo",
    slug: "before-harpazo",
    description: "A compilation of Emunah Short Stories Book 1 to Book 4. Four interconnected stories of faith, love, and divine intervention before the rapture.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/vol1-1760410867752.jpg",
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com.au/Before-Harpazo-1-Janice-Wee/dp/B0DCHMCFDK" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/before-harpazo-janice-wee/1146133654" }
    ]
  },
  {
    id: 6,
    title: "Emunah Short Stories Book 5: Mei",
    slug: "emunah-book-5-mei",
    description: "Mei faces impossible choices during the tribulation period, where faith and survival collide in unexpected ways.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book5mei-1760410829482.jpg",
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com.au/Mei-5-Janice-Wee/dp/B0DGDFTP31" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/mei-janice-wee/1146253390" }
    ]
  },
  {
    id: 7,
    title: "Emunah Short Stories Book 6: Liam's Dark Secrets",
    slug: "emunah-book-6-liams-dark-secrets",
    description: "Liam's hidden past comes to light as he navigates dangerous choices during humanity's darkest hour.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book6liam-1760410829493.jpg",
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com.au/Liams-Dark-Secrets-Janice-Wee/dp/B0DJRXQCV4" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/liams-dark-secrets-janice-wee/1146394455" }
    ]
  },
  {
    id: 8,
    title: "Emunah Short Stories Book 7: Lydia's 12 Christmases",
    slug: "emunah-book-7-lydias-12-christmases",
    description: "Peek into Lydia's private life as she transitions from a sheltered girl to a leader of the survivors and becomes their hero.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book7lydia-1760410829051.jpg",
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com.au/Lydias-12-Christmases-Janice-Wee/dp/B0DN3QDCWJ" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/lydias-12-christmases-janice-wee/1146520842" }
    ]
  },
  {
    id: 9,
    title: "Emunah Short Stories Book 8: Mary's Flight",
    slug: "emunah-book-8-marys-flight",
    description: "Who is the mysterious woman with eagle's wings, who visits Mary in her dreams?",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book8mary-1760410829856.jpg",
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com.au/Marys-Flight-8-Janice-Wee/dp/B0DSK1X348" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/marys-flight-janice-wee/1146790785" }
    ]
  },
  {
    id: 10,
    title: "The Mark and The Martyr",
    slug: "the-mark-and-the-martyr",
    description: "A compilation of Emunah Short Stories Book 5 to Book 8. Four powerful stories of faith, survival, and divine protection during the end times.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/markmartyr-1760410897201.jpg",
    buyLinks: [
      { name: "Amazon", url: "https://www.amazon.com.au/Mark-Martyr-2-Janice-Wee/dp/B0DZN43SH7" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/the-mark-and-the-martyr-janice-wee/1147095024" }
    ]
  },
  {
    id: 11,
    title: "Billy The Lion Boy",
    slug: "billy-the-lion-boy",
    description: "Billy is an orphan who yearns to be reunited with his parents. His guardian is a lion who is his fierce protector despite the youngster's penchant for mischief.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billylionheart-1760074636207.jpg",
    review: "An entertaining and imaginative story. Fun to read with a gentle perspective on love and loss.",
    reviewer: "Kindle Customer",
    stars: 4,
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/u/mdxKd5" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/s/billy%20the%20lion%20boy%20janice%20wee" }
    ]
  },
  {
    id: 12,
    title: "Billy & Bluma: Double Trouble",
    slug: "billy-bluma-double-trouble",
    description: "Billy reunites with his childhood friend Bluma, and together they stumble upon a mysterious glowing orb that leads to their greatest adventure yet.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billybluma-1760074636547.jpg",
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/u/mYeeQP" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/s/billy%20bluma%20double%20trouble%20janice%20wee" }
    ]
  },
  {
    id: 13,
    title: "Secret Hero & His Flying Lion",
    slug: "secret-hero-flying-lion",
    description: "Billy's super strength goes wild at St Lydia's Academy, while Leonard Lion receives flying gloves he can't control. Can they stop a killer before it's too late?",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billyhero-1760074637493.jpg",
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/u/bpgDOX" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/s/secret%20hero%20flying%20lion%20janice%20wee" }
    ]
  },
  {
    id: 14,
    title: "Emunah Book 1: Disturbing Dreams",
    slug: "emunah-book-1-disturbing-dreams",
    description: "The first novelette in the Emunah Chronicles. A young woman's disturbing dreams reveal a prophetic glimpse into the future.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book1-1760411021422.jpg",
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/ap/8G2gQM/Janice-Wee" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com" }
    ]
  },
  {
    id: 15,
    title: "Emunah Book 2: The Beast's Mark",
    slug: "emunah-book-2-the-beasts-mark",
    description: "The second novelette in the Emunah Chronicles. As prophecy unfolds, believers face the ultimate test of faith during the tribulation.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book2-1760411038422.jpg",
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/u/38Wwjr" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/the-beasts-mark-janice-wee/1143737088" }
    ]
  },
  {
    id: 16,
    title: "The Quest for Immortality",
    slug: "quest-for-immortality",
    description: "A dystopian to utopian prophecy tale. Is transhumanism the key to immortality? One path leads to death while another to the brightest hope of eternity.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book3k-1760074872135.jpg",
    review: "Fiction or Reality? Is this the future? A must read. The author is creative & insightful in weaving a story that grips you to the very end.",
    reviewer: "Yvonne Sequerah",
    stars: 5,
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/u/boXak1" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/s/quest%20for%20immortality%20janice%20wee" }
    ]
  },
  {
    id: 17,
    title: "Dragon Unbound",
    slug: "dragon-unbound",
    description: "After a thousand years, the prophecy comes true. Dragon is released from his prison. The epic finale to the Emunah Chronicles.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/dragonunbound-1760074636345.jpg",
    review: "A must-read for fans of Christian speculative fiction, Janice Wee's Dragon Unbound plunges readers into a vibrant narrative set during the Millennial Kingdom.",
    reviewer: "Ting Chin",
    stars: 5,
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/u/4NJ9p9" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/s/dragon%20unbound%20janice%20wee" }
    ]
  },
  {
    id: 18,
    title: "Singapore's Runaway",
    slug: "singapores-runaway",
    description: "A captivating tale set in Singapore, exploring themes of friendship, freedom and finding one's place in the world.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/runaway-1760410193575.jpg",
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/u/mV0WoM" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/singapores-runaway-janice-wee/1143158544" }
    ]
  },
  {
    id: 19,
    title: "Two Worlds",
    slug: "two-worlds",
    description: "Star-crossed lovers. The mystery man is a fugitive from the island city Singapore, while Daddy's girl is a kampong girl in Indonesia.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/2worlds-1760410225289.jpg",
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/u/bWYxA1" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/two-worlds-janice-wee/1144978614" }
    ]
  },
  {
    id: 20,
    title: "Naughty Little Nonya",
    slug: "naughty-little-nonya",
    description: "A charming collection of children's short stories celebrating Peranakan culture with mischief and heart.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/naughtylittlenonya-1760411118774.jpeg",
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/u/bwNjzZ" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/naughty-little-nonya-janice-wee/1143421712" }
    ]
  },
  {
    id: 21,
    title: "Little Nonya's Escapades",
    slug: "little-nonyas-escapades",
    description: "A true life tale about a girl who might have dyslexia, certainly has two left feet, and somehow tops the class every year.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/littlenonyaescapades-1760411108648.jpg",
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/u/3LjoN1" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/little-nonyas-escapades-janice-wee/1143816075" }
    ]
  },
  {
    id: 22,
    title: "Sweetcorn Suzie",
    slug: "sweetcorn-suzie",
    description: "Seven short stories, each depicting real life memories that are too wild to believe.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Suzie-1760410252107.jpg",
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/u/mg5XDq" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/sweetcorn-suzie-janice-wee/1144699682" }
    ]
  },
  {
    id: 23,
    title: "Escape to Long Hill",
    slug: "escape-to-long-hill",
    description: "A journey of escape and discovery leads to Long Hill, where new beginnings await.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Longhill12-1760410284805.jpg",
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/u/mVY6gP" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/escape-to-long-hill-janice-wee/1144828376" }
    ]
  },
  {
    id: 24,
    title: "Chico & Yvette",
    slug: "chico-and-yvette",
    description: "A very short, chicken tale of love triangles, and laughter, with heart melting moments.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/chicoyvette-1760410316628.jpg",
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/u/mVY6gP" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/escape-to-long-hill-janice-wee/1144828376" }
    ]
  },
  {
    id: 25,
    title: "Max The Cat",
    slug: "max-the-cat",
    description: "Join Max the Cat and his sleuth buddy Monroe Mongoose as they solve the mystery - who kidnapped Max's human?",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/maxthecat-1760410341047.jpg",
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/u/m2Kklr" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/max-the-cat-janice-wee/1145041009" }
    ]
  },
  {
    id: 26,
    title: "The Scouts",
    slug: "the-scouts",
    description: "An exciting tale of courage, teamwork, and faith as young scouts embark on their greatest adventure.",
    coverUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/scouts-1760410358286.jpg",
    buyLinks: [
      { name: "Books2Read", url: "https://books2read.com/u/bMEzja" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/the-scouts-janice-wee/1145466473" }
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