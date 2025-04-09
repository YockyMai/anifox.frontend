import { Carousel } from '@anifox/ui'
import { useMemo } from 'react'
import { useInView } from 'react-intersection-observer'

import { useComingOutAnimeQuery } from '@/graphql/queries'
import { useToggleHeaderOpacity } from '@/widgets/header'

import { HomeCarouselSlide } from './home-carousel-slide'
import './home-carousel.css'

export const HomeCarousel = () => {
  const { data = [] } = useComingOutAnimeQuery()
  const { ref, inView } = useInView()

  useToggleHeaderOpacity(inView)

  const filteredData = useMemo(
    () => data.filter((anime) => anime.image.cover),
    [data]
  )

  const autoplayOptions = useMemo(
    () => ({
      enable: true,
      options: {
        stopOnMouseEnter: true
      }
    }),
    []
  )

  return (
    <div className='home-carousel' ref={ref}>
      <Carousel
        autoplay={autoplayOptions}
        loop
        slides={filteredData.map((anime) => ({
          content: <HomeCarouselSlide anime={anime} />,
          size: '100%'
        }))}
        slideSpacing={0}
      />

      <div className='home-carousel__shadow-transition' />
    </div>
  )
}
