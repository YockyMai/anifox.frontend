import type { Meta, StoryObj } from '@storybook/react'

import { LoadingBar } from './loading-bar'

const meta = {
  title: 'LoadingBar',
  component: LoadingBar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof LoadingBar>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  args: {
    width: 200,
    animationDuration: 1
  }
}
