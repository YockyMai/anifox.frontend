import type { Meta, StoryObj } from '@storybook/react'
import { IconAlertCircle } from '@tabler/icons-react'

import { Alert } from './alert'

const meta = {
  title: 'Alert',
  component: Alert,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

const title = 'Error'
const children =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe.'

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  args: {
    icon: <IconAlertCircle />,
    title,
    children
  }
}

export const Light: Story = {
  args: {
    icon: <IconAlertCircle />,
    title,
    children,
    variant: 'light',
    color: 'orange'
  }
}

export const Filled: Story = {
  args: {
    icon: <IconAlertCircle />,
    title,
    children,
    variant: 'filled',
    color: 'orange'
  }
}

export const Outline: Story = {
  args: {
    icon: <IconAlertCircle />,
    title,
    children,
    variant: 'outline',
    color: 'orange'
  }
}

export const WithCloseButton: Story = {
  args: {
    icon: <IconAlertCircle />,
    title,
    children,
    withCloseButton: true
  }
}
