'use client'

import Image from 'next/image'
import { useRecoilValue } from 'recoil'

import type { Product } from '~/@types'
import { localeState } from '~/context/locale-atom'
import { defineInitialPrice } from '~/utils/formatCurrency'

type Props = {
  product: Product
}

export function ProductItem({ product }: Props) {
  const localeSettings = useRecoilValue(localeState)

  const formattedPrice = defineInitialPrice(product, localeSettings)

  return (
    <div className="flex w-full p-4">
      <div className="flex-1 text-left">
        <h3 className="text-xl">{product.name}</h3>
        <p className="line-clamp-1 text-base font-light">{product.description}</p>
        <p className="text-lg font-medium">{formattedPrice}</p>
      </div>
      {product.images && product.images.length > 0 && (
        <Image src={product.images[0].image} alt={product.name} width={128} height={85} className="ml-4 rounded-md" />
      )}
    </div>
  )
}
