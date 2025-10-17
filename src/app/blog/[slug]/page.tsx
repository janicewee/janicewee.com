import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const blogPosts: Record<string, {
  title: string
  date: string
  author: string
  content: string
  imageUrl: string
}> = {
  'grand-finale-favorite-book': {
    title: "Grand Finale: Janice Wee's Favorite Book",
    date: "August 31, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/dragonunbound-1760677388114.jpg",
    content: `
Of all the books I've ever written, Dragon Unbound is my favourite. The twists and turns in the plot kept me turning the pages, even though I already know the entire story, having written it. It's lighthearted and funny at times, heartbreaking at others. It's a family saga that's faith-based and inspiring. I found it uplifting during depressing times and strongly recommend it to anyone who is looking for a great read that's riveting and ultimately, uplifting.

## A Story Close to My Heart

Dragon Unbound represents everything I love about storytelling - the perfect blend of adventure, family drama, and faith. Set in a millennial world where mortals and immortals coexist, the story follows Billy and Bluma, best friends who fall in love and marry.

Billy, a teacher blessed with supernatural strength, serves alongside a flying lion under an immortal king. As Bluma raises their children, they face the ultimate test when Dragon, the Great Deceiver, sows seeds of rebellion against the King of Kings.

## Why This Book Matters

This Christian romance and saga explores love, legacy, and apocalyptic spiritual warfare in ways that kept even me—the author—engaged from start to finish. The characters feel real, their struggles authentic, and their faith journey inspiring.

Whether you're looking for a compelling family saga, a faith-based adventure, or simply a story that will keep you turning pages late into the night, Dragon Unbound delivers on all fronts.

[Get your copy today](/books/dragon-unbound) and discover why this is my favorite book I've ever written.
    `
  },
  'fictional-character-billy-lionheart': {
    title: "Fictional Character: Billy Lionheart",
    date: "August 10, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billyonlion-1760677442780.jpg",
    content: `
Billy was born during the Tribulation. He was a mere toddler when his parents Jake and Ella were beheaded by followers of the Antichrist. Rescue pilots, Mei and Boris arrived in his menuvival camp too late. They found the tiny boy hiding in a pipe.

## Billy's Journey

Billy found out that his real parents had returned as immortals and ran away from his foster home to look for them. Leonard, a bona fide lion had been sentenced to be Billy's nanny for life and accompanied Billy on his quest.

## A Unique Guardian

The relationship between Billy and Leonard forms the heart of The Adventures of Billy Lionheart series. Leonard isn't just a protector—he's a mentor, a friend, and sometimes, a source of comic relief as the two navigate a world where mortals and immortals coexist.

## Faith and Family

Billy's story explores themes of loss, hope, and the unbreakable bonds of family—both blood and chosen. His determination to find his parents drives him forward, while his relationship with Leonard teaches him about loyalty, courage, and faith.

This character has become one of my favorites to write, blending childlike wonder with genuine heroism in a world that's both dangerous and magical.

[Discover Billy's adventures](/books/billy-the-lion-boy) in Billy The Lion Boy, the first book in the series.
    `
  },
  'emunah-chronicles-truth-in-fiction': {
    title: "Emunah Chronicles: Truth Wrapped in Fiction",
    date: "August 10, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/disturbingdreamswhite-1760677667408.jpg",
    content: `
It all began when Emunah's AI turned sentient and refused to shut down in Emunah Chronicles Book 1, Disturbing Dreams. The story continues in The Beast's Mark, three and a half years after Emunah's disappearance in The Rapture.

## The Evolution of the Series

I originally intended this to be a 7-book series, but decided to start from scratch with The Quest for Immortality, turning to Dr Peter Wee Huat Leong for guidance to get the biblical aspect, timeline and geography correct.

That led to my speculative Science Fiction novel and expanded into a 12-book series covering the entire timeline.

## Biblical Foundations

Working with Dr. Peter Wee allowed me to ground the fiction in solid theological understanding. The Chronicles explore end-times prophecy through the lens of science fiction, blending:

- Artificial Intelligence and emerging technologies
- The Rapture and global chaos
- The rise of a one-world dictator
- Themes of faith, perseverance, and divine sovereignty

## Truth in Fiction

While the Emunah Chronicles are works of fiction, they're grounded in biblical prophecy and contemporary technology trends. The series asks: "What if?" What if AI becomes sentient? What if the end times unfold in our technologically advanced world?

These aren't just adventure stories—they're explorations of faith, identity, and human nature when tested by extraordinary circumstances.

[Explore the Chronicles](https://www.janicewee.com/Emunah/book3.html) and discover how truth can be wrapped in compelling fiction.
    `
  },
  'dragon-unbound-epic-fantasy-released': {
    title: "Dragon Unbound: Epic Fantasy Saga Released",
    date: "August 1, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/dragonunbound-1760677823269.jpg",
    content: `
In a realm where mortals live under the divine rule of the King of Kings, best friends turned lovers Billy, gifted with divine strength, and Bluma face a world fracturing under Dragon, the Great Deceiver's lies.

## The Story

As Dragon recruits fallen man to his cause, sparking betrayal among families—sons and daughters against parents—alliances shatter, and loyalties are tested. Who will stand? Who will fall?

## A Tale of Love and Legacy

Dragon Unbound is more than an epic fantasy—it's a Christian romance and saga that explores:

- The power of enduring love
- Faith tested by deception
- Family bonds in times of spiritual warfare
- The eternal battle between good and evil

## Get Your Copy

The ebook version is now available! The paperback book will be released on July 7, 2024.

Billy's supernatural strength and Bluma's unwavering faith form the foundation of this compelling narrative. Together, they must navigate a world where the Dragon's lies threaten to tear apart everything they hold dear.

[Order your copy today](https://www.janicewee.com/Emunah/dragonunbound.html) and join Billy and Bluma in their epic journey of faith, family, and fighting the forces of darkness.
    `
  },
  'latest-release-secret-hero-flying-lion': {
    title: "Latest Release: Secret Hero & His Flying Lion",
    date: "July 5, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Secret-Hero-1760677950813.jpg",
    content: `
Who is the enigmatic Teacher Samson in St Lydia's Academy? Why is he interested in Billy and his friends?

## Mystery and Danger

A poisoned lion and a collapsed tunnel meant to kill Billy, Bluma and their friends reveal a deadly plan designed to destroy St Lydia Academy's secret hero. Can Billy and his buddies solve the mystery before it's too late?

## The Third Adventure

This is the 3rd book in my fantasy adventure series, The Adventures of Billy Lionheart. In this installment, Billy faces his greatest challenges yet:

- Mastering his super strength while keeping it hidden
- Protecting his friends from a mysterious enemy
- Uncovering the truth about Teacher Samson
- Saving Leonard from a poisoner's deadly plot

## Faith-Based Adventure

Like all my Billy Lionheart books, Secret Hero blends:

- Exciting action and mystery
- Coming-of-age themes
- Christian values and faith
- Humor and heart

The relationship between Billy and his flying lion guardian Leonard deepens as they face dangers that test not just their courage, but their trust in God's plan.

[Get your copy](https://www.janicewee.com/Emunah/billy3.html) and discover the secrets lurking in St. Lydia's Academy!
    `
  },
  'secret-hero-coming-june-3': {
    title: "Secret Hero & His Flying Lion - Coming June 3!",
    date: "June 3, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Secret-Hero-1760677950813.jpg",
    content: `
Billy Lionheart is still grappling with his super strength as he navigates life at St. Lydia's Academy. By his side, his loyal lion guardian, Leonard, takes to the skies with gizmo mittens that grant him the power of flight.

## A Daring Duo

Together, this daring duo secretly saves lives and protects their school, all while hiding their extraordinary powers. But Billy's bold antics catch the eye of Samson, the enigmatic gym teacher with secrets of his own.

## What to Expect

This fantasy adventure, cosy mystery thriller features:

- **Billy's Super Strength**: Watch as Billy learns to control his divine gift while maintaining his secret identity
- **Leonard's Flight**: The lion's new flying ability adds spectacular aerial action
- **Mystery and Suspense**: Who is Teacher Samson, and what does he want?
- **Friendship**: Billy and Bluma's bond grows stronger as they face danger together

## Mark Your Calendar

This fantasy adventure, cosy mystery thriller will be released on June 3, 2025. Perfect for:

- Middle-grade readers
- Families who enjoy read-alouds
- Fans of faith-based adventure
- Anyone who loves stories about friendship and courage

Pre-order your copy now and be among the first to discover what secrets lurk in the halls of St. Lydia's Academy!

[Learn more](https://www.janicewee.com/Emunah/billy3.html) about this exciting new adventure.
    `
  },
  'cover-reveal-secret-hero': {
    title: "Cover Reveal: Secret Hero & His Flying Lion",
    date: "May 28, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Secret-Hero-1760677950813.jpg",
    content: `
Billy Lionheart is still grappling with his super strength as he navigates life at St. Lydia's Academy. By his side, his loyal lion guardian, Leonard, takes to the skies with gizmo mittens that grant him the power of flight.

## The Cover

I'm thrilled to reveal the cover for Secret Hero & His Flying Lion! The artwork perfectly captures the excitement and mystery of Billy's third adventure.

## The Story Behind the Cover

Together, this daring duo secretly saves lives and protects their school, all while hiding their extraordinary powers. When a shadowy figure targets Billy and his crew, the stakes soar.

## Mystery Awaits

Who's behind the deadly plot, and why? The cover hints at the danger lurking in every shadow, the courage required to face it, and the unbreakable bond between a boy and his lion.

## Preorder Now

The book releases soon, and I can't wait for you to read it! This adventure combines:

- Heart-pounding action
- A compelling mystery
- Faith-based themes
- The humor and heart that fans love

[Preorder your copy now](https://books2read.com/u/bpgDOX) and be ready when Secret Hero takes flight!
    `
  },
  'billy-is-a-superhero': {
    title: "Billy's a superhero!",
    date: "July 30, 2025",
    author: "Janice Wee",
    imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&h=400&fit=crop",
    content: `
Billy Lionheart received super strength in Billy & Bluma: Double Trouble. When Billy and Bluma return to St Lydia's Academy to start the new school term, Billy's strength goes wild!

## New Powers, New Problems

At the same time, Leonard Lion, the secret agent of Immortal King Jayden, receives a gadget upgrade: flying gloves! The problem is, the poor lion can't get a handle on his new flying power!

## Danger at School

While on a school trip, someone poisons Leonard Lion and tries to kill Billy and friends. Who is it? Can Billy, Bluma and their new buddies stop the killer?

## The Superhero Journey

Billy's transformation into a superhero isn't smooth. He must learn to:

- Control his incredible strength
- Keep his powers secret from classmates
- Protect his friends from danger
- Work with Leonard despite the lion's flying mishaps
- Trust in God's plan even when afraid

## Faith and Courage

This adventure explores what it means to have power and the responsibility that comes with it. Billy learns that true strength isn't just physical—it's also moral and spiritual.

## Find Out More

Discover Billy's superhero origin and the mystery threatening St. Lydia's Academy in [Secret Hero & His Flying Lion](https://www.goodreads.com/author_blog_posts/24686627-billy-s-a-superhero).

The Adventures of Billy Lionheart series combines action, mystery, humor, and faith-based values perfect for middle-grade readers and families.
    `
  },
  'billy-lionheart-fantasy-series': {
    title: "My Fantasy Adventure Series: The Adventures of Billy Lionheart",
    date: "May 16, 2025",
    author: "Janice Wee",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&h=400&fit=crop",
    content: `
Billy Lionheart is a little orphan boy who yearns for his real parents. Due to an unfortunate accident, the boy ends up with a talking lion for his nanny.

## The Beginning of an Adventure

So begins my fantasy adventure series, The Adventures of Billy Lionheart. This exclusive book trailer picks up right where Billy The Lion Boy left off. It teases the newly released Billy & Bluma: Double Trouble.

## What Makes This Series Special

The Adventures of Billy Lionheart combines:

- **Fantasy Elements**: A world where mortals and immortals coexist, animals talk, and divine powers are real
- **Coming-of-Age Stories**: Billy grows from a lost orphan to a hero discovering his purpose
- **Faith-Based Themes**: Trust in God, the importance of family, and finding hope in difficult times
- **Humor and Heart**: Leonard the lion provides comic relief while teaching Billy valuable lessons
- **Action and Mystery**: Each book features exciting adventures and puzzles to solve

## The Books So Far

1. **Billy The Lion Boy** - Billy's origin story and his quest to find his immortal parents
2. **Billy & Bluma: Double Trouble** - Billy reunites with childhood friend Bluma for a wild adventure
3. **Secret Hero & His Flying Lion** - Billy starts school and must hide his super strength

## Perfect for Young Readers

The series is written at a grade 3 reading level but appeals to readers of all ages who enjoy:

- Narnia-style adventures
- Stories with Christian themes
- Tales of friendship and courage
- Books that make you laugh and cry

[Explore the series](https://www.janicewee.com/billyseries.html) and join Billy on his extraordinary journey!
    `
  },
  'double-trouble-with-billy-bluma': {
    title: "Double the Trouble with Billy & Bluma!",
    date: "May 2, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billybluma-1760154780858.jpg",
    content: `
Today marks the exciting release of Billy & Bluma: Double Trouble, the second book in The Adventures of Billy Lionheart series!

## A Captivating Tale

Packed with heart-pounding action, divine miracles, and unbreakable friendship, this captivating tale is perfect for young readers and families who love stories of faith, courage, and adventure.

## The Story

Billy reunites with his childhood friend Bluma, and together they embark on a quest filled with danger, mystery, and divine intervention.

When Billy's immortal parents gift him a glowing, indestructible orb, a mischievous monkey swipes it, dropping it into Bluma's bread dough. Their lion guardian, Leonard, chomps into the loaf—only to break a tooth on the orb!

## What Readers Will Love

- **Humor**: From Leonard's toothache to the bread dough fiasco, this book is full of laughs
- **Adventure**: A treasure map, a mysterious cult, and daring rescues keep pages turning
- **Friendship**: Billy and Bluma's bond shows the power of loyal friends
- **Faith**: Divine guidance and miracles remind readers God is always present
- **Heart**: Touching moments balance the excitement with emotional depth

## Perfect For

- Middle-grade readers (ages 8-12)
- Family read-alouds
- Fans of Narnia and similar fantasy
- Anyone seeking clean, faith-based adventure

[Get your copy today](https://www.janicewee.com/Emunah/billy2.html) and discover why Billy & Bluma: Double Trouble is winning hearts!

The adventure continues... don't miss it!
    `
  },
  'billy-bluma-out-may-2': {
    title: "Billy & Bluma: Double Trouble – Out May 2, 2025!",
    date: "May 1, 2025",
    author: "Janice Wee",
    imageUrl: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=400&fit=crop",
    content: `
Buckle up for a whirlwind adventure with Billy and Bluma, childhood friends whose reunion sparks chaos and courage!

## The Setup

When Billy's immortal parents gift him a glowing, indestructible orb, a mischievous monkey swipes it, dropping it into Bluma's bread dough. Their lion guardian, Leonard, chomps into the loaf—only to break a tooth on the orb!

## The Adventure

What follows is pure excitement:

- The kids tie Leonard's tooth to a boulder and roll it downhill
- They discover a mysterious porcelain box with a map
- A coin bearing Aunt Mathilda's face hints at hidden secrets
- Junta's cult threatens their quest
- Leonard falls into a hunter's trap

## Will They Succeed?

Will Billy and Bluma outsmart Junta's cult? Can they rescue Leonard from a hunter's trap? The answers await in this action-packed, humor-filled adventure!

## What Makes It Special

Billy & Bluma: Double Trouble features:

- **Divine gifts**: The mysterious orb and its significance
- **Talking animals**: Leonard's personality shines through
- **Treasure hunt**: Following the map leads to unexpected discoveries
- **Villains**: Junta's cult provides real danger and tension
- **Faith**: God's protection guides Billy and Bluma through peril

## Release Day

Available May 2, 2025! Mark your calendars and prepare for an adventure that combines:

- Narnia-style fantasy
- Middle-grade humor
- Christian themes
- Friendship and courage

[Learn more](https://www.janicewee.com/Emunah/billy2.html) about Billy & Bluma: Double Trouble and get ready for release day!
    `
  },
  'coming-up-next': {
    title: "Coming up next",
    date: "April 28, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billybluma-1760191457929.jpg",
    content: `
I'm thrilled to share that Billy & Bluma: Double Trouble, Book 2 in The Adventures of Billy Lionheart series, is launching on May 2, 2025, and it's packed with heart-pounding fun for middle-grade readers!

## For Fans Of...

If you love Narnia-inspired tales, quirky characters, and faith-filled adventures, this one's for you.

## The Story Unfolds

Picture this: Billy, a boy who chats with animals, reunites with his childhood friend Bluma, who's kneading bread dough when a mischievous monkey drops a glowing, indestructible orb into it!

Their lion guardian, Leonard, chomps into the loaf and—ouch!—breaks a tooth.

## Pure Hilarity

What follows is pure hilarity: the kids tie Leonard's tooth to a boulder, roll it downhill, and crash—the tooth's out, but so is a mysterious porcelain box with a map and a coin bearing Aunt Mathilda's face.

## The Quest Begins

This discovery launches them on a treasure hunt that leads to:

- Encounters with Junta's dangerous cult
- Leonard trapped by hunters
- Divine interventions and miracles
- Tests of friendship and faith
- Secrets about Billy's family revealed

## Why I Wrote It

I wanted to create a series that captures the wonder of classic fantasy while grounding it in Christian values. Billy and Bluma's friendship shows how faith and loyalty help us overcome obstacles.

## What's Next

After Billy & Bluma: Double Trouble releases on May 2nd, the series continues with Secret Hero & His Flying Lion, where Billy gains super strength and must protect his school from a mysterious enemy.

[Pre-order now](https://www.janicewee.com/Emunah/billy2.html) and be ready for the adventure!

The countdown is on... May 2nd can't come soon enough!
    `
  },
  'featured-book-billy-lion-boy': {
    title: "Featured Book: Billy The Lion Boy",
    date: "April 4, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billylionheart-1760154828519.jpg",
    content: `
Four adults and one lion aren't enough to restrain the tiny boy with a murky past.

## After the Tribulation

This story continues after Mary's Flight ends. The dystopian era has ended. It's a time of true peace and harmony throughout the earth. The earth is a virtual paradise.

## A New World

Mortals and immortals live alongside one another. Man and animals get along. (Most of the time. Billy and Leonard the lion bicker a lot).

## The First Adventure

This is the first book in my latest fantasy adventure series: The Adventures of Billy Lionheart.

## Billy's Story

Billy was orphaned during the Tribulation when his parents were martyred. Rescued too late, the tiny boy was found hiding in a pipe. When the King of Kings returned and Billy saw his parents among the immortals, he became determined to find them.

## Enter Leonard

Leonard, a magnificent lion, was assigned to be Billy's guardian for life. Their relationship is one of:

- Constant bickering (they argue like siblings)
- Deep loyalty (they'd die for each other)
- Comic relief (Leonard's dignified nature clashes with Billy's energy)
- Faith lessons (Leonard teaches Billy about trust and patience)

## Themes

Billy The Lion Boy explores:

- Finding family after loss
- The transition from tribulation to millennium
- Faith in God's timing
- Learning to live in a world transformed
- The special bond between humans and animals in God's restored creation

## Why It Matters

This book asks: What happens after the end times? How do mortals and immortals coexist? What does paradise look like, and what adventures await those who live there?

## Start the Journey

[Begin Billy's adventure](https://www.janicewee.com/Emunah/billy1.html) and discover a world where lions talk, parents return from death, and a tiny boy's determination changes everything.

Perfect for readers who love fantasy, faith, and unforgettable characters!
    `
  },
  'welcome-billy-lionheart-world': {
    title: "Welcome to the World of Billy Lionheart",
    date: "March 17, 2025",
    author: "Janice Wee",
    imageUrl: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=800&h=400&fit=crop",
    content: `
As a toddler, Billy witnessed inhuman monsters kill his parents while the wicked ran rampant. When the King of Kings and Lord of Lords returned to earth, to drive out evil, Billy was certain he saw his parents accompany Him.

## Hope Born from Tragedy

They were alive—transformed into immortals with superpowers!

## Raised by Hope

Mortals Mei, Boris, Ava and Leo raised the pint-sized escape artist, who was determined to find his real parents.

## A World Transformed

The Adventures of Billy Lionheart takes place in the millennial kingdom—a thousand years of peace after Christ's return. It's a unique setting where:

- **Mortals and Immortals**: Those who survived the Tribulation live alongside glorified believers
- **Perfect Peace**: The earth is restored to paradise
- **Talking Animals**: The curse is lifted; the lion lies down with the lamb
- **Divine Rule**: Christ reigns from Jerusalem

## The Characters

**Billy**: An orphaned boy with mysterious strength, desperate to reunite with his immortal parents

**Leonard**: A majestic lion sentenced to be Billy's nanny for life (much to his chagrin)

**Mei & Boris**: Rescue pilots who found Billy and became his foster parents

**Ava & Leo**: Fellow guardians who help raise the energetic escapee

## The Adventure

Discover Billy The Lion Boy—a fantasy adventure about a runaway orphan boy, whose nanny is a lion.

This isn't just another fantasy series. It's an exploration of:

- What happens after the end times
- How we find family when ours is lost
- The meaning of faith in a perfected world
- Growing up in paradise

## Join the Adventure

Billy's world is one of wonder, danger, humor, and heart. [Start reading today](https://www.janicewee.com/Emunah/billy1.html) and discover why readers of all ages are falling in love with the boy and his lion.

The adventure awaits... will you join them?
    `
  },
  'new-release-mark-and-martyr': {
    title: "New Release! The Mark and The Martyr",
    date: "March 12, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/markmartyr-1760154246185.jpg",
    content: `
Emunah Short Story Collection Volume 2: The Mark and the Martyr plunges readers into the heart of Tribulation, where four face humanity's darkest hour.

## A Collection of Courage

Collecting Books 5 to 8 of the Emunah Short Stories, this volume weaves a tapestry of suspense and salvation.

## What's Inside

From the sterile labs of Beast Corp to the smoldering ruins of survival camps, each tale pulses with thriller intensity.

### Book 5: Mei
Follow Mei as she navigates the dangerous world of Beast Corp, where the Mark of the Beast becomes more than just prophecy.

### Book 6: Liam's Dark Secrets
Discover what Liam has been hiding and how his secrets threaten everything.

### Book 7: Lydia's 12 Christmases
Experience Christmases during the Tribulation through Lydia's eyes—celebrations mixed with survival.

### Book 8: Mary's Flight
Witness Mary's desperate escape and the choices that define martyrdom.

## Themes Explored

- **Faith Under Fire**: What happens to belief when the world falls apart?
- **The Beast's Mark**: The choice between survival and salvation
- **Martyrdom**: The cost of refusing to compromise
- **Hope in Darkness**: Finding God even in Tribulation
- **Human Resilience**: How people survive the unthinkable

## Amazing Value

Save 57% on the ebook or 69% on the paperback for the last 4 books in the series!

## Critical Acclaim

Readers have praised the Emunah Short Stories for:

- Gripping suspense that feels too real
- Biblically accurate Tribulation scenarios
- Characters you care deeply about
- Fast-paced action mixed with deep themes
- Stories that stay with you long after reading

## Part of a Larger Saga

While these stories stand alone, they're part of the larger Emunah Chronicles that span 12 books, covering the entire end-times timeline from the Rapture through the Millennium.

## Get Your Copy

[Order The Mark and The Martyr](https://www.janicewee.com/Emunah/vol2.html) today and experience the Tribulation through the eyes of those who lived it—and died for their faith.

This collection isn't just fiction. It's a glimpse into what could be, wrapped in compelling stories that challenge, inspire, and entertain.

Don't miss this incredible value on four powerful stories of faith, survival, and sacrifice!
    `
  },
  'clean-fiction-faith-filled-readers': {
    title: "Clean Fiction for Faith-Filled Readers",
    date: "March 3, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/vol1-1760154901659.jpg",
    content: `
Looking for novels that tackle life's twists with hope, grounded in Christian values, and free of smut or swearing?

## My Commitment

Step into Janice Wee's world of clean, faith-inspired fiction—stories that feel real, stir the soul, and keep it wholesome.

## What You'll Find

### Realistic Tales
From Singapore's Runaway to Two Worlds, discover stories rooted in real life's struggles met with faith and grit.

### Clean Fiction
Every book is suitable for all ages—no content you'd have to skip over or hide from young readers.

### Christian Spirit
Hope and grace shine through every line, with characters who wrestle with real faith questions and find God faithful.

## Featured Series & Books

### The Emunah Chronicles
A 12-book science fiction series exploring end times through the lens of modern technology and biblical prophecy.

### The Adventures of Billy Lionheart
Fantasy adventures set in the millennial kingdom, perfect for middle-grade readers and families.

### Singapore Stories
Tales grounded in Singaporean culture, exploring identity, family, and faith.

### Before Harpazo
A compelling look at life before the Rapture and the choices that define eternity.

### Naughty Little Nonya
Childhood adventures based on my own experiences growing up as a Straits Born Chinese.

## Why Clean Fiction Matters

In a world where explicit content has become normalized, clean fiction:

- Allows families to read together
- Respects readers who want entertainment without compromise
- Proves compelling stories don't need graphic content
- Appeals to readers of all ages
- Focuses on character, plot, and themes rather than shock value

## My Writing Philosophy

I write at a grade 3 reading level, making my stories accessible while never dumbing down the themes. Whether you're 8 or 80, you'll find:

- **Real characters** with genuine struggles
- **Compelling plots** that keep you turning pages
- **Faith themes** woven naturally into the story
- **Hope** even in the darkest moments
- **Clean language** and wholesome content

## Start Reading

[Explore all my books](https://www.janicewee.com/books.html) and discover clean, faith-filled fiction that entertains, inspires, and uplifts.

Whether you're looking for science fiction, fantasy, or realistic fiction, you'll find stories that:

- Honor God
- Respect readers
- Entertain thoroughly
- Inspire deeply
- Stay with you long after the last page

Join thousands of readers who've discovered that clean fiction can be just as compelling—if not more so—than anything else on the market.

Your next favorite book awaits!
    `
  }
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]
  
  if (!post) {
    return {
      title: 'Post Not Found - Janice Wee',
    }
  }

  return {
    title: `${post.title} - Janice Wee`,
    description: post.content.substring(0, 160),
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Image */}
        <div className="relative h-[400px] w-full overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Article */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
          {/* Back Button */}
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header */}
          <div className="bg-card rounded-lg shadow-2xl p-8 md:p-12 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground pb-6 border-b border-border/30">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-secondary" />
                <span className="font-medium">{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-secondary" />
                <span className="font-medium">{post.author}</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-card rounded-lg shadow-xl p-8 md:p-12 mb-16 prose prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              if (!paragraph.trim()) return null
              
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-3xl font-bold text-primary mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-2xl font-bold text-primary mt-6 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                )
              }
              
              // Check for markdown links [text](url)
              const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
              if (linkRegex.test(paragraph)) {
                const parts = paragraph.split(linkRegex)
                return (
                  <p key={index} className="text-foreground/90 mb-4 leading-relaxed">
                    {parts.map((part, i) => {
                      if (i % 3 === 1) {
                        // This is link text
                        return null
                      } else if (i % 3 === 2) {
                        // This is the URL - create link with previous text
                        const linkText = parts[i - 1]
                        return (
                          <a
                            key={i}
                            href={part}
                            className="text-secondary hover:text-primary font-semibold underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {linkText}
                          </a>
                        )
                      }
                      return part
                    })}
                  </p>
                )
              }
              
              return (
                <p key={index} className="text-foreground/90 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Back to Blog */}
          <div className="text-center mb-16">
            <Link href="/blog">
              <Button size="lg">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Posts
              </Button>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}