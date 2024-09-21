import type { Meta, StoryObj } from '@storybook/react'

import { UIAnimations } from '@/common/types/ui-animations'

import { Transition } from './transition'

const meta = {
  title: 'Transition',
  component: Transition,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Transition>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  args: {
    mounded: true,
    children: (
      <div
        style={{
          backgroundColor: 'rgb(var(--color-background))',
          borderRadius: '1em',
          padding: '5px 10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <p>Mounted</p>
      </div>
    ),
    animation: UIAnimations.FADE
  }
}
