import type { Metadata } from 'next'

import { Main } from '~/components/main'
import { env } from '~/env'

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetch(`${env.SETTINGS_URL}`).then((res) => res.json())

  return {
    title: data.name,
  }
}

export default function Home() {
  return (
    <>
      <Main title={'teste'} description={'teste'} />
    </>
  )
}
