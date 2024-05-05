import { render, screen } from '~/utils/tests'

import { ProductList } from '.'

describe('<ProductList />', () => {
  it('renders', () => {
    render(<ProductList title="product list" />)

    expect(screen.getByRole('heading', { name: /product list/i })).toBeInTheDocument()
  })
})
