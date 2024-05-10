import { NextIntlClientProvider } from 'next-intl'
import * as recoil from 'recoil'

import { fireEvent, render, screen } from '~/utils/tests'

import { SearchBar } from '.'

describe('<SearchBar />', () => {
  it('renders', () => {
    const messages = { menu: { Menu: { search: { placeholder: 'Search menu items' } } } }
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <SearchBar />
      </NextIntlClientProvider>,
    )
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Search menu items')
  })
  it('should handle long search terms', () => {
    const setSearchTermMock = vi.fn()
    vi.spyOn(recoil, 'useSetRecoilState').mockReturnValue(setSearchTermMock)

    render(
      <NextIntlClientProvider
        locale="en"
        messages={{
          Menu: {
            search: {
              placeholder: 'Search menu items',
            },
          },
        }}
      >
        <SearchBar />
      </NextIntlClientProvider>,
    )

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'This is a long search term' } })

    expect(setSearchTermMock).toHaveBeenCalledWith('This is a long search term')
  })
})
