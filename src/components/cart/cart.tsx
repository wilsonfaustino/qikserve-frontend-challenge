'use client'

import { useDevice } from '~/hooks/device'

import { CartDesktop } from './cart-desktop'
import { CartMobile } from './cart-mobile'

export function Cart() {
  const { isDesktop, isMobile } = useDevice()

  return (
    <>
      {isDesktop ? <CartDesktop /> : null}
      {isMobile ? <CartMobile /> : null}
    </>
  )
}
