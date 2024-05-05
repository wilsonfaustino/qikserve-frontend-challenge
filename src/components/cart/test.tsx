import { render, screen } from '~/utils/tests'

import { Cart } from '.'

describe('<Cart />', () => {
  it('renders', () => {
    render(<Cart title="cart" />)

    expect(screen.getByRole('heading', { name: /cart/i })).toBeInTheDocument()
  })
})
