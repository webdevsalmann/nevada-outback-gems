import Image from "next/image";

export default function ItemCard({ src, description, stock, price }) {
    return (
        <div className="relative flex flex-col rounded overflow-hidden border group">
            <div className="p-4 group-hover:p-0 aspect-video transition-all">
                <Image className="object-contain rounded" src={src} width={1600} height={900} alt={description ? description : "image"} />
            </div>
            <div className="p-2">
                <div className="text-sm text-muted-foreground">{description && description}</div>
                <div className="mt-2 flex-between">
                    <div>{stock}</div>
                    <div className="text-primary font-bold">${price}</div>
                </div>
            </div>
        </div >
    )
}
