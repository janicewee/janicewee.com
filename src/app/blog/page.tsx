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
    title: "Banana Scone Recipe - Perfect for Reading Time",
    date: "October 6, 2025",
    author: "Janice Wee",
    excerpt: "There's nothing quite like enjoying a freshly baked banana scone while diving into a good fantasy novel. Today, I'm sharing my favorite recipe that combines the sweetness of ripe bananas with the buttery texture of traditional scones. These are perfect companions for your afternoon tea and reading sessions.",
    imageUrl: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&h=400&fit=crop",
    link: "/blog/banana-scone-recipe"
  },
  {
    id: 2,
    title: "Writing Faith into Fantasy: My Journey",
    date: "September 15, 2025",
    author: "Janice Wee",
    excerpt: "Many readers ask me how I weave Christian themes into fantasy fiction. In this post, I share my creative process and the biblical principles that inspire my stories. From Dragon Unbound to the Billy Lionheart Series, faith has always been the foundation of my storytelling.",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=400&fit=crop",
    link: "/blog/writing-faith-into-fantasy"
  },
  {
    id: 3,
    title: "The Inspiration Behind Dragon Unbound",
    date: "August 22, 2025",
    author: "Janice Wee",
    excerpt: "After a thousand years... These opening words set the stage for an epic tale of redemption and awakening. In this post, I reveal the biblical themes and personal experiences that inspired Dragon Unbound, and how God's sovereignty shaped this powerful story.",
    imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=800&h=400&fit=crop",
    link: "/blog/inspiration-behind-dragon-unbound"
  },
  {
    id: 4,
    title: "Family Themes in Fantasy Fiction",
    date: "July 10, 2025",
    author: "Janice Wee",
    excerpt: "Family drama and relationships are at the heart of all my novels. Whether it's Billy's bond with his lion guardian or the family dynamics in The Quest For Immortality, these themes resonate deeply with readers. Here's why family matters in fantasy.",
    imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=400&fit=crop",
    link: "/blog/family-themes-in-fantasy"
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