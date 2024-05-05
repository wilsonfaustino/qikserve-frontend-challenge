'use client'

import Image from 'next/image'
import type { LinkProps } from 'next/link'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'
import { useRecoilValue } from 'recoil'

import { settingsState } from '~/context/settings-atom'
import { cn } from '~/utils/classnames'

interface NavLinkProps extends LinkProps {
  href: string
  imgUrl: string
  isActive?: boolean
  className?: string
}

export function CategoryLink({
  children,
  href,
  imgUrl,
  isActive,
  className,
  ...props
}: PropsWithChildren<NavLinkProps>) {
  const settings = useRecoilValue(settingsState)

  return (
    <Link
      className={cn('group relative top-0 flex w-[104px] flex-col items-center focus:outline-none', className)}
      data-active={isActive}
      href={href}
      {...props}
    >
      <Image
        src={imgUrl}
        alt={children as string}
        width={74}
        height={74}
        className={cn('aspect-square h-[74px] rounded-full')}
        style={{ outline: isActive ? `2px solid ${settings?.primaryColour || 'black'}` : 'none', outlineOffset: '2px' }}
      />
      <div className="flex h-16 w-full items-center justify-center">
        <span
          className={cn(
            'select-none whitespace-nowrap tracking-wide transition',
            'lg:group-hover:text-app-600 text-xl lg:text-lg',
          )}
        >
          {children}
        </span>
      </div>
      {isActive ? (
        <div
          className={cn('absolute inset-x-0 bottom-0 h-0.5 w-full')}
          style={{ backgroundColor: isActive && (settings?.primaryColour || 'black') }}
        />
      ) : null}
    </Link>
  )
}
