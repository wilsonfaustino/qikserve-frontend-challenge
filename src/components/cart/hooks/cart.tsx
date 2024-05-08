import { useCallback } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import type { CartProduct } from '~/@types'
import { cartState } from '~/context/cart-atom'
import { localeState } from '~/context/locale-atom'
import { settingsState } from '~/context/settings-atom'
import { formatCurrency } from '~/utils/formatCurrency'

export function useCart() {
  const styleSettings = useRecoilValue(settingsState)
  const localeSettings = useRecoilValue(localeState)
  const [cartItems, setCartItems] = useRecoilState(cartState)

  const subTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)
  const cartTotal = subTotal

  const formatPrice = useCallback(
    (price: number) => {
      return formatCurrency(price, localeSettings?.locale, localeSettings?.ccy)
    },
    [localeSettings],
  )

  const handleQuantity = (item: CartProduct, val: number) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id)
    const newCartItems = [...cartItems]
    newCartItems[itemIndex] = { ...newCartItems[itemIndex], quantity: val }

    setCartItems(newCartItems)
  }

  const handleCheckout = () => {
    alert('Your items was sent to production!')
    console.log(cartItems)
    setCartItems([])
  }

  return {
    cartItems,
    cartTotal,
    handleQuantity,
    handleCheckout,
    setCartItems,
    styleSettings,
    subTotal,
    formatPrice,
  }
}
