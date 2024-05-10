import type { Metadata } from 'next'

import { Main } from '~/components/main'
import { env } from '~/env'

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetch(`${env.SETTINGS_URL}`).then((res) => res.json())

  return {
    title: data.name,
  }
}

export default async function Signin() {
  return (
    <Main>
      <div className="flex h-96 w-full flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold text-app-800">Sign In</h1>
        <p>Under construction</p>
      </div>
    </Main>
  )
}
