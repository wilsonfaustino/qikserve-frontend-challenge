'use client'

import type { Products } from '~/@types'

import { CategoryList } from '../category-list'
import { CategorySelector } from '../category-selector'

export type Props = {
  products: Products
}

export function ProductList({ products }: Props) {
  return (
    <div className="w-[600px] bg-white shadow-lg">
      <CategorySelector categories={products.sections} />
      <ul>
        {products.sections.map((section) => (
          <CategoryList key={section.id} category={section} />
        ))}
      </ul>
    </div>
  )
}
