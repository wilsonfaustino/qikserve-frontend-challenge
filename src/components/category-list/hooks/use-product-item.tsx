import { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import type { CartProductModifier, ModifierProduct, Product } from '~/@types'
import { cartState } from '~/context/cart-atom'
import { settingsState } from '~/context/settings-atom'
import { useFormatCurrency } from '~/hooks/format-currency'

type Props = {
  product: Product
}

export function useProductItem({ product }: Props) {
  const styleSettings = useRecoilValue(settingsState)
  const [cart, setCart] = useRecoilState(cartState)

  const [open, setOpen] = useState(false)
  const [amount, setAmount] = useState(1)
  const [price, setPrice] = useState(product.price)
  const [modifiers, setModifiers] = useState<CartProductModifier[]>([])

  const formatCurrency = useFormatCurrency()

  const formattedPrice = formatCurrency(price * amount)

  const currentModifierValue = (modifier: ModifierProduct) => {
    const foundModifier = modifiers.find((mod) => mod.parentId === modifier.id)
    return foundModifier ? `${foundModifier.parentId}-${foundModifier.id}` : undefined
  }

  const handleAddToOrder = () => {
    const productToAdd = {
      id: product.id,
      name: product.name,
      price,
      quantity: amount,
      modifiers,
    }
    setCart([...cart, productToAdd])
    setOpen(false)
  }

  const handleModifierChange = (value: string) => {
    const [modId, itemId] = value.split('-').map(Number)
    const selectedMod = product.modifiers?.find((mod) => mod.id === modId)
    const selectedItem = selectedMod && selectedMod.items.find((item) => item.id === itemId)
    if (selectedItem) {
      const newModifiers = [
        ...modifiers.filter((mod) => mod.parentId !== selectedMod.id),
        {
          id: selectedItem.id,
          name: selectedItem.name,
          price: selectedItem.price,
          parentId: selectedMod.id,
        },
      ]
      const newPrice = newModifiers.reduce((acc, item) => acc + item.price, 0)

      setPrice(newPrice)
      setModifiers(newModifiers)
    }
  }

  return {
    amount,
    currentModifierValue,
    formattedPrice,
    handleAddToOrder,
    handleModifierChange,
    open,
    price,
    setAmount,
    setOpen,
    styleSettings,
  }
}
