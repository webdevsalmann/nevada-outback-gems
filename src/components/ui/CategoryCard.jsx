"use client"
import Image from "next/image";
import useData from "../context/DataProvider";
import Link from "next/link";

export default function CategoryCard({ imgUrl, category, categoryId }) {
    const {setdisplayItems}= useData();
    return (
        // <div className={`relative min-w-60 aspect-[12/18] bg-[url('${imgUrl ? imgUrl : "/images/store/bracelets/1.jpg"}')] bg-center bg-cover bg-no-repeat rounded-lg overflow-hidden`}>
        <Link href="/store/#store" className={`relative min-w-60 max-w-72 aspect-[12/18] rounded-lg overflow-hidden flex-1`} onClick={()=>setdisplayItems(categoryId)}>
            <div className="absolute w-full h-full">
                <Image className="w-full h-full object-cover" src={imgUrl} width={1200} height={1800} alt={category} />
            </div>
            <div className="absolute bottom-0 left-0  w-full h-1/2 bg-gradient-to-t from-zinc-950 z-0"></div>
            <div className="relative mt-20 w-full h-full flex-center text-2xl font-semibold z-10">{category}</div>
        </Link>
    )
}
