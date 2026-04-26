import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

const blogPosts: Record<string, {
  title: string
  date: string
  author: string
  content: string
  imageUrl: string
}> = {
  'why-lord': {
    title: "Why Lord?",
    date: "August 16, 2026",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book2oliver-1760404534983.jpg",
    content: `
Have you been so overwhelmed with life, so grieved you ask God, "Why Lord?"

## "I Want Oliver." — When Ancient Evil Demands Your Soul

[youtube:https://www.youtube.com/embed/Qx8Xaed7BE8]

## Spiritual Warfare

The devil knows his days are numbered and that time is running out. He is attacking believers in Jesus Christ all over the world, in all-out-war. It is a battle in the spiritual realm. Against the unseen. He can see us but we can't. But we are not without help.

God sees. God provides.

He has given us an armor and weapons to fight the battle.

## Ephesians 6 KJV

**10** Finally, my brethren, be strong in the Lord, and in the power of his might.

**11** Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.

**12** For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world, against spiritual wickedness in high places.

**13** Wherefore take unto you the whole armour of God, that ye may be able to withstand in the evil day, and having done all, to stand.

**14** Stand therefore, having your loins girt about with truth, and having on the breastplate of righteousness;

**15** And your feet shod with the preparation of the gospel of peace;

**16** Above all, taking the shield of faith, wherewith ye shall be able to quench all the fiery darts of the wicked.

**17** And take the helmet of salvation, and the sword of the Spirit, which is the word of God:

**18** Praying always with all prayer and supplication in the Spirit, and watching thereunto with all perseverance and supplication for all saints;

## Read the Book

Oliver is a story about a Christian under spiritual attack. [Read it here](/books/emunah-book-2-oliver).
    `
  },
  'jayden-and-ava-love-story': {
    title: "Jayden and Ava. Their love story that will make you laugh and cry",
    date: "August 9, 2026",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/jaydenavainlove-1764590221153.png?width=1200&height=1200&resize=contain",
    content: `
Jayden and Ava were made for each other. Deeply in love, they had plans for the future. Yet during the 7 Year Tribulation, few escape alive.

## This Billionaire Lost EVERYTHING — Then Sacrificed His Life For Love

[youtube:https://www.youtube.com/embed/P_OFOl861L8]

## From Riches to the Underground

Once a self made billionaire with access to all the luxuries the world had to offer, Jayden gave it all up when he chose to follow Jesus and refused to take the mark of the beast. He saved many lives, including Ava's. Love blossomed.

## The Ultimate Sacrifice

As they fought to survive the 7 years of tribulation, Beast infiltrated their underground city and Jayden sacrificed his own life so that Ava could escape.

## Their Story Does Not End There

Jesus defeated death. Those who died, faithful to Him would return with Him in glory.

## Read the Full Story

[The Beast's Mark](/books/emunah-book-2-the-beasts-mark) - where their love blossoms.

[The Quest for Immortality](/books/quest-for-immortality) - where their story continues.
    `
  },
  'what-if-your-hero-wore-a-saucepan': {
    title: "What if your hero wore a saucepan to save your life?",
    date: "August 2, 2026",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/jaydenavainlove-1764590221153.png?width=1200&height=1200&resize=contain",
    content: `
I'll be honest. Of all the Disney cartoons I have ever seen, only one hero stood up - the one who wore a saucepan as a helmet. I don't even remember the name of that movie but that image of a suave hero stuck.

## He Wore A Saucepan To Rescue Her — And Sparks Flew

[youtube:https://www.youtube.com/embed/FqqddLLjDYg]

## Jayden's Sassy Attitude

So when I wrote Jayden in the Emunah Chronicles Universe, I gave him that sassy attitude and saucepan helmet when he gave up his riches, to live underground during the Tribulation years.

## The Romeo and Juliet of the Series

Of all the couples, Jayden and Ava struck me as the Romeo and Juliet of the series. Their love story is as heartbreaking as it is entertaining and beautiful.

## Read the Books

You've got to read the books to see this for yourself.

[The Beast's Mark](/books/emunah-book-2-the-beasts-mark) is where their love blossoms.

If you like to get to the heartbreaking part, check out [The Quest for Immortality](/books/quest-for-immortality). Fair warning. Have a box of tissues on hand.
    `
  },
  'would-you-trust-dragon': {
    title: "Would you trust Dragon?",
    date: "July 26, 2026",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/dragonunbound-1760677388114.jpg",
    content: `
When Dragon is unbound, he turns on the charm and professes to turn over a new leaf. He is particularly good with the kids.

## She Trusted The Dragon. Then He Took Her Son.

[youtube:https://www.youtube.com/embed/_2HF6nrMqgs]

## A Mother's Trust

Bluma, now a mother of an entire nation trusts too freely and what happens next will horrify you.

## Get the Book

Dragon Unbound. A fantasy novel by indie author Janice Wee is utterly spellbinding. [Get it here](/books/dragon-unbound).
    `
  },
  'have-you-ever-had-a-dream-you-could-never-forget': {
    title: "Have you ever had a dream that you could never forget?",
    date: "July 19, 2026",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/disturbingdreamswhite-1760677667408.jpg",
    content: `
For me, my recurring nightmare is being lost in the exam hall, unable to find my seats to do my paper, and then time is up.

What is yours?

## What If Your Dreams Were Warnings?

[youtube:https://www.youtube.com/embed/D6XdLQzGv-k]

## Prophetic Dreams

In Disturbing Dreams, various characters have prophetic dreams - nightmares that come to pass. Warnings of things to come.

## Where It All Begins

It all starts innocently enough, with Emunah and her personal A.I. which turns into her stalker that proposes disturbing ways it could enter her reality. Investigations lead to a corporate conspiracy, extra terrestrials with a connection to the occult.

## A Chilling Read

Disturbing Dreams is a chilling read that could happen in the near future.

## Get the Book

[Get Disturbing Dreams here](/books/emunah-book-1-disturbing-dreams)
    `
  },
  'born-on-christmas-left-behind-at-the-rapture': {
    title: "Born on Christmas, Left Behind at the Rapture — A Story You Won't Forget",
    date: "July 12, 2026",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book7lydia-1760410829051.jpg",
    content: `
Did you know that when my first child was born, my husband was stopped by the police who thought he might be up to no good, running down the deserted street past midnight.. until he saw me, fully pregnant and in labour.

[youtube:https://www.youtube.com/embed/PzkMfLUszc8]

## Drawing from Real Life

When I wrote Lydia's first Christmas, her birth, I drew heavily on my own experience with childbirth and the stories I heard from the nurses. Personally, I hate needles and threatened to kick the doctor who came near me with a needle to try to administer pain killers.

## Back to Lydia

She was born on Christmas and hated it.

## Read the Book

To find out why, read [Emunah Short Stories: Lydia's 12 Christmases](/books/emunah-book-7-lydias-12-christmases).
    `
  },
  'how-do-you-know-he-really-loves-you': {
    title: "How do you know he really loves you?",
    date: "July 5, 2026",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book6liam-1760410829597.jpg",
    content: `
Sue was smitten.

Liam loved her, or so she thought.

Emma, was fun to hang out with and the best friend a girl could have… until she discovered their affair. Her bestie was her husband's mistress!

## He Was a Billionaire, a Church Leader and a Secret Cheater. Then Rapture Hit.

[youtube:https://www.youtube.com/embed/BXjNBCYuin8]

## As for Liam?

Want to know what happens to the two-timing wolf in sheep's clothing…

## Read the Book

[Read Emunah Short Stories: Liam's Dark Secrets](/books/emunah-book-6-liams-dark-secrets)
    `
  },
  'what-if-the-stars-told-your-story': {
    title: "What if the stars told your story?",
    date: "June 28, 2026",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/IMG_0194-1760677132993.jpeg",
    content: `
When I was a kid, daddy pointed out the stars. They are arranged in constellations that tell the story. All that flew over my head when I was a kid. As a teenager I had no interest. Though my dad's closest brother too was interested in star gazing and my cousins had long conversations with him about the constellations.

## She Thought It Was Nonsense. The Stars Proved Her Wrong.

[youtube:https://www.youtube.com/embed/HjXj5cm60cE]

## A Rare Alignment

Fast forward decades later to 2017, when a rare alignment in the constellation of Virgo with the sun position at Virgo's shoulder and the moon directly under Virgo, with the alignment of Mercury, Mars and Venus with 9 stars from the Leo, forming a crown of 12 stars as depicted in Revelation 12.

## The Inspiration

Mary's Flight is inspired by that.

## Read the Book

[More about Mary's Flight](/books/emunah-book-8-marys-flight)
    `
  },
  'true-love-that-never-fails': {
    title: "True love that never fails",
    date: "June 21, 2026",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book1abigail-1760404534946.jpg",
    content: `
Have you ever been let down by the one you love?

Sometimes they just are too obtuse and have no idea they are hurting you.

Then again, you might have found someone truly wonderful, but that person is taken away.

## The One She Longed For Was With Her All Along

[youtube:https://www.youtube.com/embed/elqrAdcElE0]

## Life Is Full of Joy, Full of Pain

Life is full of joy, full of pain. Hope, disappointment, yet…

Did you know there is someone who loves you? Someone who will never fail you?

## Abigail's Story

Abigail realises who truly loves her.

## Read the Full Story

[Read Abigail's full story at emunahchronicles.com](https://emunahchronicles.com/books/abigail)
    `
  },
  'can-a-7-year-old-outsmart-grown-ups': {
    title: "Can a 7 year old kid outsmart grown ups?",
    date: "June 14, 2026",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billylionheart-1760154828519.jpg",
    content: `
Do not underestimate the little ones. They are a lot smarter than you may realise. More observant. Their little brains working overtime on ways to outsmart the grown ups.

Billy Lionheart is one such kid.

## The Boy Who Trapped a Lion With a Dirty Sock

[youtube:https://www.youtube.com/embed/xS_DjRwF2yE]

## Orphaned During the Tribulation

Orphaned during the Tribulation, the toddler escaped the massacre by hiding in a pipe. Mei and Boris rescued him. By the start of The Adventures of Billy Lionheart, the little one had moved in with four foster human parents and a lion nanny into their comfy home in the Millennial Kingdom.

## A Plan in the Making

He knew his real parents were alive and went to work figuring out how to find them and how to escape his caregivers so that he could get to work.

## The Opportunity

When the humans were away attending the Feast of Tabernacles, Little Billy was left alone with Leonard Lion. That was the opportunity he had been waiting for.

## Read the Book

Read what happens next in [Billy the Lion Boy](/books/billy-the-lion-boy).
    `
  },
  'what-if-you-must-flee-your-comfy-life': {
    title: "What if you must flee your comfy life because of something you saw?",
    date: "June 7, 2026",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book5mei-1760410829482.jpg",
    content: `
Mei had a cushy job as a scientist in Beast Corp., the world's most prestigious biotech company. Her perks were mind boggling, including the promise of immortality, if she did everything they asked of her.

## Everyone Around Her Vanished on the Plane. What Happened Next Changed Everything.

[youtube:https://www.youtube.com/embed/5BGAuGR-IFs]

## The Truth Behind Beast Corp

All was good until curiosity got the better of her. Subjects who participated in the program were cloned - the cloned bodies were bioengineered to be perfect and powerful and the final step would be to transfer the subject's mind to the body. That was the con. The memories of the subject were given to the clone, then the subject was terminated.

## The Moment Everything Changed

Ben, Mei's acquaintance was one such subject. When she witnessed her supervisor end him after transferring his memories to the clone she had grown for him, she fled. So begins the story Mei. Emunah Short Stories Book 5.

## Get the Book

[Emunah Short Stories Book 5: Mei](/books/emunah-book-5-mei)
    `
  },
  'stories-of-body-transformation': {
    title: "Stories of Body Transformation That Fascinate Me",
    date: "May 31, 2026",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book4john-1760404535976.jpg",
    content: `
Stories of body transformation fascinate me. How an 80lb weakling builds his body so that he can face beach bullies and win (an old body building ad I saw in really old comic books).

## The Skinny Scholar Who Defied Everyone

[youtube:https://www.youtube.com/embed/1lSUsM-xOt0]

## Superman's Transformation

Superman II starring Christopher Reeve had a scene when he lost his powers and was beaten up by a bully in a bar. The scene where he faced the bully after getting back his strength, and gave the bully a taste of his own medicine was downright satisfying.

Then there were the before and after pics of Christopher Reeve where he built his body to play Superman, and more recently the latest Superman actor, David Corenswet's transformation to play the titular role was beyond impressive.

## Read the Book

Along that line is my story [Emunah Short Stories Book 4: John - An Inspiring Tale of Strength](/books/emunah-book-4-john)
    `
  },
  'unequally-yoked': {
    title: "Unequally Yoked?",
    date: "May 24, 2026",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book3emunah-1760404534743.jpg",
    content: `
When a Christian marries a non Christian, they are considered to be unequally yoked - something that the Bible warns against.

## She Turned Him Down. He Never Forgot Her.

[youtube:https://www.youtube.com/embed/ovdWt3v9dJk]

## A Real Love Story

In my school days, I heard of a sweet girl and a hunky guy who seemed made for each other, and clearly attracted to each other. They were boyfriend girlfriend for a while. The girl was a Christian who loved the Lord, while the boy was an atheist. For that reason, to obey God, she broke up with him.

## The Romeo and Juliet of Our Cohort

They were the Romeo and Juliet of our cohort and inspired the story of Emunah and Jayden.

## Read the Book

[Emunah Short Stories Book 3: Emunah - UFOs, Aliens & Faith](/books/emunah-book-3-emunah)
    `
  },
  'how-far-would-you-go-to-gain-immortality': {
    title: "How far would you go to gain immortality?",
    date: "May 17, 2026",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/questforimmortality-1760677198452.jpg",
    content: `
Cloning humans was once pure science fiction but now with news about companies exploring growing clones for body parts, would the sci fi trope of cloning bodies to replace natural ones become a reality?

## Scientists Are Growing Human Bodies for the Wealthy to Live Forever

[youtube:https://www.youtube.com/embed/lNJ-_Y4SffY]

## Beast Corp's Promise

That is one of the premises in The Quest for Immortality - Beast Corp's promise that lured Mei into the organisation.

## Read the Book

Read the entire story in the scifi novel [The Quest For Immortality](/books/quest-for-immortality)
    `
  },
  'eerie-presence-in-a-room': {
    title: "Have you ever felt an eerie presence in a room in a house?",
    date: "May 10, 2026",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book2oliver-1760404534983.jpg",
    content: `
In a house where we often spent the night, one room in particular felt spooky, like there was an eerie presence there. The owner who stayed in there passed away in the house so was that a ghostly presence?

## She Was Talking to Ghosts. He Found His Dead Father Alive.

[youtube:https://www.youtube.com/embed/hC0PmSkfqzE]

## Familiar Spirits

Before he died, he claimed to have been visited by the ghosts of dead family members in separate incidents. These were familiar spirits, as is the "ghost" impersonating him.

## The Inspiration

That inspired the cursed box story arc in Emunah Short Stories, which begins in the second book, Oliver.

## Read the Book

[More about Emunah Short Stories Book 2: Oliver - A Supernatural Thriller](/books/emunah-book-2-oliver)
    `
  },
  'spiritual-warfare-in-the-family': {
    title: "Spiritual Warfare in the Family",
    date: "May 3, 2026",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/dragonunbound-1760677388114.jpg",
    content: `
We are now in the church age or the dispensation of Grace. After this is the Rapture of The Church, followed by 7 years of Tribulation. At the end of this, Jesus Christ returns and defeats Satan and all his followers and binds the Dragon or Great Deceiver for a thousand years.

Then Jesus Christ reigns for a thousand years.

Once Dragon is released, what do you think will happen?

## Their Love Built a Kingdom. His Lies Could Tear It Apart.

[youtube:https://www.youtube.com/embed/Bma0Xrwbo-o]

## The Dragon's Tried and Tested Formula

I believe he would deceive the nations using his tried and tested formula he has been following since the fall of man.

Use sly deception, masquerade as an angel of light to deceive the weak. He tempted Eve who then got Adam to eat the forbidden fruit. He turned family members against one another.

## A Social Commentary

Using the observations of this day and age, I projected that Dragon would again strive to break up marriages, turn children against parents and destroy families which are the building blocks of society.

Dragon Unbound is as much a social commentary on today's state of affairs, the spiritual warfare in our current world, as much as it is a fantasy novel set in the Bible Prophecy timeline.

## Read the Book

[More about Dragon Unbound](/books/dragon-unbound)
    `
  },
  'the-guy-who-broke-her-heart': {
    title: "The Guy Who Broke Her Heart",
    date: "April 26, 2026",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book1abigail-1760404534946.jpg",
    content: `
Have you ever experienced the pain of a broken heart?

Against all logic, you fell for someone who isn't into you, who treats you like a friend while infatuated with someone else?

## He Used Her to Get to Her Friend

[youtube:https://www.youtube.com/embed/fF1LB6JdxeY]

## Inspired by Real Stories

Abigail is inspired by the heartbreaking tales of real women who remain unnamed to protect their identities.

## Read the Book

More about Abigail, the book which launched the Emunah Short Stories series:

[Emunah Short Stories Book 1: Abigail - A Story of True Love and Betrayal](/books/emunah-book-1-abigail)
    `
  },
  'emunah-chronicles-cinematic-videos': {
    title: "Emunah Chronicles Universe Cinematic Videos",
    date: "April 16, 2026",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/abigailbook-1765759457851.jpg?width=1200&height=1200&resize=contain",
    content: `
Did you read any of my books from the Emunah Chronicles Universe?

Do you prefer watching videos to reading books?

I realised that most people don't read fiction books but they enjoy watching cinematic videos. So this playlist is for all of you who love videos.

## Watch the Playlist

[youtube:https://www.youtube.com/embed/videoseries?list=PLVyqR1ZxYK-M691kPO1iStkZaLrBFoKU3]

## About the Videos

So I made a series of cinematic videos from my Emunah Chronicles novels and compiled them in this YouTube playlist.

These are not mere book trailers, they are cinematic videos of the stories that I wrote in my novels.

## Who Are These Videos For?

They are made for the following:

- Readers who want to see the characters come to life
- People who prefer watching to reading
- Fans of Christian speculative fiction
- Anyone curious about the Emunah Chronicles Universe

## Explore the Books

If any of these videos interest you, do check out the books they are based on. The novels contain far more detail, depth, and story than the videos can capture.

[Explore the Emunah Chronicles Universe](https://emunahchronicles.com)
    `
  },
  'emunah-chronicles-universe': {
    title: "The Emunah Chronicles universe",
    date: "December 15, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/abigailbook-1765759457851.jpg?width=1200&height=1200&resize=contain",
    content: `
One project I've been procrastinating for way too long is to give readers a full character list of the entire Emunah Chronicles universe, comprising of the original Emunah Chronicles books and The Quest for Immortality, all 8 books of Emunah Short Stories, The Adventures of Billy Lionheart and Dragon Unbound, so that you can see how the stories connect and the story arcs of your favourite characters across the books.

## A Comprehensive View

I wrote the content for this new website, with nuggets from each book and tidbits about each character, put together in what I hope is a comprehensive view of this fictional world I created.

## Bible Prophecy Fiction

It's Bible prophecy fiction based on our real world, so it's realistic fiction? I honestly have no idea how to categorise my work.

## Inspired by Real People

These fictional characters are inspired multiple aspects of many real people, mixed and matched like rojak so that none of the people who inspired these characters can be identified.

## Explore the Universe

I'll stop rambling. Presenting The Emunah Chronicles Universe.

[Visit emunahchronicles.com](https://emunahchronicles.com) to explore the full character list, story connections, and character arcs across all the books in this fictional universe.

## What You'll Find

The website includes:

- Complete character lists from all books
- How the stories interconnect
- Character story arcs spanning multiple books
- Details from the original Emunah Chronicles
- The Quest for Immortality connections
- All 8 Emunah Short Stories characters
- The Adventures of Billy Lionheart universe
- Dragon Unbound characters and their journeys

## A World Built Over Time

This universe has grown organically over years of writing, with characters appearing across multiple books and storylines weaving together in unexpected ways. Now you can finally see the big picture!

Enjoy exploring the Emunah Chronicles Universe!
    `
  },
  'billy-lionheart-christmas': {
    title: "Billy Lionheart: The Lion Boy Who'll Steal Your Kids' Hearts This Christmas (And Yours Too)",
    date: "December 6, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/BillyLionheart-1765016057490.png?width=1200&height=1200&resize=contain",
    content: `
Remember curling up to Narnia when you were a kid? Bring that joy and wonder into your child's life this Christmas with The Adventures of Billy Lionheart.

## A Series Kids of All Ages Will Love

[It's a series of 3 novels](/books/billy-lionheart-series) that kids of all ages will love!

## The Adventures Await

### Billy The Lion Boy
Imagine learning to fly a plane when you are only seven. How about exploring a world with your lion guardian, living in a beautiful fantasy forest with talking animals while you frolic among lion cubs as the only human cub in your adoptive lion family.

Join Billy in his journey from orphan raised by lions to royalty as the only son of immortal parents.

[Discover Billy The Lion Boy](https://www.billylionheart.com/books/4)

### Billy & Bluma: Double Trouble
Experience wonder with Billy and Bluma as they sneak out of school to search for their aunt Mathilda, exploring the brave new world where they meet a mysterious new friend, who turns foe.

Billy's parents gave him a glowing orb which comes in useful as a floating lamp, lighting the way for Bluma and Billy, while they sneak away under Leonard Lion's watch. Expect squabbles, shenanigans and unbreakable friendship as this unlikely trio stumbles into Junta's clutches. This is the adventure where Billy gains super strength.

[Read Billy & Bluma: Double Trouble](https://www.billylionheart.com/books/5)

### Secret Hero & His Flying Lion
Returning with super strength, Billy's new power goes wild in this action-packed adventure!

Mentored by their mysterious gym teacher, Samson, Billy and his friends train to be the new generation of super heroes, while they solve the mystery as to who poisoned Leonard Lion.

[Explore Secret Hero & His Flying Lion](https://www.billylionheart.com/books/6)

## More Billy Lionheart Resources

**Book Club Resources:** Get fun-filled activities at the [book club resources page](http://www.billylionheart.com/book-club)!

**Join the Community:** Read, connect with fellow friends of Billy and discuss these books at [BillyLionheart.com](http://www.billylionheart.com)!

Give your children the gift of adventure, faith, and friendship this Christmas!
    `
  },
  'flourless-chocolate-scone': {
    title: "Flourless Chocolate Scone Recipe",
    date: "December 3, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/chocolatescones-1764742693118.jpg?width=1200&height=1200&resize=contain",
    content: `
These flourless chocolate scones are a chocolate lover's dream! Made with ground almonds instead of flour, they're perfect for those looking for a wheat-free treat.

## Ingredients

Rich cocoa powder combined with both regular and white chocolate chips creates layers of chocolate flavor in every bite.

## The Perfect Texture

The ground almonds give these scones a wonderful texture that's both tender and satisfying. They're perfect with a cup of tea or coffee while reading your favorite book.

## Baking Tips

- Use high-quality cocoa powder for the best flavor
- Don't overmix the dough
- Let them cool slightly before serving for the perfect texture

These scones are ideal for cozy afternoons with a good book. Try them with your next reading session!
    `
  },
  'romeo-juliet-quest-for-immortality': {
    title: "The Romeo and Juliet of The Quest for Immortality",
    date: "December 1, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/jaydenavainlove-1764590221153.png?width=1200&height=1200&resize=contain",
    content: `
Of all the lovebirds in the Emunah Chronicles novel: The Quest For Immortality, the most memorable pair to me is the tragic couple, Jayden and Ava.

## A Tragic Love Story

Their story is akin to Romeo and Juliet meets Titanic. Although they are secondary characters, their love story spans several books.

## Why They're Memorable

What makes Jayden and Ava special is the depth of their connection despite the obstacles they face. Their relationship explores themes of:

- Love in impossible circumstances
- Sacrifice and devotion
- Faith tested by tragedy
- The eternal nature of true love

## Spanning Multiple Books

While not the main characters, Jayden and Ava's story weaves through the Emunah Chronicles, adding emotional depth and showing how love persists even through the darkest times.

Their story reminds us that sometimes the most powerful love stories are the ones we don't expect—the secondary characters who steal our hearts.

[Read their story](/books/quest-for-immortality) in The Quest For Immortality.
    `
  },
  'guillemard-east-primary-school': {
    title: "Guillemard East Primary School",
    date: "November 16, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/geps-1763381011250.jpg?width=1200&height=1200&resize=contain",
    content: `
Guillemard East Primary School was located behind Singapore Badminton Hall. Sadly, it closed in 1987 due to low enrollment.

## Fond Memories

That school held fond childhood memories for me. It's also where my father worked as a teacher.

## Inspiration for Fiction

Fiction inspired by fragments of the Author's memories from decades ago, Little Nonya's Escapades is set in this cherished old school.

## A Piece of Singapore History

The school represents a piece of Singapore's educational history that's now gone. Through my writing, I preserve these memories and share what life was like in a simpler time.

## Personal Connection

Having my father work there as a teacher made the school even more special to me. The halls, classrooms, and playground became the backdrop for many childhood adventures—some real, some imagined, and some that became the foundation for Little Nonya's Escapades.

[Explore Little Nonya's world](/books/little-nonyas-escapades) and discover the school through her eyes.
    `
  },
  'in-memory-of-ah-kong': {
    title: "In Memory of Ah Kong",
    date: "November 8, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ahkong-1762693225545.jpg?width=1200&height=1200&resize=contain",
    content: `
When Daddy was alive, he told me many stories of his late Dad's youth. My grandfather, Ah Kong, was incredibly strong.

## A Real-Life Strongman

He could do all the stunts performed by circus strongmen. His signature feat was to lift 4 body builders off the ground in a reverse pushup.

## A True Hero

Ah Kong was a hero who once swam out in the open sea to save a stranger from drowning.

## Preserving His Legacy

These stories my father told me have shaped who I am and influenced my writing. The themes of strength, courage, and selfless heroism that appear in my books are inspired by Ah Kong's real-life example.

## More Than Physical Strength

What made Ah Kong truly remarkable wasn't just his physical abilities—it was his character. He used his strength to help others, never to intimidate or show off. That's the kind of hero worth remembering and writing about.

His legacy lives on in the characters I create and the values I try to convey through my stories.
    `
  },
  'a-fathers-heartbreak': {
    title: "A Father's Heartbreak",
    date: "November 1, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dragonunboundcurtain-1762090791130.jpg?width=1200&height=1200&resize=contain",
    content: `
When I wrote Dragon Unbound, Leia's story stuck in my mind, haunting me.

## Too Real

It's too real, how one could be so busy chasing life's pursuits, even noble causes, that one neglects one's kids.

## The Danger of Misunderstanding

Misunderstandings can lead to bitterness, which can be exploited by wolves in sheep's clothing.

## A Warning in Fiction

Dragon Unbound explores this painful reality through Leia's relationship with her father. He's pursuing noble goals, serving the King, doing "important" work—but in the process, he's losing his daughter.

## Universal Themes

This isn't just a fantasy story. It's a reflection of real-life struggles many families face:

- Work-life balance
- Prioritizing relationships over achievements
- The consequences of emotional neglect
- How the enemy uses our weaknesses

## Why It Haunts Me

Leia's story haunts me because I've seen it play out in real life. Good people, doing good things, but missing what matters most—their children's hearts.

[Read Dragon Unbound](/books/dragon-unbound) and discover how this father's heartbreak unfolds—and whether reconciliation is possible.
    `
  },
  'dragon-unbound-new-trailer': {
    title: "Dragon Unbound: New Book Trailer Unveiled",
    date: "October 15, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/dragonunboundwhite-1760676617965.jpg",
    content: `
I just created a new trailer for my latest book, Dragon Unbound.

## The Story

After a thousand years of paradise on earth, Dragon is released, driving a wedge between Billy and his family.

## A World Divided

In a realm where mortals live under the divine rule of the King of Kings, best friends turned lovers Billy, gifted with divine strength, and Bluma face a world fracturing under Dragon, the Great Deceiver's lies.

## The Ultimate Test

As Dragon recruits fallen man to his cause, sparking betrayal among families—sons and daughters against parents—alliances shatter, and loyalties are tested.

## The Question

Who will stand? Who will fall?

## Watch the Trailer

The new trailer captures the epic scope of this story, showing the beauty of the millennial kingdom before Dragon's release and the chaos that follows.

## What Readers Are Saying

Readers have called Dragon Unbound my best work yet—a perfect blend of family drama, spiritual warfare, and faith-based adventure.

[Get your copy today](/books/dragon-unbound) and experience the story that's captivating readers worldwide.
    `
  },
  'memoirs-tropical-island-girl': {
    title: "Memoirs of a Tropical Island Girl",
    date: "October 1, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/nonya-escapades-1760677006633.jpg",
    content: `
Numbers switch places and letters confuse Tammy when she's tired. She's probably dyslexic. Who knows? She was never diagnosed. No one ever suspected.

## Hidden Struggles

Who could ever guess that the girl who topped the entire cohort year after year might have a learning disability!

## From Memory to Fiction

When I first wrote Little Nonya Escapades, I intended to write a fictional story, using my own childhood memories as an initial draft.

## A Personal Connection

The character of Tammy reflects some of my own experiences—the struggle with letters and numbers that nobody saw, the pressure to perform, the hidden challenges that shaped who I became.

## More Than Just a Story

Little Nonya Escapades became more than fiction. It became a way to process my childhood, to celebrate the resilience of children who face hidden challenges, and to honor the experience of growing up as a Straits Born Chinese in Singapore.

## Themes Explored

- Hidden learning differences
- Cultural identity
- Childhood resilience
- The pressure to succeed
- Finding your place in the world

## Why It Matters

By sharing Tammy's story, I hope to encourage children (and adults) who struggle in ways others don't see. You're not alone. Your challenges don't define you. And sometimes, the greatest successes come from those who had to work hardest.

[Read Little Nonya's Escapades](/books/little-nonyas-escapades) and discover Tammy's world.
    `
  },
  'flights-of-fantasy': {
    title: "Flights of Fantasy with Janice Wee",
    date: "September 23, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/IMG_0194-1760677132993.jpeg",
    content: `
Mary flees from her birth home to her ancestral land. She falls in love with her gorgeous landlord. Then global chaos hits.

## A Charismatic Leader

A charismatic leader promises peace, but things are not what they seem.

## Grounded in Reality

This gripping fantasy adventure is grounded in reality, exploring themes of faith, family, and the eternal battle between good and evil.

## The World of Mary's Flight

Mary's Flight takes readers on a journey through:

- Romance in turbulent times
- The rise of global deception
- Faith tested by fear
- The choice between comfort and truth
- Love in the midst of apocalypse

## Why This Story Matters

While fantastical in many ways, Mary's Flight asks relevant questions: What would you do if the world fell apart? Who would you trust? How far would you go to protect those you love?

## Part of the Emunah Chronicles

Mary's Flight is part of the larger Emunah Chronicles series, showing one woman's journey through the end times with faith, courage, and love.

[Explore Mary's world](/books/emunah-book-8-marys-flight) and discover what happens when fantasy meets reality.
    `
  },
  'free-ebooks-promotion': {
    title: "Free Ebooks: Current Promotions",
    date: "September 19, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/questforimmortality-1760677198452.jpg",
    content: `
Craving an Epic Adventure? Grab The Quest for Immortality FREE Now!

## Limited Time Offer

Looking for a thrilling read at zero cost? My must-read Emunah Chronicles novel, The Quest for Immortality, is yours FREE in PDF format—normally $9.99 on online stores!

## My Thank You

This limited-time offer is my thank-you to you for your amazing support.

## Don't Miss Out

Dive into a world of mystery and eternal quests before this exclusive giveaway ends without any prior warning!

## What You'll Get

The Quest for Immortality is a complete novel featuring:

- Dystopian to utopian transformation
- Biblical prophecy wrapped in fiction
- Compelling characters you'll care about
- Fast-paced action and adventure
- Themes of faith, hope, and redemption

## Why This Book?

This is one of my most popular novels, beloved by readers for its unique take on end-times prophecy and its hopeful message about God's ultimate victory.

## How to Get Your Free Copy

Visit [my website](https://www.janicewee.com) to download your free PDF copy before this offer expires!

Don't wait—this promotion could end at any time!
    `
  },
  'cosy-mysteries-unexpected-twists': {
    title: "Cosy Mysteries: Lighthearted Reads with Unexpected Twists",
    date: "September 1, 2025",
    author: "Janice Wee",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/twoworlds-1760677286238.jpg",
    content: `
Looking for a good cosy mystery? I've got two for you.

## For Historical Romance Lovers

If you love historical romances, I recommend Two Worlds.

## For High School Adventures

If you like high school tales with crushes, superpowers and talking animals, you'd love Secret Hero & His Flying Lion.

## Billy and Bluma's Story

Billy has known Bluma since they were babies. But when they meet in St Lydia's Academy, something's changed.

## What Makes These Cosy Mysteries?

These books combine:

- Gentle suspense (no graphic violence)
- Character-driven plots
- Satisfying mysteries
- Clean content suitable for all ages
- Unexpected twists that surprise without shocking

## Two Worlds

A historical romance with mystery elements, Two Worlds takes you on a journey through time and love, exploring:

- Cross-cultural connections
- Historical settings
- Romantic tension
- A mystery that spans generations

## Secret Hero & His Flying Lion

This contemporary fantasy cosy mystery features:

- A high school setting
- Supernatural abilities
- Talking animals
- Young romance
- A mystery threatening the school

## Perfect for Cozy Reading

Both books are perfect for curling up with a cup of tea on a quiet afternoon. They'll keep you guessing without keeping you up at night!

[Explore Two Worlds](/books/two-worlds) or [discover Secret Hero](/books/secret-hero-flying-lion) today!
    `
  },
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

  const now = new Date()
  now.setHours(0, 0, 0, 0)
  const postDate = new Date(post.date)
  postDate.setHours(0, 0, 0, 0)
  if (postDate > now) {
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

              // YouTube embed: [youtube:URL]
              const youtubeMatch = paragraph.trim().match(/^\[youtube:(.+)\]$/)
              if (youtubeMatch) {
                return (
                  <div key={index} className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl my-8">
                    <iframe
                      src={youtubeMatch[1]}
                      title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
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