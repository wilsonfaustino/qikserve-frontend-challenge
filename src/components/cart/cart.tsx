'use client'

import { useCallback } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import type { CartProduct } from '~/@types'
import { cartState } from '~/context/cart-atom'
import { localeState } from '~/context/locale-atom'
import { settingsState } from '~/context/settings-atom'
import { formatCurrency } from '~/utils/formatCurrency'

import { CountPicker } from '../count-picker'

export function Cart() {
  const styleSettings = useRecoilValue(settingsState)
  const localeSettings = useRecoilValue(localeState)
  const [cartItems, setCartItems] = useRecoilState(cartState)

  const subTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)
  const cartTotal = subTotal

  const formattedItemPrice = useCallback(
    (item: CartProduct) => {
      return formatCurrency(item.price * item.quantity, localeSettings?.locale, localeSettings?.ccy)
    },
    [localeSettings],
  )

  const handleQuantity = (item: CartProduct, val: number) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id)
    const newCartItems = [...cartItems]
    newCartItems[itemIndex] = { ...newCartItems[itemIndex], quantity: val }

    setCartItems(newCartItems)
  }

  if (cartItems.length === 0) {
    return (
      <div className="h-full min-h-[129px] w-80 bg-app-400 shadow-lg">
        <div className="flex h-16 items-center px-6">
          <h2 className="text-2xl font-medium text-app-800">Carrinho</h2>
        </div>
        <div className="flex h-16 items-center bg-white px-6">
          <p className="text-app-800">Seu carrinho está vazio</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full min-h-[129px] w-[320px] overflow-hidden bg-app-400 shadow-lg">
      <div className="flex h-16 items-center px-6">
        <h2 className="text-2xl font-medium text-app-800">Carrinho</h2>
      </div>
      <div className="flex w-full flex-col bg-white shadow-sm">
        {cartItems.map((item) => (
          <div key={`${item.id}-${Math.random()}`} className="px-4 pb-4 pt-2 text-left">
            <div className="flex items-center justify-between">
              <h3>{item.name}</h3>
              <p>{formattedItemPrice(item)}</p>
            </div>
            {item.modifiers && (
              <ul>
                {item.modifiers.map((modifier) => (
                  <li key={modifier.id} className="opacity-50">
                    {modifier.name}
                  </li>
                ))}
              </ul>
            )}
            <CountPicker
              baseColor={styleSettings?.primaryColour}
              size="sm"
              value={item.quantity}
              onChange={(val) => handleQuantity(item, val)}
            />
          </div>
        ))}
      </div>
      <div className="flex h-16 items-center justify-between border-b-2 px-6">
        <p>Subtotal</p>
        <p>{formatCurrency(subTotal, localeSettings?.locale, localeSettings?.ccy)}</p>
      </div>
      <div className="flex h-16 items-center justify-between px-6 text-2xl">
        <p>Total:</p>
        <p className="font-bold">{formatCurrency(cartTotal, localeSettings?.locale, localeSettings?.ccy)}</p>
      </div>
    </div>
  )
}
