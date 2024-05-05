import { atom } from 'recoil'

import type { Locale } from '~/@types'

export const localeState = atom<Locale | undefined>({
  key: 'LocaleState',
  default: undefined,
})
