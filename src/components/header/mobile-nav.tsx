'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import menuIcon from '~/assets/menu-icon.svg'

import { Modal } from '../modal'
import type { Link } from './display-nav'
import { NavLink } from './nav-link'

type Props = {
  backgroundColor?: string
  links: Link[]
}
export function MobileNav({ links, backgroundColor = 'black' }: Props) {
  const t = useTranslations('menu.Menu')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative flex h-16 w-full items-center justify-center" style={{ backgroundColor }}>
      <Modal open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <Modal.Button asChild>
          <button className="absolute right-0 flex h-16 w-16 items-center justify-center" aria-label="Menu">
            <Image src={menuIcon} alt="menu icon" />
          </button>
        </Modal.Button>
        <Modal.Content>
          <nav className="flex h-full w-full flex-col items-center justify-center gap-10">
            {links.map((link) => (
              <NavLink key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} isMobile>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </Modal.Content>
      </Modal>
      <h1 className="text-lg font-medium text-white">{t('title')}</h1>
    </div>
  )
}
