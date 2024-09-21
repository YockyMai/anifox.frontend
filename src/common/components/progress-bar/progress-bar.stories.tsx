import type { Meta, StoryObj } from '@storybook/react'

import { ProgressBar } from './progress-bar'

const meta = {
  title: 'ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ProgressBar>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  render: (args) => {
    return (
      <div style={{ width: 300 }}>
        <ProgressBar {...args} progress={50} />
      </div>
    )
  },
  args: {
    progress: 50
  }
}
