import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { SelectOption } from '../select/select.interface'
import { MultiSelect } from './multi-select'

const meta = {
  title: 'MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof MultiSelect>

export default meta

type Story = StoryObj<typeof MultiSelect>

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
    const [value, setValue] = useState<SelectOption[]>()

    return (
      <div style={{ width: 400 }}>
        <MultiSelect
          {...args}
          label='Выбор'
          values={value}
          onValuesChange={(value) => setValue(value)}
          options={options}
          placeholder='Select an multi anime'
        />
      </div>
    )
  }
}
