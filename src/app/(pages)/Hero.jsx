import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative">
            <div className="w-full h-96 overflow-hidden bg-[url('/images/common/mine.jpg')] bg-center bg-cover bg-no-repeat brightness-50"></div>
            <div className="absolute left-0 top-0 w-full h-full flex-center">
                <div className="bottom-1/2 p-4 w-full md:w-2/3 mx-auto">
                    <h1 className="text-center text-neutral-50">NEVADA OUTBACK GEMS</h1>
                    <p className="text-center text-2xl text-neutral-300">
                        Fine Jewelry featuring Nevada Turquoise, Tanzanite <br />
                        Tourmaline and Other Gems From Around the World
                    </p>
                    <div className="flex-center">
                        <div className="mt-4 flex gap-4 flex-wrap">
                            <Link href='/' className={buttonVariants({ variant: "outline" })}>Turquoise Cabochons</Link>
                            <Link href='/' className={buttonVariants({ variant: "outline" })}>Jewellery</Link>
                            <Link href='/' className={buttonVariants({ variant: "outline" })}>Tanzanite</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
