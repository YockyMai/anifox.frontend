import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Tabs } from './tabs'

const meta = {
  title: 'Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof Tabs>
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  render: () => {
    const [active, setActive] = useState<string>('1')
    return (
      <Tabs
        activeTab={active}
        onChange={(key) => setActive(key)}
        tabs={[
          {
            content: (
              <a className='qwe' key={'1'}>
                Регистрация
              </a>
            ),
            key: '1'
          },
          {
            content: (
              <a className='qwe' key={'2'}>
                Авторизация
              </a>
            ),
            key: '2'
          }
        ]}
      />
    )
  }
}
