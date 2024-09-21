import type { Meta, StoryObj } from '@storybook/react'

import { AnifoxLogo } from './anifox-logo'

const meta = {
  title: 'Anifox logo',
  component: AnifoxLogo,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AnifoxLogo>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {}
