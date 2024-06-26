'use client'

import { motion } from 'framer-motion'
import type { LinkProps } from 'next/link'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { PropsWithChildren } from 'react'
import { useMemo } from 'react'

import { cn } from '~/utils/classnames'

interface NavLinkProps extends LinkProps {
  href: string
  className?: string
  isMobile?: boolean
}

export function NavLink({ children, href, className, isMobile, ...props }: PropsWithChildren<NavLinkProps>) {
  const pathname = usePathname()

  const isActive = useMemo(() => pathname === href, [pathname, href])

  return (
    <Link
      className={cn(
        'group relative top-0 flex items-center focus:outline-none',
        'h-10 w-full max-w-[232px] justify-center sm:h-[52px] sm:w-[232px]',
        className,
      )}
      data-active={isActive}
      href={href}
      {...props}
    >
      <span
        className={cn(
          'select-none whitespace-nowrap uppercase tracking-wide transition',
          'text-xl lg:text-lg lg:group-hover:text-zinc-300',
        )}
      >
        {children}
      </span>
      {isActive ? (
        <motion.div
          className={cn(
            'absolute inset-x-0 bottom-0 h-[5px] max-w-56 sm:w-full',
            isMobile ? 'group-data-[active=true]:bg-zinc-500' : 'group-data-[active=true]:bg-white',
          )}
          layoutId="line"
        />
      ) : null}
    </Link>
  )
}
