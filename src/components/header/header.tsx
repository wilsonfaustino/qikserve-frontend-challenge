import Image from 'next/image'

import type { Settings } from '~/@types'
import { getSettings } from '~/api/settings'

import { DesktopNav } from './desktop-nav'

export type Props = {
  settings: Settings
}

export async function Header() {
  const data = await getSettings()
  const settings = data.webSettings
  const url = data.webSettings.bannerImage || 'https://fakeimg.pl/1440x150?text=Placeholder+image'

  return (
    <div
      className="bg-red mx-auto flex w-full max-w-[1440px] flex-col items-center bg-white pb-[5px]"
      style={{ backgroundColor: settings.backgroundColour }}
    >
      <DesktopNav settings={settings} />
      <div className="h-[150px] w-full max-w-[1440px]">
        <Image
          width="1486"
          height="141"
          src={url}
          alt="header image"
          className="h-[150px] w-full max-w-[1440px] object-cover"
        />
      </div>
    </div>
  )
}
