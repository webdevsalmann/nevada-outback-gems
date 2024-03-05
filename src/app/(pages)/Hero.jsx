"use client"
import useData from "@/components/context/DataProvider";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
    const { setdisplayItems } = useData()
    return (
        <div className="relative w-full min-h-96 overflow-hidden bg-[url('/images/common/mine.jpg')] bg-center bg-cover bg-no-repeat">
            {/* <div className=" "></div> */}
            <div className="absolute left-0 top-0 w-full h-full bg-neutral-950/50 brightness-50 z-0"></div>
            <div className="relative w-full min-h-96 flex-center z-10">
                <div className="bottom-1/2 p-4 w-full md:w-2/3 mx-auto">
                    <h1 className="text-center text-neutral-50">NEVADA OUTBACK GEMS</h1>
                    <p className="text-center text-2xl text-neutral-300">
                        Fine Jewelry featuring Nevada Turquoise, Tanzanite <br />
                        Tourmaline and Other Gems From Around the World
                    </p>
                    <div className="flex-center">
                        <div className="mt-4 flex gap-4 flex-wrap">
                            <Link href='/store#store' className={buttonVariants({ variant: "outline" })} onClick={()=>setdisplayItems("t1")}>Turquoise Cabochons</Link>
                            <Link href='/store#store' className={buttonVariants({ variant: "outline" })} onClick={()=>setdisplayItems("j1")}>Jewellery</Link>
                            <Link href='/store#store' className={buttonVariants({ variant: "outline" })} onClick={()=>setdisplayItems("ta1")}>Tanzanite</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
