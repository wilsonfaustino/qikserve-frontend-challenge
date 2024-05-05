import type { Meta, StoryObj } from '@storybook/react'

import { ProductList } from '.'

const meta = {
  title: 'Product List',
  component: ProductList,
} satisfies Meta<typeof ProductList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Product List',
  },
}
