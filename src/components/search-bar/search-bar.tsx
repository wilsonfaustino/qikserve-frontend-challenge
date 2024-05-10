'use client'

import { useTranslations } from 'next-intl'
import { useSetRecoilState } from 'recoil'

import { searchTermState } from '~/context/search-atom'
import { cn } from '~/utils/classnames'

import { SearchIcon } from '../icons/search-icon'

export function SearchBar() {
  const t = useTranslations('menu.Menu')
  const setSearchTerm = useSetRecoilState(searchTermState)

  return (
    <div className="flex h-14 w-full items-center justify-center bg-app-500 p-4 lg:px-0 lg:py-1.5">
      <div
        className={cn(
          'flex h-11 w-full items-center justify-center rounded-lg bg-white ring-1 ring-inset ring-app-600 transition',
          'focus-within:ring-2 focus-within:ring-inset',
        )}
      >
        <div className="flex h-11 w-12 items-center justify-center">
          <SearchIcon className="h-6 w-6" />
        </div>
        <input
          type="text"
          className={cn(
            'h-11 w-full border-transparent bg-transparent',
            'placeholder:text-app-700 focus:border-transparent focus:outline-0 focus:ring-0',
          )}
          placeholder={t('search.placeholder')}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  )
}
