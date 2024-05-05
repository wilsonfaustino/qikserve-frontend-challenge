import { NavLink } from './nav-link'

export type Props = {
  backgroundColor: string
}

export function DesktopNav({ backgroundColor }: Props) {
  return (
    <div className="flex h-[52px] w-full items-center justify-center" style={{ backgroundColor }}>
      <nav className="flex w-full max-w-[1440px] items-center justify-center p-4 text-white">
        <NavLink href="/">MENU</NavLink>
        <NavLink href="/signin">ENTRAR</NavLink>
        <NavLink href="/contact">CONTATO</NavLink>
      </nav>
    </div>
  )
}
