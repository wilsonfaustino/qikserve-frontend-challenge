import * as RadioGroup from '@radix-ui/react-radio-group'

import type { Locale, ModifierProduct } from '~/@types'
import { cn } from '~/utils/classnames'
import { formatCurrency } from '~/utils/formatCurrency'

export type Props = {
  modifier: ModifierProduct
  localeSettings?: Locale
  value?: string
  onChange: (value: string) => void
}

export function ModifierPicker({ modifier, localeSettings, value, onChange }: Props) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex h-[68px] flex-col justify-center bg-[#F8F9FA] p-4">
        <span className="font-bold">{modifier.name}</span>
        <span>Select 1 option</span>
      </div>
      <div>
        <RadioGroup.Root aria-label={modifier.name} value={value} onValueChange={onChange}>
          {modifier.items.map((item) => (
            <div key={item.id} className="flex w-full items-center justify-between p-4">
              <label className="flex flex-col justify-center" htmlFor={`${modifier.id}-${item.id}`}>
                <span className="font-bold">{item.name}</span>
                <span>{formatCurrency(item.price, localeSettings?.locale, localeSettings?.ccy)}</span>
              </label>
              <RadioGroup.Item
                className="flex h-5 w-5 items-center justify-center rounded-full border-[3px] border-zinc-500 leading-none"
                value={`${modifier.id}-${item.id}`}
                id={`${modifier.id}-${item.id}`}
              >
                <RadioGroup.Indicator
                  className={cn(
                    'relative flex h-full w-full items-center justify-center',
                    'after:h-2 after:w-2 after:rounded-full after:bg-app-800',
                  )}
                />
              </RadioGroup.Item>
            </div>
          ))}
        </RadioGroup.Root>
      </div>
    </div>
  )
}
