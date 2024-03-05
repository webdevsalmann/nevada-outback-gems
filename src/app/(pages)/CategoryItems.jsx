import CategoryCard from '@/components/ui/CategoryCard'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function CategoryItems() {
    return (
        <section>
            <h2>Our Well Made Crafted Jewellery</h2>
            <div className="flex gap-6 flex-wrap justify-center">
                <CategoryCard imgUrl="/images/store/rings/1.jpg" category="Rings" categoryId="j1"/>
                <CategoryCard imgUrl="/images/store/bracelets/1.jpg" category="Bracelets" categoryId="j2"/>
                <CategoryCard imgUrl="/images/store/earrings/1.jpg" category="Earrings" categoryId="j3"/>
                <CategoryCard imgUrl="/images/store/pendants/1.jpg" category="Pendants" categoryId="j4"/>
                <CategoryCard imgUrl="/images/store/others/tanzanite/tanz_ring_001g.jpg" category="Tanzanite" categoryId="t5"/>
            </div>
            <div className="mt-6 w-full flex-center">
                <Link href='/store' className={buttonVariants({ variant: "outline" })}>View More</Link>
            </div>
        </section>
    )
}
