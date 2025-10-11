import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, User, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Blog - Janice Wee",
  description: "Read the latest posts from Janice Wee about writing, recipes, and life as an indie author.",
}

const blogPosts = [
  {
    id: 1,
    title: "Billy's a superhero!",
    date: "July 30, 2025",
    author: "Janice Wee",
    excerpt: "Billy Lionheart received super strength in Billy & Bluma. Double Trouble. When Billy and Bluma return to St Lydia's Academy to start the new school term, Billy's strength goes wild! At the same time, Leonard Lion, the secret agent of Immortal King Jayden, receives a gadget upgrade: flying gloves! The problem is, the poor lion can't get a handle on his new flying power! While on a school trip, someone poisons Leonard Lion and tries to kill Billy and friends. Who is it? Can Billy, Bluma and their new buddies stop the killer? Find out in Secret Hero & His Flying Lion.",
    imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&h=400&fit=crop",
    link: "https://www.goodreads.com/author_blog_posts/24686627-billy-s-a-superhero"
  },
  {
    id: 2,
    title: "My Fantasy Adventure Series: The Adventures of Billy Lionheart",
    date: "May 16, 2025",
    author: "Janice Wee",
    excerpt: "Billy Lionheart is a little orphan boy who yearns for his real parents. Due to an unfortunate accident, the boy ends up with a talking lion for his nanny. So begins my fantasy adventure series, The Adventures of Billy Lionheart. This exclusive book trailer picks up right where Billy The Lion Boy left off. It teases the newly released Billy & Bluma. Double Trouble.",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&h=400&fit=crop",
    link: "https://www.janicewee.com/billyseries.html"
  },
  {
    id: 3,
    title: "Double the Trouble with Billy & Bluma!",
    date: "May 2, 2025",
    author: "Janice Wee",
    excerpt: "Today marks the exciting release of Billy & Bluma: Double Trouble, the second book in The Adventures of Billy Lionheart series! Packed with heart-pounding action, divine miracles, and unbreakable friendship, this captivating tale is perfect for young readers and families who love stories of faith, courage, and adventure. Billy reunites with his childhood friend Bluma, and together they embark on a quest filled with danger, mystery, and divine intervention.",
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
    link: "https://www.janicewee.com/Emunah/billy2.html"
  },
  {
    id: 4,
    title: "Billy & Bluma: Double Trouble – Out May 2, 2025!",
    date: "May 1, 2025",
    author: "Janice Wee",
    excerpt: "Buckle up for a whirlwind adventure with Billy and Bluma, childhood friends whose reunion sparks chaos and courage! When Billy's immortal parents gift him a glowing, indestructible orb, a mischievous monkey swipes it, dropping it into Bluma's bread dough. Their lion guardian, Leonard, chomps into the loaf—only to break a tooth on the orb! Will Billy and Bluma outsmart Junta's cult? Can they rescue Leonard from a hunter's trap? Available May 2, 2025!",
    imageUrl: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=400&fit=crop",
    link: "https://www.janicewee.com/Emunah/billy2.html"
  },
  {
    id: 5,
    title: "Coming up next",
    date: "April 28, 2025",
    author: "Janice Wee",
    excerpt: "I'm thrilled to share that Billy & Bluma: Double Trouble, Book 2 in The Adventures of Billy Lionheart series, is launching on May 2, 2025, and it's packed with heart-pounding fun for middle-grade readers! If you love Narnia-inspired tales, quirky characters, and faith-filled adventures, this one's for you. Picture this: Billy, a boy who chats with animals, reunites with his childhood friend Bluma, who's kneading bread dough when a mischievous monkey drops a glowing, indestructible orb into it! Their lion guardian, Leonard, chomps into the loaf and—ouch!—breaks a tooth. What follows is pure hilarity: the kids tie Leonard's tooth to a boulder, roll it downhill, and crash—the tooth's out, but so is a mysterious porcelain box with a map and a coin bearing Aunt Mathilda's face.",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=400&fit=crop",
    link: "https://www.goodreads.com/author_blog_posts/24357896-coming-up-next"
  },
  {
    id: 6,
    title: "Featured Book: Billy The Lion Boy",
    date: "April 4, 2025",
    author: "Janice Wee",
    excerpt: "Four adults and one lion aren't enough to restrain the tiny boy with a murky past. This story continues after Mary's Flight ends. The dystopian era has ended. It's a time of true peace and harmony throughout the earth. The earth is a virtual paradise. Mortals and immortals live alongside one another. Man and animals get along. (Most of the time. Billy and Leonard the lion bicker a lot). This is the first book in my latest fantasy adventure series: The Adventures of Billy Lionheart.",
    imageUrl: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&h=400&fit=crop",
    link: "https://www.janicewee.com/Emunah/billy1.html"
  },
  {
    id: 7,
    title: "Welcome to the World of Billy Lionheart",
    date: "March 17, 2025",
    author: "Janice Wee",
    excerpt: "As a toddler, Billy witnessed inhuman monsters kill his parents while the wicked ran rampant. When the King of Kings and Lord of Lords returned to earth, to drive out evil, Billy was certain he saw his parents accompany Him. They were alive—transformed into immortals with superpowers! Mortals Mei, Boris, Ava and Leo raised the pint-sized escape artist, who was determined to find his real parents. Discover Billy The Lion Boy—a fantasy adventure about a runaway orphan boy, whose nanny is a lion.",
    imageUrl: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=800&h=400&fit=crop",
    link: "https://www.janicewee.com/Emunah/billy1.html"
  },
  {
    id: 8,
    title: "New Release! The Mark and The Martyr",
    date: "March 12, 2025",
    author: "Janice Wee",
    excerpt: "Emunah Short Story Collection Volume 2: The Mark and the Martyr plunges readers into the heart of Tribulation, where four face humanity's darkest hour. Collecting Books 5 to 8 of the Emunah Short Stories, this volume weaves a tapestry of suspense and salvation. From the sterile labs of Beast Corp to the smoldering ruins of survival camps, each tale pulses with thriller intensity. Save 57% on the ebook or 69% on the paperback for the last 4 books in the series!",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    link: "https://www.janicewee.com/Emunah/vol2.html"
  },
  {
    id: 9,
    title: "Clean Fiction for Faith-Filled Readers",
    date: "March 3, 2025",
    author: "Janice Wee",
    excerpt: "Looking for novels that tackle life's twists with hope, grounded in Christian values, and free of smut or swearing? Step into Janice Wee's world of clean, faith-inspired fiction—stories that feel real, stir the soul, and keep it wholesome. From Singapore's Runaway to Two Worlds, Before Harpazo to Naughty Little Nonya, discover realistic tales of life's struggles met with faith and grit, clean fiction for all ages, and a Christian spirit with hope and grace in every line.",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=400&fit=crop",
    link: "https://www.janicewee.com/books.html"
  }
]

export default function BlogPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-primary mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts on writing, faith, family, and the joy of storytelling
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Post Image */}
                    <div className="md:col-span-1">
                      <div className="relative aspect-video md:aspect-square">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="md:col-span-2 p-6 md:pl-0">
                      <h2 className="text-2xl font-bold text-primary mb-3 hover:text-primary/80 transition-colors">
                        {post.title}
                      </h2>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      <p className="text-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <Button asChild variant="outline">
                        <a href={post.link}>
                          Read More
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
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