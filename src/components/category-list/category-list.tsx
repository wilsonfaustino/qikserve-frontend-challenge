import Image from 'next/image'

import type { Category } from '~/@types'
import arrowUp from '~/assets/arrow-up.svg'

import { ProductItem } from './product-item'

export type Props = {
  category: Category
}

export function CategoryList({ category }: Props) {
  return (
    <div className="w-full">
      <div className="flex h-full w-full items-center justify-between px-4 pb-3 pt-8">
        <h2 id={category.name} className="text-2xl font-medium">
          {category.name}
        </h2>
        <a href="">
          <Image src={arrowUp} alt="arrow up" width={24} height={24} />
        </a>
      </div>
      <div className="flex w-full flex-col overflow-x-auto">
        {category.items.map((item) => (
          <ProductItem key={item.id} product={item} />
        ))}
      </div>
    </div>
  )
}
