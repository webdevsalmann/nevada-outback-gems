"use client"
import React from 'react'
import useData  from '@/components/context/DataProvider'

const Turquoise = [
    {
        title: "McGuinness Mine",
        categoryId: "t1",
    },
    {
        title: "Bunker Hill (Royston) Mine",
        categoryId: "t2",
    },
    {
        title: "Northern Lights Mine",
        categoryId: "t3",
    },
    {
        title: "Lander area",
        categoryId: "t4",
    },
    {
        title: "Candelaria area",
        categoryId: "t5",
    }
]
const jewelrys = [
    {
        title: "Rings",
        categoryId: "j1",
    },
    {
        title: "Bracelets",
        categoryId: "j2",
    },
    {
        title: "Earrings",
        categoryId: "j3",
    },
    {
        title: "Pendants",
        categoryId: "j4",
    }
]
const tanzanite = [
    {
        title: "tanzanite",
        categoryId: "ta1",
    },
]

export default function Sidebar() {
    const { setdisplayItems } = useData();

    return (
        <div className='p-4 border-r w-64'>
            <div className="flex flex-col gap-1">
                <div className="font-semibold text-primary">Turquoise Cabochons From</div>
                {Turquoise.map((item, i) => (
                    <div className="py-1 px-4 cursor-pointer hover:bg-muted capitalize rounded" key={i + "SItem"} onClick={()=>setdisplayItems(item.categoryId)}>
                        {item.title}
                    </div>
                ))}
                <div className="font-semibold text-primary">Premium Turquoise Jewelry</div>
                {jewelrys.map((item, i) => (
                    <div className="py-1 px-4 cursor-pointer hover:bg-muted capitalize rounded" key={i + "SItem"} onClick={()=>setdisplayItems(item.categoryId)}>
                        {item.title}
                    </div>
                ))}
                <div className="font-semibold text-primary">Other Premium Jewels</div>
                {tanzanite.map((item, i) => (
                    <div className="py-1 px-4 cursor-pointer hover:bg-muted capitalize rounded" key={i + "SItem"} onClick={()=>setdisplayItems(item.categoryId)}>
                        {item.title}
                    </div>
                ))}
            </div>
        </div>
    )
}
