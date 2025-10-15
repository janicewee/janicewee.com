"use client"

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-primary mb-4">Contact Me</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'd love to hear from you! Whether you have questions about my books, 
              want to share your thoughts, or just want to connect.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Send a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-secondary/20 border border-secondary rounded-lg text-foreground">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-destructive/20 border border-destructive rounded-lg text-foreground">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is your message about?"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message here..."
                    rows={8}
                    disabled={isSubmitting}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Required fields
                </p>
              </form>
            </Card>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <Card className="p-8 bg-muted/30">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Connect on Social Media
                </h3>
                <p className="text-foreground mb-6">
                  Follow me on social media for updates on new releases, writing insights, 
                  and behind-the-scenes glimpses into my creative process.
                </p>
                <div className="flex justify-center gap-4">
                  <Button asChild variant="outline">
                    <a href="/blog">Read My Blog</a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="/books">Browse My Books</a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}