'use client'

import { useRecoilValue } from 'recoil'

import type { Category } from '~/@types'
import { searchTermState } from '~/context/search-atom'
import { settingsState } from '~/context/settings-atom'

import { ArrowUpIcon } from '../icons/arrowup-icon'
import { ProductItem } from './product-item'

export type Props = {
  category: Category
}

export function CategoryList({ category }: Props) {
  const searchTerm = useRecoilValue(searchTermState)
  const styleSettings = useRecoilValue(settingsState)

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
            <ArrowUpIcon className="h-6 w-6" accentColor={styleSettings?.primaryColour} />
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
