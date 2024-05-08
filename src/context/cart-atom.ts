import { atom } from 'recoil'

import type { CartProduct } from '~/@types'

export const cartState = atom<CartProduct[]>({
  key: 'CartState',
  default: [],
})
