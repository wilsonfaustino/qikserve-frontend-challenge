import '~/styles/globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import type { ReactNode } from 'react'

import { Header } from '~/components/header'
import RecoilContextProvider from '~/context/recoil-provider'
import { cn } from '~/utils/classnames'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400'] })

export const metadata: Metadata = {
  viewport: 'width=device-width,initial-scale=1',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('bg-app-500 text-app-900 antialiased', roboto.className)}>
        <RecoilContextProvider>
          <Header />
          {children}
        </RecoilContextProvider>
      </body>
    </html>
  )
}
