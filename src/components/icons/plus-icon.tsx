import type { ComponentProps } from 'react'

interface Props extends ComponentProps<'svg'> {
  accentColor?: string
}

export function PlusIcon({ className, accentColor = 'black' }: Props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.5 16.5C7.5 17.3284 8.17157 18 9 18C9.82843 18 10.5 17.3284 10.5 16.5V10.5H16.5C17.3284 10.5 18 9.82843 18 9C18 8.17157 17.3284 7.5 16.5 7.5H10.5V1.5C10.5 0.671573 9.82843 0 9 0C8.17157 0 7.5 0.671573 7.5 1.5V7.5H1.5C0.671573 7.5 0 8.17157 0 9C0 9.82843 0.671573 10.5 1.5 10.5H7.5V16.5Z"
        fill={accentColor}
      />
    </svg>
  )
}
