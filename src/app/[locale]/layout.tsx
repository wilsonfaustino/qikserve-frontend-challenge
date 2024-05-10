import '~/styles/globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import type { ReactNode } from 'react'

import { Header } from '~/components/header'
import RecoilContextProvider from '~/context/recoil-provider'
import { cn } from '~/utils/classnames'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400'] })

export const metadata: Metadata = {
  viewport: 'width=device-width,initial-scale=1',
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={cn('bg-app-500 text-app-900 antialiased', roboto.className)}>
        <NextIntlClientProvider messages={messages}>
          <RecoilContextProvider>
            <Header />
            {children}
          </RecoilContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
