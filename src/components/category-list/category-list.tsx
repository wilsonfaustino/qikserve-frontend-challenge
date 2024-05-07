'use client'

import Image from 'next/image'
import { useRecoilValue } from 'recoil'

import type { Category } from '~/@types'
import arrowUp from '~/assets/arrow-up.svg'
import { searchTermState } from '~/context/search-atom'

import { ProductItem } from './product-item'

export type Props = {
  category: Category
}

export function CategoryList({ category }: Props) {
  const searchTerm = useRecoilValue(searchTermState)
  const filteredItems = searchTerm
    ? category.items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : category.items

  return (
    <li className="w-full">
      {filteredItems.length > 0 && (
        <div className="flex h-full w-full items-center justify-between px-4 pb-3 pt-8">
          <h2 id={category.name} className="text-2xl font-medium">
            {category.name}
          </h2>
          <a href="#top">
            <Image src={arrowUp} alt="arrow up" width={24} height={24} />
          </a>
        </div>
      )}
      <div className="flex w-full flex-col overflow-x-auto">
        {filteredItems.map((item) => (
          <ProductItem key={item.id} product={item} />
        ))}
      </div>
    </li>
  )
}
