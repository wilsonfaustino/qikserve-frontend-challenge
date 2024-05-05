import { render, screen } from '~/utils/tests'

import { SearchBar } from '.'

describe('<SearchBar />', () => {
  it('renders', () => {
    render(<SearchBar title="search bar" />)

    expect(screen.getByRole('heading', { name: /search bar/i })).toBeInTheDocument()
  })
})
