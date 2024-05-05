import * as recoil from 'recoil'

import { fireEvent, render, screen } from '~/utils/tests'

import { SearchBar } from '.'

describe('<SearchBar />', () => {
  it('renders', () => {
    render(<SearchBar />)

    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Search menu items')
  })
  it('should handle long search terms', () => {
    const setSearchTermMock = vi.fn()
    vi.spyOn(recoil, 'useSetRecoilState').mockReturnValue(setSearchTermMock)

    render(<SearchBar />)

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'This is a long search term' } })

    expect(setSearchTermMock).toHaveBeenCalledWith('This is a long search term')
  })
})
