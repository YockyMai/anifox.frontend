import type { Meta, StoryObj } from '@storybook/react'

import { UnstyledButton } from './unstyled-button'

const meta = {
  title: 'UnstyledButton',
  component: UnstyledButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof UnstyledButton>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  args: {
    children: 'Button'
  }
}
