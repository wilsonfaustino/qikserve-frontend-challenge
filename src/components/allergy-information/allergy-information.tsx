'use client'

import { useRecoilValue } from 'recoil'

import { settingsState } from '~/context/settings-atom'

export function AllergyInformation() {
  const settings = useRecoilValue(settingsState)
  return (
    <div
      className="flex h-16 w-full items-center justify-center p-6 md:hidden"
      style={{ color: settings?.primaryColour || 'black' }}
    >
      <a href="" className="h-5 w-full rounded-full bg-white font-bold underline">
        View Allergy Information
      </a>
    </div>
  )
}
