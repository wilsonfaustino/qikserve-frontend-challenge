import type { Metadata } from 'next'

import { getContent } from '~/api/content'
import { Main } from '~/components/main'
import { env } from '~/env'

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetch(`${env.SETTINGS_URL}`).then((res) => res.json())

  return {
    title: data.name,
  }
}

export default async function Home() {
  const content = await getContent()

  return (
    <>
      <Main content={content} />
    </>
  )
}
