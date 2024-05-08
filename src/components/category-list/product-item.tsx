'use client'

import Image from 'next/image'

import type { Product } from '~/@types'

import { CountPicker } from '../count-picker'
import { Modal } from '../modal'
import { ModifierPicker } from '../modifier-picker'
import { useProductItem } from './hooks/use-product-item'

type Props = {
  product: Product
}

export function ProductItem({ product }: Props) {
  const {
    amount,
    currentModifierValue,
    formattedPrice,
    handleAddToOrder,
    handleModifierChange,
    localeSettings,
    open,
    price,
    setAmount,
    setOpen,
    styleSettings,
  } = useProductItem({ product })

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
        <div className="h-full overflow-auto pb-32" style={{ scrollbarWidth: 'none' }}>
          {product.images && product.images.length > 0 && (
            <Image src={product.images[0].image} alt={product.name} width={500} height={320} className="" />
          )}
          <div className="flex w-full flex-col gap-3 p-4">
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-app-800">{product.description}</p>
          </div>
          {/* ADD MODIFIER PICKER */}
          {product.modifiers && product.modifiers.length > 0
            ? product.modifiers.map((mod) => (
                <ModifierPicker
                  key={mod.id}
                  modifier={mod}
                  localeSettings={localeSettings}
                  value={currentModifierValue(mod)}
                  onChange={handleModifierChange}
                />
              ))
            : null}
        </div>
        <div className="fixed inset-x-0 bottom-0 flex h-[122px] w-full flex-col items-center justify-center gap-[10px] bg-white/5 px-6 pt-2 backdrop-blur-md">
          <CountPicker baseColor={styleSettings?.primaryColour} value={amount} onChange={setAmount} />
          <button
            disabled={price === 0}
            onClick={handleAddToOrder}
            type="button"
            className="h-12 w-full rounded-full text-lg font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
            style={{ backgroundColor: styleSettings?.primaryColour }}
          >
            Add to order • {formattedPrice}
          </button>
        </div>
      </Modal.Content>
    </Modal>
  )
}
