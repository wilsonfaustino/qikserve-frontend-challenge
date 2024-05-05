'use client'

import { useState } from 'react'

import type { Products } from '~/@types'

import { CategoryLink } from './category-link'

export type Props = {
  categories: Products['sections']
}

export function CategorySelector({ categories }: Props) {
  const [activeCategory, setActiveCategory] = useState('')
  return (
    <div className="flex h-48 w-full items-center px-4">
      {categories.map((category) => (
        <CategoryLink
          key={category.id}
          href={`#${category.name}`}
          imgUrl={category.images[0].image}
          onClick={() => setActiveCategory(category.name)}
          isActive={activeCategory === category.name}
        >
          {category.name}
        </CategoryLink>
      ))}
    </div>
  )
}
