import type { Meta, StoryObj } from '@storybook/react'

import { CategorySelector } from '.'

const meta = {
  title: 'Category Selector',
  component: CategorySelector,
} satisfies Meta<typeof CategorySelector>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Category Selector',
  },
}
