'use client'

import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useEffect, useMemo } from 'react'
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
  const t = useTranslations('menu.Menu')
  const setSettings = useSetRecoilState(settingsState)

  const { locale } = useParams()

  const { isDesktop, isMobile } = useDevice()

  useEffect(() => {
    if (settings) {
      setSettings(settings)
    }
  }, [settings, setSettings])

  const links: Link[] = useMemo(() => {
    return [
      { href: `/${locale}`, label: t('links.home') },
      { href: `/${locale}/signin`, label: t('links.signin') },
      { href: `/${locale}/contact`, label: t('links.contact') },
    ]
  }, [t, locale])

  return (
    <section className="mx-auto w-full">
      {isDesktop ? <DesktopNav links={links} backgroundColor={settings.primaryColour} /> : null}
      {isMobile ? <MobileNav backgroundColor={settings.primaryColour} links={links} /> : null}
    </section>
  )
}
