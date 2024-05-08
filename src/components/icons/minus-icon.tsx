import type { ComponentProps } from 'react'

interface Props extends ComponentProps<'svg'> {
  accentColor?: string
}

export function MinusIcon({ className, accentColor = 'black' }: Props) {
  return (
    <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect y="0.455078" width="18" height="3" rx="1.5" fill={accentColor} />
    </svg>
  )
}
