import type { Meta, StoryObj } from '@storybook/react'

import { Tooltip } from './tooltip'

const meta = {
  title: 'Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  args: {
    children: <h1>Hover me</h1>,
    label: <>CONTENT</>
  }
}
