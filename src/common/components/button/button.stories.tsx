import { Meta, StoryObj } from '@storybook/react'
import { IconBrandAuth0 } from '@tabler/icons-react'

import { UISizes } from '@/common/types/ui-sizes'

import { Button } from './button'

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  args: {
    children: 'Watching',
    withRipple: true,
    size: UISizes.MD,
    radius: UISizes.MD,
    className: 'test'
  }
}

export const LeftIcon: Story = {
  args: {
    children: 'Registration',
    withRipple: true,
    size: UISizes.MD,
    radius: UISizes.MD,
    icon: <IconBrandAuth0 />
  }
}

export const RightIcon: Story = {
  args: {
    children: 'Registration',
    withRipple: true,
    size: UISizes.MD,
    radius: UISizes.MD,
    rightIcon: <IconBrandAuth0 />
  }
}

export const DisabledButton: Story = {
  args: {
    children: 'Disabled button',
    withRipple: true,
    disabled: true,
    title: 'disable'
  }
}
