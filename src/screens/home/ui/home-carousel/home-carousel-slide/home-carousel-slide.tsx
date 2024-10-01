import React from 'react'

import { Image } from '@/common/components'

import './home-carousel-slide.css'
import { HomeCarouselSlideProps } from './home-carousel-slide.interface'

export const HomeCarouselSlide = ({ anime }: HomeCarouselSlideProps) => {
  return (
    <div className='home-carousel-slide'>
      <div className='home-carousel-slide__image h-full w-full'>
        <Image
          alt={anime.title}
          className='h-full w-full'
          src={anime.image.cover}
        />
      </div>
      <div>
        <h1>{anime.title}</h1>
      </div>
    </div>
  )
}
