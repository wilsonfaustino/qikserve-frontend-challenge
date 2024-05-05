import type { ReactNode } from 'react'

export type Props = {
  children: ReactNode
}

export const Main = ({ children }: Props) => {
  return (
    <main className="bg-app-400 mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center">
      {children}
    </main>
  )
}
