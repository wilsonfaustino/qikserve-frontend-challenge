import '~/styles/globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import type { ReactNode } from 'react'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400'] })

export const metadata: Metadata = {
  viewport: 'width=device-width,initial-scale=1',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
