import { useFormatter } from 'next-intl'
import { useCallback } from 'react'
import { useRecoilValue } from 'recoil'

import { localeState } from '~/context/locale-atom'

export function useFormatCurrency() {
  const locale = useRecoilValue(localeState)
  const format = useFormatter()

  const formatCurrency = useCallback(
    (value: number) => {
      if (!locale?.ccy) return '...'
      return format.number(value, { style: 'currency', currency: locale?.ccy })
    },
    [format, locale?.ccy],
  )

  return formatCurrency
}
