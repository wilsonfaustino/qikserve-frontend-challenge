import { render, screen } from '~/utils/tests'

import { CategoryList } from '.'

describe('<CategoryList />', () => {
  it('renders', () => {
    render(<CategoryList title="category list" />)

    expect(screen.getByRole('heading', { name: /category list/i })).toBeInTheDocument()
  })
})
