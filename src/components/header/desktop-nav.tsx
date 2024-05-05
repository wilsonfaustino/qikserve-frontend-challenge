'use client'

import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

import type { Settings } from '~/@types'
import { settingsState } from '~/context/settings-atom'

import { NavLink } from './nav-link'

export type Props = {
  settings: Settings
}

export function DesktopNav({ settings }: Props) {
  const setSettings = useSetRecoilState(settingsState)
  const backgroundColor = settings?.navBackgroundColour || 'black'

  useEffect(() => {
    if (settings) {
      setSettings(settings)
    }
  }, [settings, setSettings])
  return (
    <div className="flex h-[52px] w-full items-center justify-center" style={{ backgroundColor }}>
      <nav className="flex w-full max-w-[1440px] items-center justify-center p-4 text-white">
        <NavLink href="/">MENU</NavLink>
        <NavLink href="/signin">ENTRAR</NavLink>
        <NavLink href="/contact">CONTATO</NavLink>
      </nav>
    </div>
  )
}
