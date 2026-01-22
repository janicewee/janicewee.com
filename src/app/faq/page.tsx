"use client"

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

const faqData = [
  {
    question: "Who is Janice Wee?",
    answer: (
      <>
        <p className="mb-4">
          Janice Wee is a Christian indie author from Singapore who writes stories inspired by family lore from her Straits Born Chinese family, as well as Christian Speculative Fiction.
        </p>
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <Link href="/books/little-nonyas-escapades" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                    <Image
                      unoptimized
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/littlenonyaescapades-1760416064407.jpg"
                      alt="Little Nonya's Escapades book cover"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary">Little Nonya's Escapades</h4>
                <p className="text-sm text-muted-foreground">Her childhood autobiography</p>
              </div>
            </Card>
          </Link>
          <Link href="/books/sweetcorn-suzie" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Suzie-1760410252107.jpg"
                  alt="Sweetcorn Suzie book cover"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary">Sweetcorn Suzie</h4>
                <p className="text-sm text-muted-foreground">Actual memories of God's protection</p>
              </div>
            </Card>
          </Link>
        </div>
        <p>
          Each story in <Link href="/books/sweetcorn-suzie" className="text-primary hover:underline font-semibold">Sweetcorn Suzie</Link> is an actual memory of God's protection, that is so far fetched and unbelievable that it might as well be fiction.
        </p>
      </>
    )
  },
  {
    question: "What are Janice Wee's books about?",
    answer: (
      <>
        <p className="mb-4">
          Janice Wee writes Christian Speculation Fiction, urban fiction, sweet romances as well as Historical fiction set in South East Asia. Her books are realistic fiction anchored in family history, Bible Prophecy and her personal experiences as well as personal stories shared by real people in her life, wrapping truth in fiction.
        </p>
        <div className="bg-muted/30 p-6 rounded-lg my-6">
          <h4 className="font-semibold text-primary mb-3">The Emunah Universe</h4>
          <p className="mb-4">
            Inspired by Tolkien, she created the vivid <Link href="/emunah-timeline" className="text-primary hover:underline font-semibold">Emunah Universe</Link> in which the following series are set:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/books/emunah-short-stories" className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="relative aspect-[2/3]">
                  <Image
                    unoptimized
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book1abigail-1760404534946.jpg"
                    alt="Emunah Short Stories"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h5 className="text-sm font-semibold text-primary">Emunah Short Stories</h5>
                </div>
              </Card>
            </Link>
            <Link href="/books/billy-lionheart-series" className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="relative aspect-[2/3]">
                  <Image
                    unoptimized
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billylionheart-1760074636207.jpg"
                    alt="The Adventures of Billy Lionheart"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h5 className="text-sm font-semibold text-primary">Billy Lionheart Series</h5>
                </div>
              </Card>
            </Link>
            <Link href="/books/dragon-unbound" className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="relative aspect-[2/3]">
                  <Image
                    unoptimized
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/dragonunbound-1760404534966.jpg"
                    alt="Dragon Unbound"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h5 className="text-sm font-semibold text-primary">Dragon Unbound</h5>
                </div>
              </Card>
            </Link>
            <Link href="/books/quest-for-immortality" className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="relative aspect-[2/3]">
                  <Image
                    unoptimized
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book3k-1760074872135.jpg"
                    alt="The Quest for Immortality"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h5 className="text-sm font-semibold text-primary">The Quest for Immortality</h5>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </>
    )
  },
  {
    question: "What Historical fiction books has Janice Wee written?",
    answer: (
      <>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/books/singapores-runaway" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/runaway-1760410193575.jpg"
                  alt="Singapore's Runaway book cover"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary mb-2">Singapore's Runaway</h4>
                <p className="text-sm text-muted-foreground">
                  A maritime adventure set in South East Asia, inspired by her grandfather who ran away from his wealthy Peranakan family in Singapore to join a sailing ship during early 1900s. He was found in Indonesia by his step uncle who persuaded him to return to Singapore.
                </p>
              </div>
            </Card>
          </Link>
          <Link href="/books/two-worlds" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/2worlds-1760410225289.jpg"
                  alt="Two Worlds book cover"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary mb-2">Two Worlds</h4>
                <p className="text-sm text-muted-foreground">
                  A sweet romance and murder mystery set in both Singapore and Indonesia. Inspired by a family who fell into poverty because of the patriarch's opium addiction, which was all too common during Singapore's early years.
                </p>
              </div>
            </Card>
          </Link>
        </div>
      </>
    )
  },
  {
    question: "Who is Emunah?",
    answer: (
      <>
        <p className="mb-4">
          <strong>Emunah means "Faith" in Hebrew.</strong> Emunah Chronicles is a story about faith in the God who created the Universe.
        </p>
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <Link href="/books/emunah-book-3-emunah" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book3emunah-1760404534743.jpg"
                  alt="Emunah Book 3: Emunah"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary">Emunah Book 3: Emunah</h4>
              </div>
            </Card>
          </Link>
          <Link href="/books/emunah-book-8-marys-flight" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book8mary-1760410829856.jpg"
                  alt="Emunah Book 8: Mary's Flight"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary">Emunah Book 8: Mary's Flight</h4>
              </div>
            </Card>
          </Link>
        </div>
        <p>
          Emunah is also the name of the central character who is raptured early in the <Link href="/emunah-timeline" className="text-primary hover:underline font-semibold">Emunah Chronicles timeline</Link>. She does not appear again until the final book of Emunah Short Stories, <Link href="/books/emunah-book-8-marys-flight" className="text-primary hover:underline font-semibold">Mary's Flight</Link>.
        </p>
      </>
    )
  },
  {
    question: "What types of romance books does Janice Wee write?",
    answer: (
      <>
        <p className="mb-4">
          Janice writes <strong>clean romance</strong>. High emotion, lots of drama, but no smut.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/books/two-worlds" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/2worlds-1760410225289.jpg"
                  alt="Two Worlds"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary mb-2">Two Worlds</h4>
                <p className="text-sm text-muted-foreground">A sweet romance adventure about star-crossed lovers in the midst of a murder mystery revolving around a serial killer, linked to an opium ring in Southeast Asia.</p>
              </div>
            </Card>
          </Link>
          <Link href="/books/emunah-book-1-abigail" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book1abigail-1760404534946.jpg"
                  alt="Abigail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary mb-2">Abigail</h4>
                <p className="text-sm text-muted-foreground">A tragic love story which starts the Emunah Short Stories series. Think of the movie: Titanic.</p>
              </div>
            </Card>
          </Link>
          <Link href="/books/dragon-unbound" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/dragonunbound-1760404534966.jpg"
                  alt="Dragon Unbound"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary mb-2">Dragon Unbound</h4>
                <p className="text-sm text-muted-foreground">The love story between soulmates Billy and Bluma. This epic fantasy novel follows the couple's romance over a thousand years. Contains mature themes.</p>
              </div>
            </Card>
          </Link>
        </div>
      </>
    )
  },
  {
    question: "Where can I find Janice Wee's books?",
    answer: (
      <div className="space-y-4">
        <p>
          Janice Wee's books can be purchased from <strong>D2DPrint, Ingram, Kobo, Barnes & Noble, Everand, Tolino, Overdrive, Vivlio, Smashwords, Gardners, Fable</strong> and major online bookshops.
        </p>
        <div className="bg-primary/10 p-6 rounded-lg">
          <p className="font-semibold mb-2">Get the full list of where to buy each book:</p>
          <a 
            href="https://books2read.com/ap/8G2gQM/Janice-Wee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline text-lg font-semibold"
          >
            books2read.com/ap/8G2gQM/Janice-Wee →
          </a>
        </div>
        <p className="text-muted-foreground">
          Alternatively, you can check with your local library. If your library doesn't have the book, you can recommend it to them and they will get it for you.
        </p>
      </div>
    )
  },
  {
    question: "Why do you write Christian Speculative fiction based on Bible Prophecy?",
    answer: (
      <div className="space-y-4">
        <p>
          I would say it is a calling. Something I feel my life has led up to. I grew up in a household full of books and DC comics. During the school holidays my cousin Ray and I would spend a week together, either with her family or mine. Her Dad is a Bible teacher with a deep interest in Bible Prophecy. Dinner conversations would revolve around end times Bible Prophecies, current events, and comic books. In particular Superman.
        </p>
        <p>
          Decades later, The Lord laid it in my heart to write fiction that takes the reader from Revelation 1 to Revelation 22. Hence the entire Emunah series. My hope is that these stories encourage fellow believers in our Lord Jesus Christ.
        </p>
      </div>
    )
  },
  {
    question: "Are the stories in Naughty Little Nonya real?",
    answer: (
      <>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <Link href="/books/naughty-little-nonya" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/nonya-1760416290723.jpg"
                  alt="Naughty Little Nonya"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary">Naughty Little Nonya</h4>
              </div>
            </Card>
          </Link>
        </div>
        <p>
          Most of the characters in the stories are based on real people, capturing the essence of their characters and personalities. I based Tammy on myself. Pixie is based on grandpa's pet dog who was named Pixie. My cousin and I powdered the floor, but we never dealt with burglars nor were we ever kidnapped as kids. I did not cut up grandma's kebayas. As for the rest of the tales, if my mother remembers them, they happened. If not, it's all fiction.
        </p>
      </>
    )
  },
  {
    question: "What is Singapore's Runaway about?",
    answer: (
      <>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <Link href="/books/singapores-runaway" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/runaway-1760410193575.jpg"
                  alt="Singapore's Runaway"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary">Singapore's Runaway</h4>
              </div>
            </Card>
          </Link>
        </div>
        <p>
          Singapore's Runaway is a coming of age adventure where a teenage boy breaks away from family expectations, to explore life on his own. It is set largely in the Straits of Malacca, under British colonial rule. Stanley, the protagonist joins a multi racial crew which mirrors the racial harmony between the three main races in Singapore, the Chinese, Malays and Indians during difficult times.
        </p>
      </>
    )
  },
  {
    question: "What is Two Worlds about?",
    answer: (
      <>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <Link href="/books/two-worlds" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/2worlds-1760410225289.jpg"
                  alt="Two Worlds"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary">Two Worlds</h4>
              </div>
            </Card>
          </Link>
        </div>
        <p className="mb-3">
          Mysterious fugitive Stanley and Daddy's girl Eve fall in love, to Daddy's disdain. At the same time, men in Eve's village in Indonesia die one after another, presumably at the hands of the village ghost.
        </p>
        <p className="mb-3">
          The original name of this book was <em>Two Worlds, One Love and a Serial Killer</em>. It is a sweet historical romance and a crime thriller rolled in one.
        </p>
        <p>
          The story, set during the time when opium addiction was rampant, destroying lives in Singapore, touches on the issues of gangs and the opium trade within Southeast Asia.
        </p>
      </>
    )
  },
  {
    question: "What is Naughty Little Nonya about?",
    answer: (
      <>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <Link href="/books/naughty-little-nonya" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/nonya-1760416290723.jpg"
                  alt="Naughty Little Nonya"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary">Naughty Little Nonya</h4>
              </div>
            </Card>
          </Link>
        </div>
        <p>
          Naughty Little Nonya fleshes out the Peranakan culture in Singapore's Nyonya and Baba community in the 1970s through short stories. It's a nostalgic look at the past through the mischief unsupervised kids get up to. Much of these are wild flights of imagination, though the characters are based on the author herself, and her cousins and family members.
        </p>
      </>
    )
  },
  {
    question: "What is Little Nonya Escapades about?",
    answer: (
      <>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <Link href="/books/little-nonyas-escapades" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/littlenonyaescapades-1760416064407.jpg"
                  alt="Little Nonya's Escapades"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary">Little Nonya's Escapades</h4>
              </div>
            </Card>
          </Link>
        </div>
        <p>
          It's a story about a teacher's daughter who exhibits symptoms of dyslexia, yet tops her class each year. She lacks social skills and is an ultimate klutz, which fuels her insecurities, driving her to obsess with her grades to compensate. It's a story of family, love, friendship, insecurities, school life, studies and growing up. It's also the author's childhood memoirs.
        </p>
      </>
    )
  },
  {
    question: "What is Sweetcorn Suzie about?",
    answer: (
      <>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <Link href="/books/sweetcorn-suzie" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Suzie-1760410252107.jpg"
                  alt="Sweetcorn Suzie"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary">Sweetcorn Suzie</h4>
              </div>
            </Card>
          </Link>
        </div>
        <p>
          Sweetcorn Suzie is a collection of stories that relate the love and faithfulness of God in one bumbling woman's life. These are true stories as the author remembers them. It ends with her miscarriage and recovery from grief.
        </p>
      </>
    )
  },
  {
    question: "What inspired Short Stories from Long Hill?",
    answer: (
      <>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <Link href="/books/escape-to-long-hill" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Longhill12-1760410284805.jpg"
                  alt="Escape to Long Hill"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary">Escape to Long Hill</h4>
              </div>
            </Card>
          </Link>
        </div>
        <p>
          The stories in this series is inspired by the wildlife in Bukit Panjang, which means long hill in Malay. Chickens run wild in the parks of Bukit Panjang, more than a decade after a famed storm that destroyed a chicken farm, from which the resident chickens escaped. The series begins with Escape to Long Hill.
        </p>
      </>
    )
  },
  {
    question: "Where can I get The Quest for Immortality for free?",
    answer: (
      <>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <Link href="/books/quest-for-immortality" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book3k-1760074872135.jpg"
                  alt="The Quest for Immortality"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary">The Quest for Immortality</h4>
              </div>
            </Card>
          </Link>
        </div>
        <div className="bg-primary/10 p-6 rounded-lg">
          <p className="font-semibold mb-2">Download the FREE PDF ebook:</p>
          <a 
            href="https://www.janicewee.com/books/the-quest-for-immortality-full.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline text-lg font-semibold"
          >
            Download Free PDF →
          </a>
        </div>
      </>
    )
  },
  {
    question: "What is The Quest for Immortality about?",
    answer: (
      <>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <Link href="/books/quest-for-immortality" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book3k-1760074872135.jpg"
                  alt="The Quest for Immortality"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary">The Quest for Immortality</h4>
              </div>
            </Card>
          </Link>
        </div>
        <p>
          It's a story about transhumanism vs Bible Prophecy. One camp seeks to achieve immortality through science and the occult, while the other group is granted eternal life through faith in God's own Son (John 3:16 kjv <em>"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."</em>)
        </p>
      </>
    )
  },
  {
    question: "What is Disturbing Dreams about?",
    answer: (
      <>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <Link href="/books/emunah-book-1-disturbing-dreams" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/emunah-book-1-disturbing-dreams.jpg"
                  alt="Disturbing Dreams"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary">Disturbing Dreams</h4>
              </div>
            </Card>
          </Link>
        </div>
        <p className="mb-3">
          Are dreams a reflection of your subconscious, or do they foretell the future?
        </p>
        <p>
          Disturbing Dreams is a sci-fi tale that borders on horror in realistic fiction. The short story is told through different characters surrounding and including the title character Emunah, expounding their philosophical points of view, and their experiences as seen through their individual lenses.
        </p>
      </>
    )
  },
  {
    question: "What is Beast's Mark about?",
    answer: (
      <>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <Link href="/books/emunah-book-2-the-beasts-mark" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/emunah-book-2-beasts-mark.jpg"
                  alt="Beast's Mark"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary">Beast's Mark</h4>
              </div>
            </Card>
          </Link>
        </div>
        <p>
          Ever heard of The Antichrist? How about the Four Horsemen of the Apocalypse? Beast's Mark is an end times short story about those left behind after The Rapture of The Church.
        </p>
      </>
    )
  },
  {
    question: "What is Emunah Short Stories: Abigail about?",
    answer: (
      <>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <Link href="/books/emunah-book-1-abigail" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book1abigail-1760404534946.jpg"
                  alt="Abigail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary">Abigail</h4>
              </div>
            </Card>
          </Link>
        </div>
        <p>
          Abigail is about a young woman yearning for love. Kind of like Bridget Jones Diary or Four Weddings and A Funeral, but with a dark twist.
        </p>
      </>
    )
  },
  {
    question: "What is Emunah Short Stories: Oliver about?",
    answer: (
      <>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <Link href="/books/emunah-book-2-oliver" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/emunah-book-2-oliver.jpg"
                  alt="Oliver"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary">Oliver</h4>
              </div>
            </Card>
          </Link>
        </div>
        <p>
          At its heart, Oliver is a story about spiritual warfare in this day and age. It also fleshes out two of the seven churches in the Book of Revelation: the church of Laodicea and the church of Philadelphia, putting them in the modern day context, comparing and contrasting the two.
        </p>
      </>
    )
  },
  {
    question: "What is Emunah Short Stories: Emunah about?",
    answer: (
      <>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <Link href="/books/emunah-book-3-emunah" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/emunah-book-3.jpg"
                  alt="Emunah"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary">Emunah</h4>
              </div>
            </Card>
          </Link>
        </div>
        <p>
          This short story is about a girl who leaves home to study in a foreign country, where she meets a senior whom she dates briefly before becoming best of friends. Her friendships with a UFO obsessed girl impacts her. This is also where Lydia's cursed box story arc concludes. The latter part of the Emunah overlaps with <Link href="/books/emunah-book-1-disturbing-dreams" className="text-primary hover:underline">Disturbing Dreams</Link> and fleshes out what the earlier book hinted at.
        </p>
      </>
    )
  },
  {
    question: "What is Emunah Short Stories: John about?",
    answer: (
      <>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <Link href="/books/emunah-book-4-john" className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[2/3]">
                <Image
                    unoptimized
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/emunah-book-4-john.jpg"
                  alt="John"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary">John</h4>
              </div>
            </Card>
          </Link>
        </div>
        <p>
          When John's father passed away, a family friend cheated John's mother of their house, and used his standing in society to extort more money from the widow, causing her health to fail. Too poor to afford the medical treatment his mother needs, nerdy bookworm John, set his hope on the prize money for a weightlifting competition, training against all odds to win the prize to save his mom. This is an underdog story about family, friendship and that never say die attitude.
        </p>
      </>
    )
  }
]

export default function FAQPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Janice Wee and her books
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqData.map((faq, index) => (
              <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  {faq.question}
                </h2>
                <div className="text-foreground leading-relaxed space-y-4">
                  {faq.answer}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}