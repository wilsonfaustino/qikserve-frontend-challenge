import type { ComponentProps } from 'react'

interface Props extends ComponentProps<'svg'> {}

export function SearchIcon({ className }: Props) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 18C6.08172 18 2.5 14.4183 2.5 10C2.5 5.58172 6.08172 2 10.5 2C14.9183 2 18.5 5.58172 18.5 10C18.5 11.8487 17.8729 13.551 16.8199 14.9056L22.2071 20.2929L20.7929 21.7071L15.4056 16.3199C14.051 17.3729 12.3487 18 10.5 18ZM16.5 10C16.5 13.3137 13.8137 16 10.5 16C7.18629 16 4.5 13.3137 4.5 10C4.5 6.68629 7.18629 4 10.5 4C13.8137 4 16.5 6.68629 16.5 10Z"
        fill="#8A94A4"
      />
    </svg>
  )
}