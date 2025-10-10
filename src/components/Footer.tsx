"use client"

import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setSubscribed(true)
    setTimeout(() => setSubscribed(false), 3000)
    setEmail('')
  }

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Janice Wee</h3>
            <p className="text-muted-foreground text-sm">
              Indie author of Christian speculative fiction featuring fantasy novels with faith and family themes.
            </p>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
              <Button type="submit" className="w-full">
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="mailto:info@janicewee.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Janice Wee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}