import type { Link } from './display-nav'
import { NavLink } from './nav-link'

export type Props = {
  backgroundColor?: string
  links: Link[]
}

export function DesktopNav({ links, backgroundColor = 'black' }: Props) {
  return (
    <div className="flex h-[52px] w-full items-center justify-center" style={{ backgroundColor }}>
      <nav className="flex w-full items-center justify-center p-4 text-white">
        {links.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
