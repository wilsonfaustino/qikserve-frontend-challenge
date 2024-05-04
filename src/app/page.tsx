import type { Metadata } from 'next'

import { Header } from '~/components/header'
import { Main } from '~/components/main'
import { env } from '~/env'
import { getSettings } from '~/utils/settings'

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetch(`${env.SETTINGS_URL}`).then((res) => res.json())

  return {
    title: data.name,
  }
}

export default async function Home() {
  const data = await getSettings()
  return (
    <>
      <Header settings={data.webSettings} />
      <Main title={data.name} description={data.description || ''} />
    </>
  )
}
