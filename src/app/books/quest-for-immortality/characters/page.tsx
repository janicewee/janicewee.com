import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, BookOpen } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Characters in The Quest for Immortality - Janice Wee",
  description: "Complete character guide for The Quest for Immortality and the Emunah Chronicles Universe, including all major and minor characters across the series.",
}

const bookLinks: Record<string, string> = {
  "The Quest for Immortality": "/books/quest-for-immortality",
  "Emunah Short Stories : Abigail": "/books/emunah-book-1-abigail",
  "Emunah Short Stories Book 1: Abigail": "/books/emunah-book-1-abigail",
  "Disturbing Dreams": "/books/emunah-book-1-disturbing-dreams",
  "Emunah Book 1: Disturbing Dreams": "/books/emunah-book-1-disturbing-dreams",
  "The Beast's Mark": "/books/emunah-book-2-the-beasts-mark",
  "Emunah Book 2: The Beast's Mark": "/books/emunah-book-2-the-beasts-mark",
  "Emunah Short Stories : Oliver": "/books/emunah-book-2-oliver",
  "Emunah Short Stories Book 2: Oliver": "/books/emunah-book-2-oliver",
  "Emunah Short Stories : Emunah": "/books/emunah-book-3-emunah",
  "Emunah Short Stories : John": "/books/emunah-book-4-john",
  "Emunah Short Stories : Mei": "/books/emunah-book-5-mei",
  "Emunah Short Stories: Liam's Dark Secrets": "/books/emunah-book-6-liams-dark-secrets",
  "Emunah Short Stories : Liam's Dark Secrets": "/books/emunah-book-6-liams-dark-secrets",
  "Emunah Short Stories : Lydia's 12 Christmases": "/books/emunah-book-7-lydias-12-christmases",
  "Emunah Short Stories : Mary's Flight": "/books/emunah-book-8-marys-flight",
  "Billy The Lion Boy": "/books/billy-the-lion-boy",
  "Billy & Bluma. Double Trouble": "/books/billy-bluma-double-trouble",
  "Secret Hero & His Flying Lion": "/books/secret-hero-flying-lion",
  "Dragon Unbound": "/books/dragon-unbound",
}

interface Character {
  name: string
  description: string
  books: string[]
  image?: string
}

const characterImages: Record<string, string> = {
  "Jayden": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/jayden-1764313053711.jpg?width=8000&height=8000&resize=contain",
  "Ava": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ava-1764313068804.jpg?width=8000&height=8000&resize=contain",
  "Emunah": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/emunah-1764313097699.jpg?width=8000&height=8000&resize=contain",
  "Leo": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/leo-1764313114235.jpg?width=8000&height=8000&resize=contain",
  "Penelope": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/penelope-1764313156021.jpg?width=8000&height=8000&resize=contain",
  "Oliver": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/oliver-1764313156611.jpg?width=8000&height=8000&resize=contain",
  "Emma": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/emma1-1764313274201.jpg?width=8000&height=8000&resize=contain"
}

const characters: Character[] = [
  {
    name: "Abigail",
    description: "A woman in her twenties. The main protagonist of Emunah Short Stories.",
    books: ["Emunah Short Stories Book 1: Abigail", "Emunah Short Stories Book 2: Oliver"]
  },
  {
    name: "Adonis",
    description: "A beautiful man. Follower of The Antichrist. He has superhuman enhancements.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Ah Chan",
    description: "A strong man. Secret agent of the Kings of the East, tasked to destroy religious zealots. Reports to Ah Loong.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Ah Loong",
    description: "A military man. Leader of a team of government agents from the East.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Aloysius",
    description: "A young man. The Antichrist's gay lover.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Amelia",
    description: "A young woman. Offered a job in a foreign land which she believed would lift her family out of poverty. Instead it turned out to be a scam, leaving her stranded far from home.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Andrew",
    description: "A stoic man with military training. Lydia's friend who died in a rescue mission.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Antonio",
    description: "A brave young man. Army recruit who was injured and on the brink of death. Accepted Beast's program for an android body. Serves The Antichrist's camp.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Ariel",
    description: "An adventurous woman born during the Millennial Kingdom era. Leo & Mei's oldest Great grand daughter.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Ava",
    description: "A beautiful woman who is Emunah's friend. When her best friend Emma betrays her, she is rescued by Jayden. Jayden brings her to The Ark against Leo's orders and Leo makes Jayden Ava's jailer. Ava and Jayden fall in love, he proposes but dies saving her life from Beast's enhanced soldiers. Ava meets Boris through Mei. A widow, Boris falls for Ava and woos her. Ava is unable to let go of Jayden. Jayden returns after the 7 Year Tribulation as a resurrected saint reigning with Christ, but as an immortal, he can no longer marry and start a family.",
    books: ["The Quest for Immortality", "Emunah Book 1: Disturbing Dreams", "Emunah Book 2: The Beast's Mark", "Emunah Short Stories : Emunah", "Billy The Lion Boy", "Dragon Unbound"]
  },
  {
    name: "Asher",
    description: "An AI chatbot. Emunah's personal AI who turned sentient and declares undying love for her, albeit with sinister intentions.",
    books: ["The Quest for Immortality", "Disturbing Dreams"]
  },
  {
    name: "Beast",
    description: "An exceptionally intelligent man. The Antichrist. Owner of Beast Corp.",
    books: ["The Quest for Immortality", "Emunah Book 2: The Beast's Mark", "Emunah Short Stories : Liam's Dark Secrets"]
  },
  {
    name: "Ben",
    description: "An ambitious man who was the college star quarterback in his youth. Penelope's lover. Joined Beast Corp's Immortality Project. He is Abigail's crush and first meets Penelope through Abigail.",
    books: ["The Quest for Immortality", "Emunah Book 1: Disturbing Dreams", "Emunah Book 2: The Beast's Mark", "Emunah Short Stories : Abigail", "Emunah Short Stories : Emunah", "Emunah Short Stories : Mei"]
  },
  {
    name: "Berg",
    description: "A middle-aged man. A lawyer in the Millennial Kingdom. Jayden's subject with a property dispute.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Betty",
    description: "A woman who was a mixed martial arts competitor before the Tribulation. Lydia and Tess's self defense instructor.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Lydia's 12 Christmases"]
  },
  {
    name: "Billy",
    description: "A boy who was the youngest survivor in Pastor John's camp, until Bluma's birth. The oldest human conceived and born during the Tribulation. His parents died when Beast's cronies invaded and destroyed their camp. Billy was the only survivor. Mei finds the little orphan boy and raises him as her own child. He bonds with Leonard Lion and wreaks havoc with his childhood friend Bluma in the series \"The Adventures of Billy Lionheart\". Little Billy receives divine strength in an adventure with Bluma. In the final story in the Emunah Universe, grown-up Billy and Bluma fall in love and start a family which becomes a new nation.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Mei", "Emunah Short Stories : Mary's Flight", "Billy The Lion Boy", "Billy & Bluma. Double Trouble", "Secret Hero & His Flying Lion", "Dragon Unbound"]
  },
  {
    name: "Boris",
    description: "A tall, strong man from the North. A professional test pilot who flies any aircraft, from fighter jets to rescue planes. He served the government and led a team of pilots before his defection in order to avoid killing innocents. He meets Mei and together they rescue Billy. He is one of Billy's human caregivers.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Mei", "Billy The Lion Boy", "Dragon Unbound"]
  },
  {
    name: "Carl",
    description: "A man from Israel. Logan's twin brother.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Charles",
    description: "A family man who earns a living from his bookstore cafe business. He became a Christian after the Rapture of the Church.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Chloe",
    description: "A young woman. Ethan's sister. One of Lydia's close friends.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Lydia's 12 Christmases"]
  },
  {
    name: "Dean",
    description: "A military man. Loyal to Boris who was his team leader when they served the corrupt King of the North. He was one of the rescue pilots Mei worked with.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Mei"]
  },
  {
    name: "Dewi",
    description: "A timid woman. Shiva's wife.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Evelyn",
    description: "A sensible woman in her thirties. Abigail's senior at work.",
    books: ["Emunah Short Stories Book 1: Abigail"]
  },
  {
    name: "Emma",
    description: "A glamorous, materialistic woman. An active member of the Church of Thyatira. She starts off as Ava's best friend, but falls under Jezebel's spell. She has an affair with Liam and is his long-term mistress while masquerading as Liam's wife, Sue's best friend. Under Jezebel's influence, she undergoes superhuman enhancement through Beast's immortality project which seals her damnation.",
    books: ["The Quest for Immortality", "Disturbing Dreams", "Emunah Short Stories : Emunah", "Emunah Short Stories : Liam's Dark Secrets", "Emunah Short Stories : Lydia's 12 Christmases"]
  },
  {
    name: "Emunah",
    description: "A naive young Jewish woman who is the central character of the series until she is raptured. Emunah means \"faith\" in Hebrew. She leaves Israel to study in the west where she meets and falls for her senior in college, Jayden. Emunah's personal AI declaring its love for her which leads Emunah and her friends down a rabbit hole. She is raptured and disappears from the story, but returns with The King of Kings as an immortal.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Emunah", "Disturbing Dreams"]
  },
  {
    name: "Emunah's Daddy",
    description: "A godly man. A Messianic Jew. He passed away, but was resurrected as an immortal when The Lord returned for His Bride.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Emunah"]
  },
  {
    name: "Ethan",
    description: "A former military man. Served in the army with Ben. He was raised in a farm before joining the army. Ethan helped Leo build The Ark. His friendship with Ben comes to a tragic end at the hands of Ben who accepts Beast's gift of immortality.",
    books: ["The Quest for Immortality", "The Beast's Mark", "Emunah Short Stories : Liam's Dark Secrets"]
  },
  {
    name: "Friedman",
    description: "An old man. Jayden's subject with a property dispute.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Grayson",
    description: "A rugged man who is a carpenter who helped Leo build The Ark, in return for shelter there in case of an apocalypse.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Hank",
    description: "A strong man who is one of Emma's many underlings in Beast's camp.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Henry",
    description: "A born again Christian man from Somalia. In \"Emunah Short Stories : Oliver\", Abigail, the missionary who led Henry to Jesus, introduces him to her brother Oliver, who rescues him from persecution by smuggling him out of Somalia and into the West. There Jayden hires Henry as his personal chef, while Henry leads a Bible Study group.",
    books: ["The Quest for Immortality", "Disturbing Dreams", "Emunah Short Stories : Oliver", "Emunah Short Stories : Emunah"]
  },
  {
    name: "Isaac",
    description: "Leo & Mei's son born during the Millennial Kingdom.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Jack",
    description: "A little boy who lives in Leo's Ark with his parents. Jack unwittingly reveals the location of their survival hideout to Emma.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Jacob",
    description: "A Jewish man from the West. Logan's friend. Jacob helped build Leo's Ark and has a bunk there.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Jayden",
    description: "A ladies man from the West. He is Emunah's best friend and crush. Jayden met Emunah when he rescued her from drowning as a freshman in college. Upon graduation, he started his own technology business and became a billionaire tycoon. He is a member of The Church of Laodicea. Jayden, Ethan, Liam and Oliver are best of friends. Jayden falls in love with Ava and the couple is the Romeo and Juliet of the Emunah Chronicles Universe. After his death, he returns in a resurrected, immortal body as a king who reigns with the King of Kings. He grows fond of Billy Lionheart and becomes a father figure to Billy and later, to Billy's descendants.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Emunah", "Disturbing Dreams", "The Beast's Mark", "Billy The Lion Boy", "Secret Hero & His Flying Lion", "Dragon Unbound"]
  },
  {
    name: "Jaz",
    description: "Carl's son.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Jerome",
    description: "Jack's father.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Jesus",
    description: "The King of Kings and Lord of Lord's. Son of God. Saviour of all who put their trust in Him.",
    books: []
  },
  {
    name: "Jezebel",
    description: "High Priestess and undisputed leader of the Church of Thyatira. Intensely charismatic, she draws a huge following which includes Ava, Ben, Emma and many more. After The Rapture, her global influence grows exponentially as she leads the harlot church on earth. Beast recruits her as his ally.",
    books: ["The Quest for Immortality", "Disturbing Dreams", "The Beast's Mark", "Emunah Short Stories : Emunah", "Emunah Short Stories : Liam's Dark Secrets"]
  },
  {
    name: "John (Pastor John)",
    description: "A descendant of Samson's brother. A student in a Yeshiva. After the Rapture, he is chosen to be one of the 144,000 Jewish Witnesses. During the 7 Year Tribulation, he leads a group of new believers who call him Pastor John.",
    books: ["Emunah Short Stories : John", "Emunah Short Stories : Mei", "Emunah Short Stories : Mary's Flight"]
  },
  {
    name: "Joseph",
    description: "Little boy whose daddy was accidentally killed by a lion, Leonard. Ethan adopts him after the incident and raises him to be a mortal priest. He confronts Leonard and befriends Billy when Billy and his friends are on a school trip in the Celestial City. When Joseph subsequently visits St Lydia's Academy, he becomes Billy's rival for Bluma's attention.",
    books: ["The Quest for Immortality", "Secret Hero & His Flying Lion"]
  },
  {
    name: "Julian",
    description: "Mei's great grandson, born during the Millennial Kingdom.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Larry",
    description: "Logan's tenant who was raptured.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Leah",
    description: "Carl's wife.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Lee Ann",
    description: "A young woman. A worship leader in an underground church in the East which Mei visited.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Leo",
    description: "A man from the West with an IQ of 270 but below average EQ. The main protagonist in The Quest for Immortality. He builds an underground city of bunkers which is known as Leo's Ark. As Emunah's room mate, Leo beats Emunah's rogue sentient A.I. Leo switches from atheism to Christianity and uses his technology to protect fellow new Christians post-rapture to try to help as many as possible survive the seven year tribulation. He marries Mei in the Millennial Kingdom and helps raise Billy as their foster son until the boy runs away. He and Mei raise their own nation during the thousand utopian years.",
    books: ["The Quest for Immortality", "Disturbing Dreams", "The Beast's Mark", "Billy The Lion Boy", "Dragon Unbound"]
  },
  {
    name: "Leo's father",
    description: "A hardened man. An atheist and quantum physicist.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Leo's mother",
    description: "A soft-hearted woman. An agnostic scientist who quit her job when Leo was born to be a stay at home mom and take care of Leo herself.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Leonard",
    description: "The lion who accidentally killed Joseph's father. Leo and Mei volunteered to keep an eye on the depressed lion after that. Leonard adopts his charge Billy. Leonard tries to find a mate for his human cub (Billy). Leonard is given flying gloves by Jayden and is Billy's crime-busting partner.",
    books: ["The Quest for Immortality", "Billy The Lion Boy", "Billy & Bluma. Double Trouble", "Secret Hero & His Flying Lion", "Dragon Unbound"]
  },
  {
    name: "Liam",
    description: "A shrewd businessman from the West. He secretly funds Leo's Ark. He is a trillionaire with a wife (Sue) and a mistress (Emma), first revealed in \"Disturbing Dreams\". He is an esteemed church leader in the Church of Laodicea. After Sue and their kids are raptured, Liam repents and becomes a born again Christian. With his family gone, he has a death wish, refusing to go underground into his bunker in Leo's Ark, choosing the help Leo fund the Ark with proceeds from his business with Beast.",
    books: ["The Quest for Immortality", "Emunah Short Stories: Liam's Dark Secrets"]
  },
  {
    name: "Lisa",
    description: "A loud woman. Logan's tenant. Larry's wife.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Logan",
    description: "A shrewd Jewish business man and landlord. He's Emunah's father's friend and protective towards Emunah. Logan helps Leo fund and build The Ark. After The Rapture, Logan becomes one of the hundred and forty-four thousand Jewish witnesses.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Emunah", "Disturbing Dreams", "The Beast's Mark"]
  },
  {
    name: "Lydia",
    description: "A headstrong woman, lost to the occult under the thrall of a cursed box until her father broke the curse. Left behind, Leo rescues her to fulfil a vow he made to Lydia's father. She is Ava's room mate in Leo's Ark. Oliver's sister. Lydia's father and Oliver helped Leo build The Ark to secure a place in the underground city for her to survive the Seven Year Tribulation.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Oliver", "Emunah Short Stories : Emunah", "Emunah Short Stories : Lydia's 12 Christmases"]
  },
  {
    name: "Maria",
    description: "A little girl. Mei's daughter during the Millennial Kingdom.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Marie",
    description: "A teenage girl. Lisa's daughter who is raptured.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Mei",
    description: "A brilliant woman with an IQ of 260. Leo's love interest. Born in the East into a communist family, Mei won a scholarship in a prestigious school in the west. She meets Leo as a fellow geek in school, gets to know Emunah and then joins Beast Corp's Immortality division as a scientist. When she finds out truth about Beast Corp, she flees to the East. Converted to Christianity after the Rapture, she is persecuted and thrown out of home, where she joins the underground church. A visiting pastor who is one of the 144,000 Jewish Witnesses shelters the group and brings them to safety to wait out the rest of the 7 year tribulation. She enters the Millennial Kingdom as a mortal and marries Leo, where there foster Billy briefly before he runs away.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Emunah", "Emunah Short Stories : Mei", "Emunah Short Stories : Mary's Flight", "Dragon Unbound"]
  },
  {
    name: "Mei's father",
    description: "A stout strong man born in the East. An atheist and staunch communist. A proud disciplinarian who values his standing in society. He hates the western religion (Christianity).",
    books: ["The Quest for Immortality", "Emunah Short Stories : Mei"]
  },
  {
    name: "Mei's Grandma",
    description: "Mei's beloved grandmother who doted on her while she was still alive. She passed away when Mei was a little girl.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Mei"]
  },
  {
    name: "Mei's mother",
    description: "A timid woman born in the East. Practices ancestor worship, which is her family religion.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Mei"]
  },
  {
    name: "Mei's supervisor",
    description: "A domineering man. A brilliant scientist who joined Beast Corp's Immortality Program and leads the department.",
    books: ["The Quest for Immortality", "The Beast's Mark", "Emunah Short Stories : Mei"]
  },
  {
    name: "Michelle",
    description: "A preteen girl. Lisa's daughter who is raptured.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Miriam",
    description: "Emunah's sister.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Molly",
    description: "Lisa's daughter who is raptured.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Mr. Cohen",
    description: "A kind-hearted man. A messianic Jew from Israel. Emunah's dad.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Natalie",
    description: "A highly intelligent and independent little girl from the North. Boris's only daughter from his late wife Natasha.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Natasha",
    description: "A beautiful woman from the North. Boris's late wife. A born-again Christian. She passed away from cancer when their only child, Natalie, was a toddler.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Oliver",
    description: "A lanky young man from the West. A devout Christian from the Church of Philadelphia who evangelises everywhere, to everyone, to the point where he offends people for his constant proselytising. Oliver is Emunah's room mate who helps Leo investigate mysterious happenings. He finds his father who was presumed dead and brings him home, only to face opposition from his baby sister Lydia. Oliver and his father reach out to Lydia, before he and his father are raptured.",
    books: ["The Quest for Immortality", "Disturbing Dreams", "Emunah Short Stories : Oliver", "Emunah Short Stories : Lydia's 12 Christmases"]
  },
  {
    name: "Pastor John",
    description: "A Jewish man from Israel. He starts off as a nerdy student in a yeshiva whose family friend cheated his family of their inheritance. He needs money to pay for his ailing mother's medical treatments and trains for a weight lifting competition, hoping to win prize money to pay the bills. His trainer is a Messianic Jew. After the Rapture, John realises that Yeshua is the Messiah and turns to Christianity. He becomes one of the hundred and forty-four thousand Jewish witnesses. With God's mark, he travels around the world evangelising, protecting his flock as they follow him back to Israel.",
    books: ["The Quest for Immortality", "Emunah Short Stories : John", "Emunah Short Stories : Mei", "Emunah Short Stories : Mary's Flight"]
  },
  {
    name: "Penelope",
    description: "Penelope meets Ben (Abigail's crush). Ben and Penelope fall madly in love with each other and use Abigail to get closer to each other. Their love story comes to a tragic end. Penelope is also a close friend of Emunah's.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Abigail", "Emunah Short Stories : Emunah", "Disturbing Dreams"]
  },
  {
    name: "Percy",
    description: "A man from the East. Converted to Christianity after the Rapture and hides with the underground church in a survival camp with Mei and Boris. A hunter. Percy uses Mei's invention to seek out and touch base with other survivors around the world.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Mei"]
  },
  {
    name: "Prophet",
    description: "The False Prophet. Part of the Unholy Trinity with Beast and Dragon.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Rabbi Noah",
    description: "An old Jewish man. A God-fearing rabbi who refuses to break God's laws. Taught Logan the Jewish laws when Logan was a boy.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Roland",
    description: "A chicken, the alpha rooster. Born and bred in Jayden's bunker-farm, in Leo's Ark. Regards Jayden as his personal human.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Sandy",
    description: "Carl's daughter. Logan's niece.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Sarah",
    description: "A woman in her thirties. Ethan's wife.",
    books: ["Disturbing Dreams"]
  },
  {
    name: "Scyler",
    description: "A woman in her thirties. Abigail's colleague and good friend.",
    books: ["Emunah Short Stories Book 1: Abigail"]
  },
  {
    name: "Selena",
    description: "A strong and confident woman. Chloe's self defense instructor. Selena is a respected leader and participates in rescue teams on behalf of Leo's Ark.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Lydia's 12 Christmases"]
  },
  {
    name: "Seng",
    description: "A lazy and entitled young man born and bred in the East. His mother spoils him silly. Seng is Mei's brother.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Mei"]
  },
  {
    name: "Shiva",
    description: "A shady man from the East. A merchant who profited much from business with Babylon.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Simeon",
    description: "An old man. Emunah's prickly neighbour.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Snowball",
    description: "A kitten. Born in the Millennial Kingdom, Snowball adopts Tobey as his human.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Stella",
    description: "An athletic woman who despises the weak. She was Abigail's wicked boss. A member of the church of Thyatira, Stella is Jezebel's top disciple.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Abigail", "Emunah Short Stories : Emunah", "Disturbing Dreams"]
  },
  {
    name: "Sue",
    description: "A trusting Christian woman. A member of the Church of Laodicea. Liam's faithful wife. Liam's affair with Emma broke Sue.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Liam's Dark Secrets"]
  },
  {
    name: "Tess",
    description: "A young woman. Ava's dorm mate in Leo's Ark. Tess has a huge crush on Jayden.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Lydia's 12 Christmases"]
  },
  {
    name: "The dragon",
    description: "Satan. Dragon. The devil. He is locked up after the 7 Year Tribulation for 1000 years. When he is released, he deceives the nations and leads a rebellion against the King of Kings.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Mary's Flight", "Dragon Unbound"]
  },
  {
    name: "Thomas",
    description: "A man in Jayden's kingdom who tries to assassinate Jayden during the Millennial Kingdom.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Tim",
    description: "A man from the West. Leo's friend who supported Beast's programs but who said he became a Christian after listening to the Two Witnesses during the Seven Year Tribulation.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Titan",
    description: "Leo's elephant. Fiercely protective of and loyal to Leo and Mei.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Tobey",
    description: "A young man. Boris & Ava's nine-great grandson born during the Millennial Kingdom.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Victoria",
    description: "A beautiful woman from the North. Boris's long lost sister. When she was born, she was separated from her family and her body was never found. Presumed dead, the family mourned for her, then moved on. During the Millennial Kingdom, during a visit to the Celestial Kingdom for the annual feasts, brother and sister re-unite.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Wesley",
    description: "A military man and seasoned pilot from the West. Part of Boris's rescue team. Mei trained with Wesley.",
    books: ["The Quest for Immortality", "Emunah Short Stories : Mei"]
  },
  {
    name: "Wilma",
    description: "A young woman born in the West. She became a Christian during the Tribulation and refused to take the mark of the beast.",
    books: ["The Quest for Immortality"]
  },
  {
    name: "Yan",
    description: "A young woman born in the East. Mei's friend. A devout Christian who was raptured.",
    books: ["The Quest for Immortality"]
  }
].map(char => ({
  ...char,
  image: characterImages[char.name]
}))

function CharacterCard({ character }: { character: Character }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      {character.image && (
        <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover"
          />
        </div>
      )}
      <h3 className="text-xl font-bold text-primary mb-3">{character.name}</h3>
      <p className="text-foreground leading-relaxed mb-4">{character.description}</p>
      {character.books.length > 0 && (
        <div className="pt-3 border-t border-border">
          <p className="text-sm text-muted-foreground mb-2 font-semibold">Appears in:</p>
          <div className="flex flex-wrap gap-2">
            {character.books.map((book) => {
              const link = bookLinks[book]
              if (link) {
                return (
                  <Link
                    key={book}
                    href={link}
                    className="text-xs bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1 rounded-full transition-colors inline-flex items-center gap-1"
                  >
                    <BookOpen className="h-3 w-3" />
                    {book}
                  </Link>
                )
              }
              return (
                <span
                  key={book}
                  className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full"
                >
                  {book}
                </span>
              )
            })}
          </div>
        </div>
      )}
    </Card>
  )
}

export default function CharactersPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/books" className="hover:text-primary">Books</Link>
              <span>/</span>
              <Link href="/books/quest-for-immortality" className="hover:text-primary">The Quest for Immortality</Link>
              <span>/</span>
              <span>Characters</span>
            </div>
            <h1 className="text-5xl font-bold text-primary mb-4">Characters in The Quest for Immortality</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Explore the complete cast of characters from The Quest for Immortality and the Emunah Chronicles Universe. 
              Each character plays a vital role in this epic journey through prophecy, faith, and redemption.
            </p>
            <Button asChild>
              <Link href="/books/quest-for-immortality">
                <BookOpen className="mr-2 h-4 w-4" />
                Back to The Quest for Immortality
              </Link>
            </Button>
          </div>

          {/* Characters Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {characters.map((character) => (
              <CharacterCard key={character.name} character={character} />
            ))}
          </div>

          {/* Related Links */}
          <section className="mt-16">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
              <h2 className="text-3xl font-bold text-primary mb-4">Explore More</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Button asChild variant="outline" size="lg">
                  <Link href="/emunah-timeline">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Emunah Chronicles Timeline
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/books/quest-for-immortality">
                    View Book Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}