import { formatCurrency } from './formatCurrency'

describe('formatCurrency', () => {
  it('should format the currency using default locale', () => {
    const value = 1000
    const formattedValue = formatCurrency(value)
    expect(formattedValue).toMatch('R$ 1.000,00')
  })
})
