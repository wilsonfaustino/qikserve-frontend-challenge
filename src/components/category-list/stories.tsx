import type { Meta, StoryObj } from '@storybook/react'

import { CategoryList } from '.'

const meta = {
  title: 'Category List',
  component: CategoryList,
} satisfies Meta<typeof CategoryList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Category List',
  },
}
