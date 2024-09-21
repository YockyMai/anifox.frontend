import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Modal } from './modal'

const meta = {
  title: 'Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  args: {
    title: 'Modal title',
    description:
      'Descriptive Text is a text which says what a person or a thing is like.',
    children: <div></div>,
    trigger: <Button>Open modal</Button>
  }
}
