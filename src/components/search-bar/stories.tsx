import type { Meta, StoryObj } from '@storybook/react'

import { SearchBar } from '.'

const meta = {
  title: 'Search Bar',
  component: SearchBar,
} satisfies Meta<typeof SearchBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Search Bar',
  },
}
