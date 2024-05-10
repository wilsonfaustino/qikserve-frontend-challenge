import type { Metadata } from 'next'

import { getContent } from '~/api/content'
import { AllergyInformation } from '~/components/allergy-information'
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
      <div className=":py-8 flex w-full flex-col md:flex-row md:gap-6 md:px-10">
        <ProductList products={content} />
        <div className="flex flex-col-reverse md:flex-col">
          <Cart />
          <AllergyInformation />
        </div>
      </div>
    </Main>
  )
}
