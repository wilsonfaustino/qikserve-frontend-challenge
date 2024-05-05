import Image from 'next/image'

import searchIcon from '~/assets/search-icon.svg'
import { cn } from '~/utils/classnames'

export function SearchBar() {
  return (
    <div className="bg-app-500 flex h-14 w-full items-center justify-center py-1.5">
      <div
        className={cn(
          'ring-app-600 flex h-11 w-full items-center justify-center rounded-lg bg-white ring-1 ring-inset transition',
          'focus-within:ring-2 focus-within:ring-inset',
        )}
      >
        <div className="flex h-11 w-12 items-center justify-center">
          <Image src={searchIcon} alt="Search icon" width={24} height={24} />
        </div>
        <input
          type="text"
          className={cn(
            'h-11 w-full border-transparent bg-transparent',
            'placeholder:text-app-700 focus:border-transparent focus:outline-0 focus:ring-0',
          )}
          placeholder="Search menu items"
        />
      </div>
    </div>
  )
}
