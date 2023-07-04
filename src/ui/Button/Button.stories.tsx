import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

const meta = {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Example"
  },
}

export default meta