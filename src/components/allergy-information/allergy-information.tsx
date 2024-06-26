'use client'

import { useTranslations } from 'next-intl'
import { useRecoilValue } from 'recoil'

import { settingsState } from '~/context/settings-atom'

export function AllergyInformation() {
  const t = useTranslations('menu.Menu')
  const settings = useRecoilValue(settingsState)
  return (
    <div
      className="flex h-16 w-full items-center justify-center p-6 md:hidden"
      style={{ color: settings?.primaryColour || 'black' }}
    >
      <a href="" className="h-5 w-full rounded-full bg-white font-bold underline">
        {t('allergy-warning')}
      </a>
    </div>
  )
}
