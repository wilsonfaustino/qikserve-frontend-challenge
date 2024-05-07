'use client'

import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'

type Props = {
  baseColor?: string
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
}

export function CountPicker({ baseColor = 'red', value, onChange, min = 1, max = 20 }: Props) {
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
    <div className="flex h-8 w-[143px] items-center justify-between">
      <button
        disabled={isDecreaseDisabled}
        onClick={handleDecrement}
        aria-label="Decrement value"
        className="flex h-8 w-8 items-center justify-center rounded-full text-white disabled:cursor-not-allowed disabled:text-zinc-700"
        style={{ backgroundColor: isDecreaseDisabled ? '#DADADA' : baseColor }}
      >
        <MinusIcon className="h-[18px] w-[18px]" />
      </button>
      <span className="font-bold">{value}</span>
      <button
        disabled={isIncreaseDisabled}
        onClick={handleIncrement}
        aria-label="Increment value"
        className="flex h-8 w-8 items-center justify-center rounded-full text-white disabled:cursor-not-allowed disabled:text-zinc-700"
        style={{ backgroundColor: isIncreaseDisabled ? '#DADADA' : baseColor }}
      >
        <PlusIcon className="h-[18px] w-[18px]" />
      </button>
    </div>
  )
}
