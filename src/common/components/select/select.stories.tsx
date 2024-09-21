import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Select } from './select'
import { SelectOption } from './select.interface'

const meta = {
  title: 'Select',
  component: Select,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof Select>

const options = [
  { value: 'One Piece', label: 'One Piece' },
  { value: 'Naruto', label: 'Naruto' },
  { value: 'Jujutsu Kaisen', label: 'Jujutsu Kaisen' },
  { value: 'Mob Psycho 100', label: 'Mob Psycho 100' },
  { value: 'One Punch Man', label: 'One Punch Man' }
]

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  render: (args) => {
    const [value, setValue] = useState<SelectOption | null>(null)

    return (
      <Select
        {...args}
        value={value}
        onValueChange={(value) => setValue(value)}
        options={options}
        placeholder='Select an anime'
      />
    )
  }
}
