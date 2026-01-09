"use client"

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Script from 'next/script'

export default function EmunahTimelinePage() {
  return (
    <>
      {/* Structured Data for Book Series */}
      <Script id="schema-book-series" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BookSeries",
          "name": "Emunah Chronicles",
          "author": {
            "@type": "Person",
            "name": "Janice Wee"
          },
          "description": "An epic Christian speculative fiction series spanning the Pre-Tribulation Rapture, the 7-Year Tribulation, and the Millennial Kingdom, exploring biblical prophecy through interconnected stories of faith, family, and divine intervention.",
          "genre": ["Christian Fiction", "Speculative Fiction", "Fantasy", "Apocalyptic Fiction"],
          "about": ["Biblical Prophecy", "End Times", "Rapture", "Tribulation", "Millennial Kingdom", "Spiritual Warfare"],
          "url": "https://janicewee.com/emunah-timeline"
        })}
      </Script>

      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary mb-4">Emunah Chronicles Timeline</h1>
          <p className="text-xl text-muted-foreground">A Journey Through the End Times and Beyond</p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Unravel the Epic Saga of Faith and Destiny</h2>
          <p className="text-lg text-foreground leading-relaxed">
            Dive into the <em>Emunah Chronicles</em> and related tales by Janice Wee, where ordinary lives collide with extraordinary events—alien conspiracies, spiritual warfare, and the ultimate reign of Christ. Set against the biblical backdrop of the Pre-Tribulation Rapture, the 7-Year Tribulation, and the Millennial Kingdom, these stories will grip your imagination and stir your soul. Ready to explore? Follow the timeline below and grab your next read!
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold text-center text-primary mb-16">Timeline of Events</h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/30 top-0 bottom-0"></div>

          {/* Before the Rapture */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center md:text-left">Before the Rapture</h3>
            
            {/* Disturbing Dreams */}
            <TimelineItem
              align="left"
              title="Disturbing Dreams"
              imageUrl="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book1-1760411021422.jpg"
              imageAlt="Disturbing Dreams book cover - pre-rapture thriller featuring sentient AI Asher and corporate conspiracy"
              description="Disturbing Dreams haunt Emunah and her friends. Are these products of overactive imaginations or are they prophetic?"
              link="/books/emunah-book-1-disturbing-dreams"
              linkText="Read more"
            />

            {/* Abigail */}
            <TimelineItem
              align="right"
              title="Abigail"
              imageUrl="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book1abigail-1760404534946.jpg"
              imageAlt="Abigail book cover - tragic love triangle exploring true love, betrayal and supernatural deception"
              description="Abigail Applewood's tragic tale unfolds as a mysterious, gorgeous stranger sweeps her off her feet. Is he her true love, or something more sinister? A story of longing and loss that hits close to home."
              link="/books/emunah-book-1-abigail"
              linkText="Discover her fate"
            />

            {/* Oliver */}
            <TimelineItem
              align="left"
              title="Oliver"
              imageUrl="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book2oliver-1760404534983.jpg"
              imageAlt="Oliver book cover - spiritual warfare story about soul-winner confronting ancient evil"
              description="Oliver, a soul-winner, catches the eye of an ancient evil. As he uncovers his sister's talks with their parents' ghosts and rescues his family, a deeper spiritual battle brews. Will he stand firm?"
              link="/books/emunah-book-2-oliver"
              linkText="Find out"
            />

            {/* Emunah */}
            <TimelineItem
              align="right"
              title="Emunah"
              imageUrl="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book3emunah-1760404534743.jpg"
              imageAlt="Emunah book cover - thriller about freshman encountering aliens, forbidden love and strange visions"
              description="Emunah's new life on a different continent takes a wild turn—friendship, romance, and an existential crisis collide with alien obsessions and strange visions. Overlaps with *Disturbing Dreams*—don't miss her story!"
              link="/books/emunah-book-3-emunah"
              linkText="Grab it here"
            />

            {/* John */}
            <TimelineItem
              align="left"
              title="John"
              imageUrl="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book4john-1760404535976.jpg"
              imageAlt="John book cover - inspirational story about scrawny bookworm becoming weightlifting champion"
              description="Scrawny bookworm John must become a weightlifting champion to save his dying mother from a ruthless enemy. A short, thrilling tale of family, friendship, and faith."
              link="/books/emunah-book-4-john"
              linkText="Read it now"
            />
          </div>

          {/* After the Rapture */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center md:text-left">After the Rapture</h3>
            
            {/* Mei */}
            <TimelineItem
              align="right"
              title="Mei"
              imageUrl="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book5mei-1760410829482.jpg"
              imageAlt="Mei book cover - tribulation period story about scientist fleeing Beast Corp's clone program"
              description="A former Beast Corp scientist uncovers a terrifying secret behind their super clone program. Fleeing persecution, she trains as a pilot to save outcasts in a chaotic, post-Rapture world."
              link="/books/emunah-book-5-mei"
              linkText="Join her fight"
            />

            {/* The Beast's Mark */}
            <TimelineItem
              align="left"
              title="The Beast's Mark"
              imageUrl="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book2-1760411038422.jpg"
              imageAlt="The Beast's Mark book cover - post-rapture mystery about enigmatic leader promising utopia"
              description="After *The Vanishing*, an enigmatic figure promises global Utopia amid chaos and disasters. Is he mankind's savior or the Antichrist? A gripping post-Rapture mystery awaits!"
              link="/books/emunah-book-2-the-beasts-mark"
              linkText="Get it today"
            />

            {/* Liam's Dark Secrets */}
            <TimelineItem
              align="right"
              title="Liam's Dark Secrets"
              imageUrl="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book6liam-1760410829493.jpg"
              imageAlt="Liam's Dark Secrets book cover - thriller about cunning billionaire church leader during tribulation"
              description="Liam, a cunning billionaire and church leader, thrives on trust—until the rules change. Can you dance with the devil and escape? A tale of love, betrayal, and reckoning."
              link="/books/emunah-book-6-liams-dark-secrets"
              linkText="Uncover his secrets"
            />

            {/* Lydia's 12 Christmases */}
            <TimelineItem
              align="left"
              title="Lydia's 12 Christmases"
              imageUrl="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book7lydia-1760410829051.jpg"
              imageAlt="Lydia's 12 Christmases book cover - coming of age story during tribulation period"
              description="Lydia's journey through loss and love molds her into a hero in a post-Rapture world. A heartfelt saga of growth and destiny."
              link="/books/emunah-book-7-lydias-12-christmases"
              linkText="Experience her story"
            />

            {/* Mary's Flight */}
            <TimelineItem
              align="right"
              title="Mary's Flight"
              imageUrl="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book8mary-1760410829856.jpg"
              imageAlt="Mary's Flight book cover - prophetic story about mysterious woman with eagle's wings"
              description="Who is the mysterious woman with eagle's wings, who visits Mary in her dreams?"
              link="/books/emunah-book-8-marys-flight"
              linkText="Take flight with her"
            />
          </div>

          {/* Millennial Kingdom */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center md:text-left">Millennial Kingdom</h3>
            
            {/* Billy The Lion Boy */}
            <TimelineItem
              align="left"
              title="Billy The Lion Boy"
              imageUrl="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billylionheart-1760404534476.jpg"
              imageAlt="Billy The Lion Boy book cover - heartwarming adventure about orphan with lion guardian during Christ's reign"
              description="In Christ's 1000-year reign, orphan Billy discovers his parents have returned as immortal priests. A heartwarming adventure in a redeemed world!"
              link="/books/billy-the-lion-boy"
              linkText="Meet Billy"
            />

            {/* Billy & Bluma: Double Trouble */}
            <TimelineItem
              align="right"
              title="Billy & Bluma: Double Trouble"
              imageUrl="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billybluma-1760404534699.jpg"
              imageAlt="Billy & Bluma Double Trouble book cover - action adventure with childhood friends and talking lion"
              description="Billy & Bluma who were inseparable as toddlers during the Great Tribulation, moved to different cities during the Millennial Reign of Christ. They are reunited, thanks to Leonard Lion. Billy and Bluma join forces to double the lion's headache in a thrilling, fun filled, heartwarming caper!"
              link="/books/billy-bluma-double-trouble"
              linkText="Join the adventure"
            />

            {/* Secret Hero & His Lion Guardian */}
            <TimelineItem
              align="left"
              title="Secret Hero & His Lion Guardian"
              imageUrl="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billyhero-1760404535888.jpg"
              imageAlt="Secret Hero & His Flying Lion book cover - YA fantasy about Billy with super strength at academy"
              description="Billy & Bluma enrol in St Lydia's Academy. Together with their flying lion Poppa Leonard, they unravel a deadly conspiracy threatening their friends at St. Lydia's Academy in the thrilling Secret Hero & His Flying Lion! St Lydia's Academy has heroes in training!"
              link="/books/secret-hero-flying-lion"
              linkText="Enroll now"
            />

            {/* Dragon Unbound */}
            <TimelineItem
              align="right"
              title="Dragon Unbound"
              imageUrl="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/dragonunbound-1760404534966.jpg"
              imageAlt="Dragon Unbound book cover - epic finale featuring final battle between good and evil in Millennial Kingdom"
              description="In a realm of immortals and lions, mortals Billy and Bluma cling to their love as ancient dragons stir and prophetic destinies unfold. An epic tale of faith, family, and the final battle."
              link="/books/dragon-unbound"
              linkText="Join the Adventure"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

interface TimelineItemProps {
  align: 'left' | 'right'
  title: string
  imageUrl: string
  imageAlt: string
  description: string
  link: string
  linkText: string
}

function TimelineItem({ align, title, imageUrl, imageAlt, description, link, linkText }: TimelineItemProps) {
  return (
    <div className={`relative mb-12 md:mb-16 ${align === 'left' ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto md:text-left'} md:w-1/2`}>
      {/* Timeline Dot */}
      <div className={`hidden md:block absolute top-6 w-5 h-5 bg-secondary rounded-full border-4 border-background z-10 ${align === 'left' ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`}></div>
      
      {/* Content Card */}
      <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <div className="p-6">
          <a href={link} className="block">
            <h3 className="text-2xl font-bold text-primary mb-4 hover:underline">{title}</h3>
          </a>
          <a href={link} className="block relative aspect-[2/3] w-48 mx-auto mb-4 hover:opacity-80 transition-opacity">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              unoptimized
              className="object-cover rounded"
            />
          </a>
          <p className="text-foreground mb-4 leading-relaxed">{description}</p>
          <Button asChild variant="default" className="w-full">
            <a href={link}>
              {linkText}
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}