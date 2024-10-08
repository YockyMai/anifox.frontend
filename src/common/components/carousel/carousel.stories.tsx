import type { Meta, StoryObj } from '@storybook/react'

import Carousel from './carousel'

const meta = {
  title: 'Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Carousel>

export default meta

type Story = StoryObj<typeof meta>

const SlidesDemo = [
  'https://shikimori.one/system/screenshots/original/677f5392fcd69e525cd53c820e502907e3177745.jpg?1652290582',
  'https://shikimori.one/system/screenshots/original/658977f5f3980c8e0d7190a73a5426a5f830aa20.jpg?1652290582',
  'https://shikimori.one/system/screenshots/original/658977f5f3980c8e0d7190a73a5426a5f830aa20.jpg?1652290582',
  'https://shikimori.one/system/screenshots/original/658977f5f3980c8e0d7190a73a5426a5f830aa20.jpg?1652290582',
  'https://shikimori.one/system/screenshots/original/658977f5f3980c8e0d7190a73a5426a5f830aa20.jpg?1652290582'
].map((src) => (
  <img
    key={src}
    alt='slide'
    style={{
      width: '100%',
      borderRadius: '1em',
      height: 250,
      objectFit: 'cover'
    }}
    src={src}
  />
))

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  args: {
    slides: SlidesDemo.map((content) => ({ content }))
  }
}

export const SlideOnWell: Story = {
  args: {
    slides: SlidesDemo.map((content) => ({ content })),
    slideOnWheel: true
  }
}

export const Autoplay: Story = {
  args: {
    slides: SlidesDemo.map((content) => ({ content })),
    autoplay: {
      enable: true
    },
    loop: true
  }
}

export const MoreSlidesInViewport: Story = {
  args: {
    slides: SlidesDemo.map((content) => ({ content, size: '33.33%' }))
  }
}

export const DifferentSlideSizes: Story = {
  args: {
    slides: [
      {
        content: SlidesDemo[0],
        size: '30%'
      },
      {
        content: SlidesDemo[1],
        size: '70%'
      },
      {
        content: SlidesDemo[2],
        size: 400
      },
      {
        content: SlidesDemo[3],
        size: 300
      },
      {
        content: SlidesDemo[4],
        size: '50%'
      }
    ],
    align: 'end'
  }
}
