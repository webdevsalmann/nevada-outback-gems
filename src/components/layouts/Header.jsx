"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ThemeToggleBtn from "@/components/ui/ThemeToggleBtn"
import { buttonVariants } from "@/components/ui/button"
import { Ilogo } from '../svgs/svgs';
import { ChevronDown } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { footerLinks } from '@/lib/const';


export default function Header() {
  const path = usePathname();

  return (
    <header className='w-full bg-background'>
      <nav className="px-[5%] py-4 w-full flex flex-row-reverse flex-between">

        <ul className='flex flex-center flex-wrap gap-2'>
          <Link className={`${buttonVariants({ variant: "ghost", size: 'sm' })} ${path === "/" && "bg-accent"} capitalize text-muted-foreground`} href="/">Home</Link>
          <Link className={`${buttonVariants({ variant: "ghost", size: 'sm' })} ${path === "/about" && "bg-accent"} capitalize text-muted-foreground`} href="/about">About</Link>
          <Link className={`${buttonVariants({ variant: "ghost", size: 'sm' })} ${path === "/store" && "bg-accent"} capitalize text-muted-foreground`} href="/store">Store</Link>

          <Popover>
            <PopoverTrigger className={`${buttonVariants({ variant: "ghost", size: 'sm' })} capitalize text-muted-foreground cursor-pointer`}>
              Links <span className="ml-2"><ChevronDown className='w-3' /></span>
            </PopoverTrigger>
            <PopoverContent className="px-8">
              <ul className="list-disc  flex flex-col gap-2">
                {footerLinks.map((item, i) => (
                  <li className="leading-5" key={i + "fLink header"}>
                    <Link className="text-blue-600 hover:text-blue-400 hover:underline" href={item.href}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </PopoverContent>
          </Popover>

          <Link className={`${buttonVariants({ variant: "ghost", size: 'sm' })} ${path === "/contact" && "bg-accent"} capitalize text-muted-foreground`} href="/contact">Contact</Link>
          <ThemeToggleBtn />
        </ul>

        <Link href="/" className="w-10 h-10 text-primary"><Ilogo /></Link>
      </nav>
    </header>
  )
}
