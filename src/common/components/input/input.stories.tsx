import type { Meta, StoryObj } from '@storybook/react'
import { IconSearch } from '@tabler/icons-react'

import { Input } from './input'

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  args: {
    label: 'Поиск',
    placeholder: 'Введите что нибудь',
    icon: <IconSearch />,
    error: 'Минимальная длина - 1 символ'
  }
}

export const Filled: Story = {
  args: {
    label: 'Filled input',
    placeholder: 'Введите что нибудь',
    variant: 'filled',
    icon: <IconSearch />
  }
}

export const WithLabel: Story = {
  args: {
    label: 'Search',
    placeholder: 'type something',
    icon: <IconSearch />
  }
}

export const LeftIcon: Story = {
  args: {
    placeholder: 'AniFox search',
    icon: <IconSearch />
  }
}

export const RightIcon: Story = {
  args: {
    placeholder: 'AniFox search',
    rightIcon: <IconSearch />
  }
}

export const Disabled: Story = {
  args: {
    placeholder: 'Anifox search',
    icon: <IconSearch />,
    disabled: true
  }
}

export const WithError: Story = {
  args: {
    placeholder: 'Anifox search',
    icon: <IconSearch />,
    error: 'Invalid value'
  }
}
