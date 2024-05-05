import type { Products } from '~/@types'

export type Props = {
  products: Products
}

export function ProductList({ products }: Props) {
  return (
    <div className="h-96 w-[600px] bg-white shadow-lg">
      <ul>
        {products.sections.map((section) => (
          <li key={section.id}>
            <h2>{section.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}