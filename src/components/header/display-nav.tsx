'use client'

import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

import type { Settings } from '~/@types'
import { settingsState } from '~/context/settings-atom'
import { useDevice } from '~/hooks/device'

import { DesktopNav } from './desktop-nav'
import { MobileNav } from './mobile-nav'

export type Link = {
  href: string
  label: string
}

type Props = {
  settings: Settings
}

export function DisplayNav({ settings }: Props) {
  const setSettings = useSetRecoilState(settingsState)

  const { isDesktop, isMobile } = useDevice()

  useEffect(() => {
    if (settings) {
      setSettings(settings)
    }
  }, [settings, setSettings])

  const links: Link[] = [
    {
      href: '/',
      label: 'Menu',
    },
    {
      href: '/signin',
      label: 'ENTRAR',
    },
    {
      href: '/contact',
      label: 'Contato',
    },
  ]

  return (
    <section className="mx-auto w-full max-w-7xl">
      {isDesktop ? <DesktopNav links={links} backgroundColor={settings.primaryColour} /> : null}
      {isMobile ? <MobileNav backgroundColor={settings.primaryColour} links={links} /> : null}
    </section>
  )
}
