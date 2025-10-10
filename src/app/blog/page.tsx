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
    title: "Coming up next",
    date: "April 28, 2025",
    author: "Janice Wee",
    excerpt: "I'm thrilled to share that Billy & Bluma: Double Trouble, Book 2 in The Adventures of Billy Lionheart series, is launching on May 2, 2025, and it's packed with heart-pounding fun for middle-grade readers! If you love Narnia-inspired tales, quirky characters, and faith-filled adventures, this one's for you. Picture this: Billy, a boy who chats with animals, reunites with his childhood friend Bluma, who's kneading bread dough when a mischievous monkey drops a glowing, indestructible orb into it! Their lion guardian, Leonard, chomps into the loaf and—ouch!—breaks a tooth. What follows is pure hilarity: the kids tie Leonard's tooth to a boulder, roll it downhill, and crash—the tooth's out, but so is a mysterious porcelain box with a map and a coin bearing Aunt Mathilda's face.",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=400&fit=crop",
    link: "https://www.goodreads.com/author_blog_posts/24357896-coming-up-next"
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