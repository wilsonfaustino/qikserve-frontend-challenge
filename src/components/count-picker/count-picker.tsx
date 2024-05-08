'use client'

import { cn } from '~/utils/classnames'

import { MinusIcon } from '../icons/minus-icon'
import { PlusIcon } from '../icons/plus-icon'

type Props = {
  baseColor?: string
  size?: 'sm' | 'lg'
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
}

export function CountPicker({ baseColor = 'red', value, onChange, size = 'lg', min = 1, max = 20 }: Props) {
  const buttonBaseClasses =
    'flex items-center justify-center rounded-full text-white disabled:cursor-not-allowed disabled:text-zinc-700'
  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1)
    }
  }
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1)
    }
  }

  const isDecreaseDisabled = value === min
  const isIncreaseDisabled = value === max

  return (
    <div className={cn('flex items-center justify-between', size === 'lg' ? 'h-8 w-[143px]' : 'h-9 w-[94px] p-2')}>
      <button
        disabled={isDecreaseDisabled}
        onClick={handleDecrement}
        aria-label="Decrement value"
        className={cn(buttonBaseClasses, size === 'lg' ? 'h-8 w-8' : 'h-5 w-5')}
        style={{ backgroundColor: isDecreaseDisabled ? '#DADADA' : baseColor }}
      >
        <MinusIcon
          className={cn(size === 'lg' ? 'w-[18px]' : 'w-3')}
          accentColor={isDecreaseDisabled ? '#5F5F5F' : 'white'}
        />
      </button>
      <span className="font-bold">{value}</span>
      <button
        disabled={isIncreaseDisabled}
        onClick={handleIncrement}
        aria-label="Increment value"
        className={cn(buttonBaseClasses, size === 'lg' ? 'h-8 w-8' : 'h-5 w-5')}
        style={{ backgroundColor: isIncreaseDisabled ? '#DADADA' : baseColor }}
      >
        <PlusIcon
          className={cn(size === 'lg' ? 'h-[18px] w-[18px]' : 'h-3 w-3')}
          accentColor={isIncreaseDisabled ? '#5F5F5F' : 'white'}
        />
      </button>
    </div>
  )
}
