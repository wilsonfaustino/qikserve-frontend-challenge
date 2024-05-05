import type { Product } from '~/@types'

/**
 * Formats a number as a currency string.
 *
 * @param {number} value - The number to format.
 * @param {string} [locale='pt-BR'] - The locale to use for formatting. Defaults to 'pt-BR'.
 * @param {string} [currency='BRL'] - The currency to use for formatting. Defaults to 'BRL'.
 * @returns {string} The formatted currency string.
 */
export function formatCurrency(value: number, locale = 'pt-BR', currency = 'BRL') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value)
}

/**
 * Defines the initial price of a product.
 *
 * @param {Product} item - The product to define the initial price for.
 * @param {{ locale: string; ccy: string }} [localeSettings] - The locale settings to use for formatting.
 * @returns {string} The initial price of the product.
 */
export function defineInitialPrice(item: Product, localeSettings?: { locale: string; ccy: string }) {
  if (item.modifiers && item.modifiers.length > 0) {
    // Retrieve the price of the first item in the first modifier
    const modifierItemPrice = item.modifiers[0].items[0]?.price
    if (modifierItemPrice !== undefined) {
      // Return modifier item price if it exists
      return formatCurrency(modifierItemPrice, localeSettings?.locale, localeSettings?.ccy)
    }
  }
  return formatCurrency(item.price, localeSettings?.locale, localeSettings?.ccy)
}
