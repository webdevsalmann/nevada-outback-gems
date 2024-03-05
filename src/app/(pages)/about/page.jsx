import Image from "next/image"
import Link from "next/link"
import AboutT from "./AboutT"

const finishedGems = [
    "Amethyst",
    "Aquamarine",
    "Chrysoberyl, Including Catseye",
    "Diamond",
    "Emerald",
    "Orange Grossular Garnet:",
    "Heliodor (Golden Beryl)",
    "Opal, including rare Catseye opal",
    "Rhodolite Garnet",
    "Sapphire - All Colors",
    "Spinel - All Colors",
    "Oregon Sunstone",
    "Tanzanite",
    "Pink Tourmaline, also Blue and Green",
    "Nevada Turquoise",
    "Tsavorite Green Garnet",
    "Zircon - Red, Orange, Blue and Green",
]

export default function page() {
    return (
        <>
            <section className="bg-muted">
                <h1 className="text-center">ABOUT NEVADA OUTBACK GEMS</h1>
                <p className="md:mx-auto md:text-center md:w-2/3 ">Nevada Outback Gems is your internet source of quality gemstones and jewelry at genuine wholesale prices. Give Nevada Outback Gems a try for your next gemstone or jewelry purchase. We have the gems you want at prices you can afford. We offer a guarantee of satisfaction that you can count on. Let us be your gem and jewelry source.  We own 3 turquoise mines here in Nevada, so we mine our own material with that beautiful gemstone. Come and check out our special Nevada Outback Turquoise Jewelry - We also have loose turquoise cabochons available. Check it all out: Nevada Outback Turquoise Cabochons</p>
                <p className="md:mx-auto md:text-center md:w-2/3"> Our Flagship product is Nevada Outback Turquoise, but we have large quantities of Tanzanite and Pink Tourmaline, and many others.</p>
            </section>

            <section>
                <h2>Rough Gems</h2>
                <ul className="list-disc list-inside grid grid-cols-1 gap-2 md:grid-cols-2">
                    <li>Rough Brazilian Pink Tourmaline;  Rough</li>
                    <li>Tanzanite</li>
                    <li>Rough Oregon Sunstone</li>
                    <li>Rough Nevada Turquoise</li>
                    <li>Rough Diamonds</li>
                </ul>

                <h2>Finished Gemstones</h2>
                <ul className="list-disc list-inside grid grid-cols-1 gap-2 md:grid-cols-2">
                    {finishedGems.map((item, i) => (
                        <li className="" key={i + "finishedGems"}>{item}</li>
                    ))}
                </ul>

                <h2>Finished Jewelry</h2>
                <ul className="list-disc list-inside grid grid-cols-1 gap-2 md:grid-cols-2">
                    <li>Rings</li>
                    <li>Earrings</li>
                    <li>pendants</li>
                    <li><Link className="text-blue-600 hover:text-blue-400 hover:underline" href="/store">View More</Link></li>
                </ul>
                <p>If you don&apos;t see what you are looking for in our auctions, or on the web pages, feel free to ask about that special item you are wanting.</p>
            </section>

            <section className="bg-muted md:grid md:gap-4 md:grid-cols-3 md:justify-center md:items-center">
                <div className="col-span-2">
                    <h2>So Who am I Anyway?</h2>
                    <p>Well, I&apos;m Chris Ralph, and I&apos;ve been involved in small scale gem sales for more than 20 years. For many years, I was cutting my own gems, then selling them to local jewelers, friends and relatives. The internet, especially ebay, has opened a whole new world of selling opportunities - as well as opportunities for me to meet new people, and make new friends. In the several years I have been selling on ebay, my business has greatly expanded, and I am now expanding into finished jewelry. My relaxing little hobby has blossomed into a busy part-time business, and most of my stones are cut overseas.</p>
                    <p>I spend a lot of my spare time searching for gem materials at bargain prices, that I can bring to you at shockingly low prices. When it comes to turquoise, we mine our own right here in Nevada.</p>
                    <p>I&apos;ve come up with a lot of great stuff, some really beautiful genuine tanzanite, deep pink tourmaline, and bright orange Garnets. I also sell some Sunstone feldspar that I mined myself near Plush Oregon. Aqua, Emerald, Amethyst - Even more great gems are coming soon!   I have many other items in my gemstone inventory, some of which do not get listed on ebay (or anywhere else). So feel free to ask me about other things, including special orders for finished jewelry.  By training I am a mining engineer, and although I am no longer involved in the Gold and Silver Mining industry in Nevada as I once was, I still like to get out into the hills, where I dig for turquoise on my claims. I also collect US coins and sometimes sell surplus coins over ebay to improve my collection. If you have US collector coins and want to trade for gems or jewelry, Contact me and we&apos;ll see what we can work out. Most importantly, I have a great family with two wonderful kids and a beautiful, understanding wife.</p>
                </div>
                <div className="flex-center flex-col rounded overflow-hidden">
                    <Image
                        src="/images/common/chris.jpg"
                        width={900}
                        height={1600}
                        alt="Chris"
                    />
                    <div className="mt-4 text-2xl italic font-bold">~ Chris Ralph</div>
                </div>
            </section>
            <AboutT />
        </>
    )
}
