import { atom } from 'recoil'

import type { Settings } from '~/@types'

export const settingsState = atom<Settings | undefined>({
  key: 'SettingsState',
  default: undefined,
})
