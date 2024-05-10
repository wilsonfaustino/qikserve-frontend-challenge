'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

import type { Locale, Settings } from '~/@types'
import { localeState } from '~/context/locale-atom'

import { DisplayNav } from './display-nav'

type Props = {
  locale: Locale
  settings: Settings
}

export function Header({ locale, settings }: Props) {
  const setLocale = useSetRecoilState(localeState)

  useEffect(() => {
    setLocale(locale)
  }, [locale, setLocale])

  const url = settings.bannerImage || 'https://fakeimg.pl/1440x150?text=Placeholder+image'

  return (
    <div
      className="bg-red mx-auto flex w-full max-w-[1440px] flex-col items-center bg-white pb-[5px]"
      style={{ backgroundColor: settings.backgroundColour }}
    >
      <DisplayNav settings={settings} />
      <div className="h-[150px] w-full max-w-[1440px]">
        <Image
          width="1486"
          height="141"
          src={url}
          alt="header image"
          priority
          className="h-[150px] w-full max-w-[1440px] object-cover"
        />
      </div>
    </div>
  )
}
