"use client"
import useData from "../context/DataProvider"
import ItemCard from "../ui/ItemCard";

export default function Content() {
    const { displayData } = useData();
    console.log(displayData[0].items)
    return (
        <div className='p-4 w-full'>
            <h2 className="text-primary">{displayData[0]?.category}</h2>
            <p>{displayData[0]?.description}</p>
            <div className="mt-6 grid gap-4 grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))]">
                {
                    displayData[0]?.items?.map((item, i) => (
                        <ItemCard key={i + "Item"} src={item.imgUrl} description={item.description} stock={item.stock} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}
