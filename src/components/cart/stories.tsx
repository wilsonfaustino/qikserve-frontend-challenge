import type { Meta, StoryObj } from '@storybook/react'

import { Cart } from '.'

const meta = {
  title: 'Cart',
  component: Cart,
} satisfies Meta<typeof Cart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Cart',
  },
}
