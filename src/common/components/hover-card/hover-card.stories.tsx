import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import HoverCard from './hover-card'

const meta = {
  title: 'HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof HoverCard>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  args: {
    children: <p>content :)</p>,
    trigger: <Button>Trigger</Button>
  }
}
