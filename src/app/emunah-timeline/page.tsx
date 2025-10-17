"use client"

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function EmunahTimelinePage() {
  return (
    <>
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
              imageUrl="https://www.janicewee.com/Emunah/images/book1.jpg"
              description="A sentient AI named Access fights to save Emunah, uncovering a chilling corporate conspiracy involving aliens and the supernatural. As her world spirals, an eerie truth emerges—one that might just be our near future."
              link="https://www.janicewee.com/Emunah/book1.html"
              linkText="Get it now!"
            />

            {/* Abigail */}
            <TimelineItem
              align="right"
              title="Abigail"
              imageUrl="https://www.janicewee.com/Emunah/images/book1abigail.jpg"
              description="Abigail Applewood's tragic tale unfolds as a mysterious, gorgeous stranger sweeps her off her feet. Is he her true love, or something more sinister? A story of longing and loss that hits close to home."
              link="https://www.janicewee.com/Emunah/book1abigail.html"
              linkText="Discover her fate!"
            />

            {/* Oliver */}
            <TimelineItem
              align="left"
              title="Oliver"
              imageUrl="https://www.janicewee.com/Emunah/images/book2oliver.jpg"
              description="Oliver, a soul-winner, catches the eye of an ancient evil. As he uncovers his sister's talks with their parents' ghosts and rescues his family, a deeper spiritual battle brews. Will he stand firm?"
              link="https://www.janicewee.com/Emunah/book2oliver.html"
              linkText="Find out!"
            />

            {/* Emunah */}
            <TimelineItem
              align="right"
              title="Emunah"
              imageUrl="https://www.janicewee.com/Emunah/images/book3emunah.jpg"
              description="Emunah's new life on a different continent takes a wild turn—friendship, romance, and an existential crisis collide with alien obsessions and strange visions. Overlaps with *Disturbing Dreams*—don't miss her story!"
              link="https://www.janicewee.com/Emunah/book3emunah.html"
              linkText="Grab it here!"
            />

            {/* John */}
            <TimelineItem
              align="left"
              title="John"
              imageUrl="https://www.janicewee.com/Emunah/images/book4john.jpg"
              description="Scrawny bookworm John must become a weightlifting champion to save his dying mother from a ruthless enemy. A short, thrilling tale of family, friendship, and faith."
              link="https://www.janicewee.com/Emunah/book4john.html"
              linkText="Read it now!"
            />
          </div>

          {/* After the Rapture */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center md:text-left">After the Rapture</h3>
            
            {/* Mei */}
            <TimelineItem
              align="right"
              title="Mei"
              imageUrl="https://www.janicewee.com/Emunah/images/book5mei.jpg"
              description="A former Beast Corp scientist uncovers a terrifying secret behind their super clone program. Fleeing persecution, she trains as a pilot to save outcasts in a chaotic, post-Rapture world."
              link="https://www.janicewee.com/Emunah/book5mei.html"
              linkText="Join her fight!"
            />

            {/* The Beast's Mark */}
            <TimelineItem
              align="left"
              title="The Beast's Mark"
              imageUrl="https://www.janicewee.com/Emunah/images/book2.jpg"
              description="After *The Vanishing*, an enigmatic figure promises global Utopia amid chaos and disasters. Is he mankind's savior or the Antichrist? A gripping post-Rapture mystery awaits!"
              link="https://www.janicewee.com/Emunah/book2.html"
              linkText="Get it today!"
            />

            {/* Liam's Dark Secrets */}
            <TimelineItem
              align="right"
              title="Liam's Dark Secrets"
              imageUrl="https://www.janicewee.com/Emunah/images/book6liam.jpg"
              description="Liam, a cunning billionaire and church leader, thrives on trust—until the rules change. Can you dance with the devil and escape? A tale of love, betrayal, and reckoning."
              link="https://www.janicewee.com/Emunah/book6liam.html"
              linkText="Uncover his secrets!"
            />

            {/* Lydia's 12 Christmases */}
            <TimelineItem
              align="left"
              title="Lydia's 12 Christmases"
              imageUrl="https://www.janicewee.com/Emunah/images/book7lydia.jpg"
              description="Lydia's journey through loss and love molds her into a hero in a post-Rapture world. A heartfelt saga of growth and destiny."
              link="https://www.janicewee.com/Emunah/book7lydia.html"
              linkText="Experience her story!"
            />

            {/* Mary's Flight */}
            <TimelineItem
              align="right"
              title="Mary's Flight"
              imageUrl="https://www.janicewee.com/Emunah/images/book8mary.jpg"
              description="Saved from a lynching, Mary finds love and fulfills an ancient prophecy in a turbulent, post-Rapture era. A story of hope and redemption."
              link="https://www.janicewee.com/Emunah/book8mary.html"
              linkText="Take flight with her!"
            />
          </div>

          {/* Millennial Kingdom */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center md:text-left">Millennial Kingdom</h3>
            
            {/* Billy The Lion Boy */}
            <TimelineItem
              align="left"
              title="Billy The Lion Boy"
              imageUrl="https://www.janicewee.com/Emunah/images/billylionheart.jpg"
              description="In Christ's 1000-year reign, orphan Billy discovers his parents have returned as immortal priests. A heartwarming adventure in a redeemed world!"
              link="https://www.janicewee.com/Emunah/billy1.html"
              linkText="Meet Billy!"
            />

            {/* Billy & Bluma: Double Trouble */}
            <TimelineItem
              align="right"
              title="Billy & Bluma: Double Trouble"
              imageUrl="https://www.janicewee.com/Emunah/images/billybluma.jpg"
              description="Billy & Bluma who were inseparable as toddlers during the Great Tribulation, moved to different cities during the Millennial Reign of Christ. They are reunited, thanks to Leonard Lion. Billy and Bluma join forces to double the lion's headache in a thrilling, fun filled, heartwarming caper!"
              link="https://www.janicewee.com/Emunah/billy2.html"
              linkText="Join the adventure!"
            />

            {/* Secret Hero & His Lion Guardian */}
            <TimelineItem
              align="left"
              title="Secret Hero & His Lion Guardian"
              imageUrl="https://www.janicewee.com/Emunah/images/secrethero.jpg"
              description="Billy & Bluma enrol in St Lydia's Academy. Together with their flying lion Poppa Leonard, they unravel a deadly conspiracy threatening their friends at St. Lydia's Academy in the thrilling Secret Hero & His Flying Lion! St Lydia's Academy has heroes in training!"
              link="https://www.janicewee.com/Emunah/billy3.html"
              linkText="Enroll now!"
            />

            {/* Dragon Unbound */}
            <TimelineItem
              align="right"
              title="Dragon Unbound"
              imageUrl="https://www.janicewee.com/Emunah/images/dragonunbound.jpg"
              description="In a realm of immortals and lions, mortals Billy and Bluma cling to their love as ancient dragons stir and prophetic destinies unfold. An epic tale of faith, family, and the final battle."
              link="https://www.janicewee.com/Emunah/dragonunbound.html"
              linkText="Unleash the dragon!"
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
  description: string
  link: string
  linkText: string
}

function TimelineItem({ align, title, imageUrl, description, link, linkText }: TimelineItemProps) {
  return (
    <div className={`relative mb-12 md:mb-16 ${align === 'left' ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto md:text-left'} md:w-1/2`}>
      {/* Timeline Dot */}
      <div className={`hidden md:block absolute top-6 w-5 h-5 bg-secondary rounded-full border-4 border-background z-10 ${align === 'left' ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`}></div>
      
      {/* Content Card */}
      <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
          <div className="relative aspect-[2/3] w-48 mx-auto mb-4">
            <Image
              src={imageUrl}
              alt={`${title} Cover`}
              fill
              className="object-cover rounded"
            />
          </div>
          <p className="text-foreground mb-4 leading-relaxed">{description}</p>
          <Button asChild variant="default" className="w-full">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {linkText}
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}