import Image from "next/image";

export default function About() {
    return (
        <>
            <section>
                <div className="md:grid md:gap-6 md:grid-cols-3 md:justify-center md:items-center">
                    <div className="col-span-2">
                        <h2>The Beautiful Turquoise of Nevada</h2>
                        <p> Nevada produces some of the finest turquoise in the world and our goal at Nevada Outback is to bring those beautiful all American gems to you in the form of beautiful turquoise jewelry. Hard and durable, our turquoise comes in various shades of blue, blue-green,  to even a bright minty to yellow-green, all of which are fashionable, collectable and unequalled anywhere else on earth.  Nevada turquoise can be solid colored or spider webbed with blue, brown, black, red or golden webbing; the spider webbing may occur with any of the different colors or shades of turquoise. The turquoise jewelry offered on this web site is cut from the very finest material, all-natural gem quality turquoise which has not been artificially treated or colored.</p>
                        <p>We produce the majority of the turquoise we offer for sale from our own mines which are located in some of America&apos;s finest southwestern turquoise mining regions. Native American turquoise jewelry designers have used the gems from these mines for decades - now we can supply that same turquoise directly to you. We have both loose cut stones and spectacular silver turquoise jewelry in a classy and contemporary form that you may not have seen previously. Rings, pendants, bracelets and earrings, we have it all when it comes to high quality silver turquoise jewelry, and we skip the middle man to offer it direct from the miner to you at a low wholesale price.</p>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                        <Image
                            className="rounded"
                            src="/images/gems/1.jpg"
                            width={1000}
                            height={1000}
                            alt="1"
                        />
                        <Image
                            className="rounded"
                            src="/images/gems/2.jpg"
                            width={1000}
                            height={1000}
                            alt="1"
                        />
                        <Image
                            className="rounded"
                            src="/images/gems/3.jpg"
                            width={1000}
                            height={1000}
                            alt="1"
                        />
                        <Image
                            className="rounded"
                            src="/images/gems/4.jpg"
                            width={1000}
                            height={1000}
                            alt="1"
                        />
                    </div>
                </div>

                <div className="md:grid md:gap-6 md:grid-cols-3 md:justify-center md:items-center">
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            className="rounded"
                            src="/images/gems/5.jpg"
                            width={1000}
                            height={1000}
                            alt="1"
                        />
                        <Image
                            className="rounded"
                            src="/images/gems/6.jpg"
                            width={1000}
                            height={1000}
                            alt="1"
                        />
                        <Image
                            className="rounded"
                            src="/images/gems/7.jpg"
                            width={1000}
                            height={1000}
                            alt="1"
                        />
                        <Image
                            className="rounded"
                            src="/images/gems/8.jpg"
                            width={1000}
                            height={1000}
                            alt="1"
                        />
                    </div>
                    <div className="mt-6 col-span-2">
                        <h2>Gemstones From Around the World</h2>
                        <p> Although we feature southwestern American Turquoise, we also have a wonderful supplies of other gemstones from around the world. Loose stones and jewelry in Tanzanite, Tsavorite garnet, Sapphire, Tourmaline and Oregon Sunstone - plus many, many others - we pretty much have a great selection and can supply you with all your favorite colored stones. So whether its rings, bracelets or other jewelry for the collector, or loose gemstones for the jewelry designer wanting to make that unique piece, we have a great selection of all your favorites, even a little bit of rough and and some very rare natural gemstone crystal specimens.</p>
                        <p>So come on in and check out our site, take the virtual tour of our Nevada turquoise mines - see the variety of gorgeous loose gems we have and view our very classy, contemporary silver turquoise jewelry. We also have some very special gems and fine jewelry featuring gemstones other than turquoise - from both from American sources as well as other locations world wide. We know and understand your gemstone passions, as we collect these all these gems ourselves - Turquoise, Tanzanite, Oregon Sunstone, Tsavorite - we appreciate the crystalline beauty from the earth. That&apos;s why we have created this web site - to share the jewelry we have designed, the gems we have mined or cut, and spread our enthusiasm by offering the knowledge that we have gained. Because we harvest these treasures of the earth ourselves, we also are sharing some of our adventures in the field prospecting for both turquoise and natural gold nuggets. We welcome your purchases, and will do our very best to make your transactions smooth, safe and easy. </p>
                    </div>
                </div>
            </section>
        </>
    )
}
