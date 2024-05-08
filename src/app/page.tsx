import type { Metadata } from 'next'

import { getContent } from '~/api/content'
import { Cart } from '~/components/cart'
import { Main } from '~/components/main'
import { ProductList } from '~/components/product-list'
import { SearchBar } from '~/components/search-bar'
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
    <Main>
      <SearchBar />
      <div className=":py-8 flex w-full flex-col gap-6 md:flex-row md:px-10">
        <ProductList products={content} />
        <Cart />
      </div>
    </Main>
  )
}
