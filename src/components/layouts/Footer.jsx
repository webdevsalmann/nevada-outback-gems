import Link from "next/link";
import { footerLinks } from "@/lib/const";

export default function Footer() {

  return (
    <footer className="section border-t">
      <h2>Find out more from links below</h2>
      <ul className="list-disc list-inside grid grid-cols-1 gap-4 md:grid-cols-2">
        {footerLinks.map((item, i) => (
          <Link className="hover:underline" href={item.href}  key={i + "fLink"}>
            <li className="leading-5 text-muted-foreground hover:text-foreground">
              {item.title}
            </li>
          </Link>
        ))}
      </ul>

      <p className="pt-8 text-muted-foreground text-sm text-center">
        Copyright&copy;2024 / <Link className="hover:underline" href="https://webdevsalmann.vercel.app/"> Privacy Policy </Link> / <Link className="hover:underline" href="https://webdevsalmann.vercel.app/"> Disclosures </Link> / Developed by <Link className="hover:underline" href="https://webdevsalmann.vercel.app/">webdevsalmann</Link>
      </p>
    </footer>
  )
}
