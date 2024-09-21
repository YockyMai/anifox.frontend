import type { Meta, StoryObj } from '@storybook/react'

import { Image } from './image'

const meta = {
  title: 'Image',
  component: Image,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Image>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  args: {
    src: 'https://cdn.anifox.club/images/anime/Medium/vrata-shteina/ca9b62f556a0f09c01c7ce9542f34c1f.png',
    width: 230,
    height: 300,
    fit: 'cover'
  }
}
