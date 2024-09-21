import { Meta, StoryObj } from '@storybook/react'

import { UISizes } from '@/common/types/ui-sizes'

import { Badge } from './badge'

const meta = {
  title: 'Badge',
  component: Badge,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  args: {
    children: 'Badge',
    radius: UISizes.MD,
    size: UISizes.SM,
    variant: 'filled'
  }
}
