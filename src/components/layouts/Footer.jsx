import Link from "next/link";
import { footerLinks } from "@/lib/const";

export default function Footer() {

  return (
    <footer className="section border-t">
      {/* <h2>Find out more from links below</h2>
      <ul className="list-disc list-inside grid grid-cols-1 gap-4 md:grid-cols-2">
        {footerLinks.map((item, i) => (
          <Link className="hover:underline" href={item.href} key={i + "fLink"}>
            <li className="leading-5 text-muted-foreground hover:text-foreground">
              {item.title}
            </li>
          </Link>
        ))}
      </ul> */}




      <h2>Find out more from links below</h2>
      <div className="flex gap-8 flex-wrap">
        <div className="flex flex-col gap-3">
          <div className="font-semibold">Gems</div>
          <ul className="list-disc list-inside">
            <Link  href="/"><li className="hover:text-blue-600 hover:underline">About Gemstones</li></Link>
            <Link  href="/"><li className="hover:text-blue-600 hover:underline">Rare Crystals & Gemstones</li></Link>
            <Link  href="/"><li className="hover:text-blue-600 hover:underline">About Turquoise</li></Link>
            <Link  href="/"><li className="hover:text-blue-600 hover:underline">About Gem Cutting</li></Link>
            <Link  href="/"><li className="hover:text-blue-600 hover:underline">Make Own Gemstone Jewelry</li></Link>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <div className="font-semibold">News & Reads</div>
          <ul className="list-disc list-inside">
            <Link  href="/"><li className="hover:text-blue-600 hover:underline">News</li></Link>
            <Link  href="/"><li className="hover:text-blue-600 hover:underline">Encyclopedia</li></Link>
            <Link  href="/"><li className="hover:text-blue-600 hover:underline">Chris&apos;s Prospecting Encyclopedia</li></Link>
            <Link  href="/"><li className="hover:text-blue-600 hover:underline">Library and Bookstore</li></Link>
            <Link  href="/"><li className="hover:text-blue-600 hover:underline">Metal Detecting</li></Link>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <div className="font-semibold">Others</div>
          <ul className="list-disc list-inside">
            <Link  href="/"><li className="hover:text-blue-600 hover:underline">About Us</li></Link>
            <Link  href="/"><li className="hover:text-blue-600 hover:underline">Contact Us</li></Link>
            <Link  href="/"><li className="hover:text-blue-600 hover:underline">How to make a purchase</li></Link>
            <Link  href="/"><li className="hover:text-blue-600 hover:underline">Buy Safely on EBay, avoid fraud</li></Link>
            <Link  href="/"><li className="hover:text-blue-600 hover:underline">virtual tour of Nevada mines</li></Link>
          </ul>
        </div>
      </div>






      <p className="pt-8 text-muted-foreground text-sm text-center">
        Copyright&copy;2024 / <Link className="hover:underline" href="https://webdevsalmann.vercel.app/"> Privacy Policy </Link> / <Link className="hover:underline" href="https://webdevsalmann.vercel.app/"> Disclosures </Link> / Developed by <Link className="hover:underline" href="https://webdevsalmann.vercel.app/">webdevsalmann</Link>
      </p>
    </footer>
  )
}
