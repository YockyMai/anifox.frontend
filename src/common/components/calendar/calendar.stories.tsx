import type { Meta, StoryObj } from '@storybook/react'

import Calendar from './calendar'

const meta = {
  title: 'Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Calendar>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  args: {}
}
