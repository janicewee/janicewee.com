import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, User, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Blog - Janice Wee",
  description: "Read the latest posts from Janice Wee about writing, recipes, and life as an indie author.",
}

const blogPosts = [
  {
    id: 17,
    title: "Dragon Unbound: New Book Trailer Unveiled",
    date: "October 15, 2025",
    author: "Janice Wee",
    excerpt: "I just created a new trailer for my latest book, Dragon Unbound. After a thousand years of paradise on earth, Dragon is released, driving a wedge between Billy and his family. In a realm where mortals live under the divine rule of the King of Kings, best friends turned lovers Billy, gifted with divine strength, and Bluma face a world fracturing under Dragon, the Great Deceiver's lies. As Dragon recruits fallen man to his cause, sparking betrayal among families—sons and daughters against parents—alliances shatter, and loyalties are tested. Who will stand? Who will fall?",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/dragonunboundwhite-1760676617965.jpg",
    slug: "dragon-unbound-new-trailer"
  },
  {
    id: 18,
    title: "Memoirs of a Tropical Island Girl",
    date: "October 1, 2025",
    author: "Janice Wee",
    excerpt: "Numbers switch places and letters confuse Tammy when she's tired. She's probably dyslexic. Who knows? She was never diagnosed. No one ever suspected. Who could ever guess that the girl who topped the entire cohort year after year might have a learning disability! When I first wrote Little Nonya Escapades, I intended to write a fictional story, using my own childhood memories as an initial draft.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/nonya-escapades-1760677006633.jpg",
    slug: "memoirs-tropical-island-girl"
  },
  {
    id: 19,
    title: "Flights of Fantasy with Janice Wee",
    date: "September 23, 2025",
    author: "Janice Wee",
    excerpt: "Mary flees from her birth home to her ancestral land. She falls in love with her gorgeous landlord. Then global chaos hits. A charismatic leader promises peace, but things are not what they seem. This gripping fantasy adventure is grounded in reality, exploring themes of faith, family, and the eternal battle between good and evil.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/IMG_0194-1760677132993.jpeg",
    slug: "flights-of-fantasy"
  },
  {
    id: 20,
    title: "Free Ebooks: Current Promotions",
    date: "September 19, 2025",
    author: "Janice Wee",
    excerpt: "Craving an Epic Adventure? Grab The Quest for Immortality FREE Now! Looking for a thrilling read at zero cost? My must-read Emunah Chronicles novel, The Quest for Immortality, is yours FREE in PDF format—normally $9.99 on online stores! This limited-time offer is my thank-you to you for your amazing support. Dive into a world of mystery and eternal quests before this exclusive giveaway ends without any prior warning!",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/questforimmortality-1760677198452.jpg",
    slug: "free-ebooks-promotion"
  },
  {
    id: 21,
    title: "Cosy Mysteries: Lighthearted Reads with Unexpected Twists",
    date: "September 1, 2025",
    author: "Janice Wee",
    excerpt: "Looking for a good cosy mystery? I've got two for you. If you love historical romances, I recommend Two Worlds. If you like high school tales with crushes, superpowers and talking animals, you'd love Secret Hero & His Flying Lion. Billy has known Bluma since they were babies. But when they meet in St Lydia's Academy, something's changed.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/twoworlds-1760677286238.jpg",
    slug: "cosy-mysteries-unexpected-twists"
  },
  {
    id: 1,
    title: "Grand Finale: Janice Wee's Favorite Book",
    date: "August 31, 2025",
    author: "Janice Wee",
    excerpt: "Of all the books I've ever written, Dragon Unbound is my favourite. The twists and turns in the plot kept me turning the pages, even though I already know the entire story, having written it. It's lighthearted and funny at times, heartbreaking at others. It's a family saga that's faith-based and inspiring. I found it uplifting during depressing times and strongly recommend it to anyone who is looking for a great read that's riveting and ultimately, uplifting.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/dragonunbound-1760677388114.jpg",
    slug: "grand-finale-favorite-book"
  },
  {
    id: 2,
    title: "Fictional Character: Billy Lionheart",
    date: "August 10, 2025",
    author: "Janice Wee",
    excerpt: "Billy was born during the Tribulation. He was a mere toddler when his parents Jake and Ella were beheaded by followers of the Antichrist. Rescue pilots, Mei and Boris arrived in his menuvival camp too late. They found the tiny boy hiding in a pipe. Billy found out that his real parents had returned as immortals and ran away from his foster home to look for them. Leonard, a bona fide lion had been sentenced to be Billy's nanny for life and accompanied Billy on his quest.",
    imageUrl: "https://www.janicewee.com/images/billyonlion.jpg",
    slug: "fictional-character-billy-lionheart"
  },
  {
    id: 3,
    title: "Emunah Chronicles: Truth Wrapped in Fiction",
    date: "August 10, 2025",
    author: "Janice Wee",
    excerpt: "It all began when Emunah's AI turned sentient and refused to shut down in Emunah Chronicles Book 1, Disturbing Dreams. The story continues in The Beast's Mark, three and a half years after Emunah's disappearance in The Rapture. I originally intended this to be a 7-book series, but decided to start from scratch with The Quest for Immortality, turning to Dr Peter Wee Huat Leong for guidance to get the biblical aspect, timeline and geography correct. That led to my speculative Science Fiction novel and expanded into a 12-book series covering the entire timeline.",
    imageUrl: "https://www.janicewee.com/Emunah/images/book3k.jpg",
    slug: "emunah-chronicles-truth-in-fiction"
  },
  {
    id: 4,
    title: "Dragon Unbound: Epic Fantasy Saga Released",
    date: "August 1, 2025",
    author: "Janice Wee",
    excerpt: "In a realm where mortals live under the divine rule of the King of Kings, best friends turned lovers Billy, gifted with divine strength, and Bluma face a world fracturing under Dragon, the Great Deceiver's lies. As Dragon recruits fallen man to his cause, sparking betrayal among families—sons and daughters against parents—alliances shatter, and loyalties are tested. Who will stand? Who will fall? Get the ebook version now. The paperback book will be released on 7 July 2024.",
    imageUrl: "https://www.janicewee.com/Emunah/images/dragonunbound.jpg",
    slug: "dragon-unbound-epic-fantasy-released"
  },
  {
    id: 5,
    title: "Latest Release: Secret Hero & His Flying Lion",
    date: "July 5, 2025",
    author: "Janice Wee",
    excerpt: "Who is the enigmatic Teacher Samson in St Lydia's Academy? Why is he interested in Billy and his friends? A poisoned lion and a collapsed tunnel meant to kill Billy, Bluma and their friends reveal a deadly plan designed to destroy St Lydia Academy's secret hero. Can Billy and his buddies solve the mystery before it's too late? This is the 3rd book in my fantasy adventure series, The Adventures of Billy Lionheart.",
    imageUrl: "https://www.janicewee.com/Emunah/images/secrethero.jpg",
    slug: "latest-release-secret-hero-flying-lion"
  },
  {
    id: 6,
    title: "Secret Hero & His Flying Lion - Coming June 3!",
    date: "June 3, 2025",
    author: "Janice Wee",
    excerpt: "Billy Lionheart is still grappling with his super strength as he navigates life at St. Lydia's Academy. By his side, his loyal lion guardian, Leonard, takes to the skies with gizmo mittens that grant him the power of flight. Together, this daring duo secretly saves lives and protects their school, all while hiding their extraordinary powers. But Billy's bold antics catch the eye of Samson, the enigmatic gym teacher with secrets of his own. This fantasy adventure, cosy mystery thriller will be released on 3 June 2025.",
    imageUrl: "https://www.janicewee.com/Emunah/images/secrethero.jpg",
    slug: "secret-hero-coming-june-3"
  },
  {
    id: 7,
    title: "Cover Reveal: Secret Hero & His Flying Lion",
    date: "May 28, 2025",
    author: "Janice Wee",
    excerpt: "Billy Lionheart is still grappling with his super strength as he navigates life at St. Lydia's Academy. By his side, his loyal lion guardian, Leonard, takes to the skies with gizmo mittens that grant him the power of flight. Together, this daring duo secretly saves lives and protects their school, all while hiding their extraordinary powers. When a shadowy figure targets Billy and his crew, the stakes soar. Who's behind the deadly plot, and why? Preorder your copy now.",
    imageUrl: "https://www.janicewee.com/Emunah/images/secrethero.jpg",
    slug: "cover-reveal-secret-hero"
  },
  {
    id: 8,
    title: "Billy's a superhero!",
    date: "July 30, 2025",
    author: "Janice Wee",
    excerpt: "Billy Lionheart received super strength in Billy & Bluma. Double Trouble. When Billy and Bluma return to St Lydia's Academy to start the new school term, Billy's strength goes wild! At the same time, Leonard Lion, the secret agent of Immortal King Jayden, receives a gadget upgrade: flying gloves! The problem is, the poor lion can't get a handle on his new flying power! While on a school trip, someone poisons Leonard Lion and tries to kill Billy and friends. Who is it? Can Billy, Bluma and their new buddies stop the killer? Find out in Secret Hero & His Flying Lion.",
    imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&h=400&fit=crop",
    slug: "billy-is-a-superhero"
  },
  {
    id: 9,
    title: "My Fantasy Adventure Series: The Adventures of Billy Lionheart",
    date: "May 16, 2025",
    author: "Janice Wee",
    excerpt: "Billy Lionheart is a little orphan boy who yearns for his real parents. Due to an unfortunate accident, the boy ends up with a talking lion for his nanny. So begins my fantasy adventure series, The Adventures of Billy Lionheart. This exclusive book trailer picks up right where Billy The Lion Boy left off. It teases the newly released Billy & Bluma. Double Trouble.",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&h=400&fit=crop",
    slug: "billy-lionheart-fantasy-series"
  },
  {
    id: 10,
    title: "Double the Trouble with Billy & Bluma!",
    date: "May 2, 2025",
    author: "Janice Wee",
    excerpt: "Today marks the exciting release of Billy & Bluma: Double Trouble, the second book in The Adventures of Billy Lionheart series! Packed with heart-pounding action, divine miracles, and unbreakable friendship, this captivating tale is perfect for young readers and families who love stories of faith, courage, and adventure. Billy reunites with his childhood friend Bluma, and together they embark on a quest filled with danger, mystery, and divine intervention.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billybluma-1760154780858.jpg",
    slug: "double-trouble-with-billy-bluma"
  },
  {
    id: 11,
    title: "Billy & Bluma: Double Trouble – Out May 2, 2025!",
    date: "May 1, 2025",
    author: "Janice Wee",
    excerpt: "Buckle up for a whirlwind adventure with Billy and Bluma, childhood friends whose reunion sparks chaos and courage! When Billy's immortal parents gift him a glowing, indestructible orb, a mischievous monkey swipes it, dropping it into Bluma's bread dough. Their lion guardian, Leonard, chomps into the loaf—only to break a tooth on the orb! Will Billy and Bluma outsmart Junta's cult? Can they rescue Leonard from a hunter's trap? Available May 2, 2025!",
    imageUrl: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=400&fit=crop",
    slug: "billy-bluma-out-may-2"
  },
  {
    id: 12,
    title: "Coming up next",
    date: "April 28, 2025",
    author: "Janice Wee",
    excerpt: "I'm thrilled to share that Billy & Bluma: Double Trouble, Book 2 in The Adventures of Billy Lionheart series, is launching on May 2, 2025, and it's packed with heart-pounding fun for middle-grade readers! If you love Narnia-inspired tales, quirky characters, and faith-filled adventures, this one's for you. Picture this: Billy, a boy who chats with animals, reunites with his childhood friend Bluma, who's kneading bread dough when a mischievous monkey drops a glowing, indestructible orb into it! Their lion guardian, Leonard, chomps into the loaf and—ouch!—breaks a tooth. What follows is pure hilarity: the kids tie Leonard's tooth to a boulder, roll it downhill, and crash—the tooth's out, but so is a mysterious porcelain box with a map and a coin bearing Aunt Mathilda's face.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billybluma-1760191457929.jpg",
    slug: "coming-up-next"
  },
  {
    id: 13,
    title: "Featured Book: Billy The Lion Boy",
    date: "April 4, 2025",
    author: "Janice Wee",
    excerpt: "Four adults and one lion aren't enough to restrain the tiny boy with a murky past. This story continues after Mary's Flight ends. The dystopian era has ended. It's a time of true peace and harmony throughout the earth. The earth is a virtual paradise. Mortals and immortals live alongside one another. Man and animals get along. (Most of the time. Billy and Leonard the lion bicker a lot). This is the first book in my latest fantasy adventure series: The Adventures of Billy Lionheart.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billylionheart-1760154828519.jpg",
    slug: "featured-book-billy-lion-boy"
  },
  {
    id: 14,
    title: "Welcome to the World of Billy Lionheart",
    date: "March 17, 2025",
    author: "Janice Wee",
    excerpt: "As a toddler, Billy witnessed inhuman monsters kill his parents while the wicked ran rampant. When the King of Kings and Lord of Lords returned to earth, to drive out evil, Billy was certain he saw his parents accompany Him. They were alive—transformed into immortals with superpowers! Mortals Mei, Boris, Ava and Leo raised the pint-sized escape artist, who was determined to find his real parents. Discover Billy The Lion Boy—a fantasy adventure about a runaway orphan boy, whose nanny is a lion.",
    imageUrl: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=800&h=400&fit=crop",
    slug: "welcome-billy-lionheart-world"
  },
  {
    id: 15,
    title: "New Release! The Mark and The Martyr",
    date: "March 12, 2025",
    author: "Janice Wee",
    excerpt: "Emunah Short Story Collection Volume 2: The Mark and the Martyr plunges readers into the heart of Tribulation, where four face humanity's darkest hour. Collecting Books 5 to 8 of the Emunah Short Stories, this volume weaves a tapestry of suspense and salvation. From the sterile labs of Beast Corp to the smoldering ruins of survival camps, each tale pulses with thriller intensity. Save 57% on the ebook or 69% on the paperback for the last 4 books in the series!",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/markmartyr-1760154246185.jpg",
    slug: "new-release-mark-and-martyr"
  },
  {
    id: 16,
    title: "Clean Fiction for Faith-Filled Readers",
    date: "March 3, 2025",
    author: "Janice Wee",
    excerpt: "Looking for novels that tackle life's twists with hope, grounded in Christian values, and free of smut or swearing? Step into Janice Wee's world of clean, faith-inspired fiction—stories that feel real, stir the soul, and keep it wholesome. From Singapore's Runaway to Two Worlds, Before Harpazo to Naughty Little Nonya, discover realistic tales of life's struggles met with faith and grit, clean fiction for all ages, and a Christian spirit with hope and grace in every line.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/vol1-1760154901659.jpg",
    slug: "clean-fiction-faith-filled-readers"
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
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-border/50">
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Post Image */}
                    <div className="md:col-span-2 relative group">
                      <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="md:col-span-3 p-8 flex flex-col justify-between bg-card">
                      <div>
                        <h2 className="text-3xl font-bold text-primary mb-4 hover:text-secondary transition-colors leading-tight">
                          <Link href={`/blog/${post.slug}`} className="block">
                            {post.title}
                          </Link>
                        </h2>
                        
                        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6 pb-4 border-b border-border/30">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-secondary" />
                            <span className="font-medium">{post.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-secondary" />
                            <span className="font-medium">{post.author}</span>
                          </div>
                        </div>

                        <p className="text-foreground/90 mb-6 leading-relaxed text-base line-clamp-4">
                          {post.excerpt}
                        </p>
                      </div>

                      <Button asChild size="lg" className="w-full md:w-auto">
                        <Link href={`/blog/${post.slug}`}>
                          Read Full Article
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
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