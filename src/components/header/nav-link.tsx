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
}

export function NavLink({ children, href, className, ...props }: PropsWithChildren<NavLinkProps>) {
  const pathname = usePathname()

  const isActive = useMemo(() => pathname === href, [pathname, href])

  return (
    <Link
      className={cn(
        'group relative top-0 flex items-center focus:outline-none',
        'h-10 w-full justify-end lg:h-[52px] lg:w-[232px] lg:justify-center',
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
          className={cn('absolute inset-x-0 bottom-0 h-[5px] w-full group-data-[active=true]:bg-white')}
          layoutId="line"
        />
      ) : null}
    </Link>
  )
}
