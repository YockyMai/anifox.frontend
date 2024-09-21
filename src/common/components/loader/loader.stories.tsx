import type { Meta, StoryObj } from '@storybook/react'

import { UISizes } from '@/common/types/ui-sizes'

import { Loader } from './loader'

const meta = {
  title: 'Loader',
  component: Loader,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  args: {
    size: UISizes.MD
  }
}
