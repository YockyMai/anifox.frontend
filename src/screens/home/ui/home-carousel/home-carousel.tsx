'use client'

import React from 'react'
import { useInView } from 'react-intersection-observer'

import { Carousel } from '@/common/components'
import { useComingOutAnimeQuery } from '@/services/queries'
import { useToggleHeaderOpacity } from '@/widgets/header'

import { HomeCarouselSlide } from './home-carousel-slide'

export const HomeCarousel = () => {
  const { data } = useComingOutAnimeQuery()

  const { ref, inView } = useInView()

  useToggleHeaderOpacity(inView)

  return (
    <div ref={ref}>
      <Carousel
        slideOnWheel
        autoplay={{
          enable: true
        }}
        loop
        slides={data!.map((anime) => ({
          content: <HomeCarouselSlide anime={anime} />,
          size: '100%'
        }))}
        slideSpacing={0}
      />
    </div>
  )
}
