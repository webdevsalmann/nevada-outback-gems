import Content from "./Content";
import Sidebar from "./Sidebar";

export default function Store() {
    return (
        <>
            <p className="py-8 p-4">We offer the finest in natural gem quality Nevada turquoise jewelry set in a contemporary style. Our wearable jewelry art features unique turquoise gemstones set in fine sterling silver. All of the turquoise offered here is completely natural, high quality, gem turquoise that does not need treatment.  We are here to meet the needs of the discriminating turquoise collector with the very best grades of turquoise that are available. We own our own Nevada turquoise mines and as a result we are able to offer our turquoise at a lower price than you could find it anywhere else. In addition, no one can offer a stronger guarantee of natural authenticity, as we have owned our turquoise from the time it left the ground. So check out our beautiful turquoise jewelry and get the very best at a super bargain price. As mine owners, we may be a bit biased, but we think turquoise is one special gem stone. If you&apos;d like to learn more about turquoise jewelry see my turquoise info page here: Turquoise Information </p>
            <div className="mt-8 flex">
                <Sidebar />
                <Content />
            </div>
        </>
    )
}
