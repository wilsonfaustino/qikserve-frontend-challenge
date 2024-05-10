import { useFormatter } from 'next-intl'
import { useRecoilValue } from 'recoil'

import { localeState } from '~/context/locale-atom'

type Props = {
  value: number
}

export function useFormatCurrency({ value }: Props) {
  const locale = useRecoilValue(localeState)
  const format = useFormatter()

  return format.number(value, { style: 'currency', currency: locale?.ccy })
}
