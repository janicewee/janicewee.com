import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background flex items-center justify-center py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated Lion GIF - Linked to Home */}
          <Link href="/" className="inline-block mb-8 hover:opacity-90 transition-opacity">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/lion-1760678535747.gif"
              alt="Lion reading a book"
              className="w-64 h-64 mx-auto rounded-lg"
            />
          </Link>

          {/* 404 Heading */}
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          
          {/* Announcement Message */}
          <p className="text-2xl text-foreground mb-8">
            Oops! This page has moved. I think you'll find it{' '}
            <Link href="/books" className="text-primary hover:underline font-semibold">
              here
            </Link>
            .
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/books">Browse Books</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}