'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'

import type { Product } from '~/@types'
import { localeState } from '~/context/locale-atom'
import { settingsState } from '~/context/settings-atom'
import { defineInitialPrice } from '~/utils/formatCurrency'

import { CountPicker } from '../count-picker'
import { Modal } from '../modal'

type Props = {
  product: Product
}

export function ProductItem({ product }: Props) {
  const [open, setOpen] = useState(false)
  const [amount, setAmount] = useState(1)
  const localeSettings = useRecoilValue(localeState)
  const styleSettings = useRecoilValue(settingsState)

  const formattedPrice = defineInitialPrice(product, localeSettings)

  const handleAddToOrder = () => {
    console.log('Added to order:', product.name, amount, product.price)
  }

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <Modal.Button asChild>
        <button type="button" className="flex w-full p-4">
          <div className="flex-1 text-left">
            <h3 className="text-xl">{product.name}</h3>
            <p className="line-clamp-1 text-base font-light">{product.description}</p>
            <p className="text-lg font-medium">{formattedPrice}</p>
          </div>
          {product.images && product.images.length > 0 && (
            <Image
              src={product.images[0].image}
              alt={product.name}
              width={128}
              height={85}
              className="ml-4 rounded-md"
            />
          )}
        </button>
      </Modal.Button>
      <Modal.Content>
        <div className="h-full overflow-auto" style={{ scrollbarWidth: 'none' }}>
          {product.images && product.images.length > 0 && (
            <Image src={product.images[0].image} alt={product.name} width={500} height={320} className="" />
          )}
          <div className="flex w-full flex-col gap-3 p-4">
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-app-800">{product.description}</p>
            <p className="text-lg">{formattedPrice}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati libero consequuntur aliquid! Harum ad
              natus hic at, modi illo aliquid quas sit veniam ipsa eaque, cum similique! Magni, sunt pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati libero consequuntur aliquid! Harum ad
              natus hic at, modi illo aliquid quas sit veniam ipsa eaque, cum similique! Magni, sunt pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati libero consequuntur aliquid! Harum ad
              natus hic at, modi illo aliquid quas sit veniam ipsa eaque, cum similique! Magni, sunt pariatur.
            </p>
          </div>
        </div>
        <div className="fixed inset-x-0 bottom-0 flex h-[122px] w-full flex-col items-center justify-center gap-[10px] bg-white/5 px-6 pt-2 backdrop-blur-md">
          <CountPicker baseColor={styleSettings?.primaryColour} value={amount} onChange={setAmount} />
          <button
            onClick={handleAddToOrder}
            type="button"
            className="h-12 w-full rounded-full text-lg font-bold text-white"
            style={{ backgroundColor: styleSettings?.primaryColour }}
          >
            Add to order • {formattedPrice}
          </button>
        </div>
      </Modal.Content>
    </Modal>
  )
}
