import type { ReactNode } from 'react'

export type Props = {
  children: ReactNode
}

export const Main = ({ children }: Props) => {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center bg-app-400 pb-20 text-center">
      {children}
    </main>
  )
}
