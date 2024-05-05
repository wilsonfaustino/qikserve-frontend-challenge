import type { Content } from '~/@types'

import { Cart } from '../cart'

export type Props = {
  content: Content
}

export const Main = ({ content }: Props) => {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center bg-red-500 text-center">
      <div className="h-14 w-full bg-white"></div>
      <div className="bg-app-400 flex w-full gap-6 px-10 py-8">
        <div className="h-96 w-[600px] bg-yellow-400">
          <ul>
            {content.sections.map((section) => (
              <li key={section.id}>
                <h2>{section.name}</h2>
              </li>
            ))}
          </ul>
        </div>
        <Cart />
      </div>
    </main>
  )
}
