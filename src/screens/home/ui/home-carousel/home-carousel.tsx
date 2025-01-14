'use client'

import { useEffect, useMemo, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { Carousel } from '@/common/components'
import { EmblaApi, Slide } from '@/common/components/carousel'
import { AnimeCardWide } from '@/entities/anime/anime-card'
import { useComingOutAnimeQuery } from '@/services/queries'
import { useToggleHeaderOpacity } from '@/widgets/header'

import { HomeCarouselSlide } from './home-carousel-slide'
import './home-carousel.css'

export const HomeCarousel = () => {
  const { data } = useComingOutAnimeQuery()

  const { ref, inView } = useInView()

  const [currentSlide, setCurrentSlide] = useState(0)

  const [carouselApi, setCarouselApi] = useState<EmblaApi | null>(null)
  const [thumbsCarouselApi, setThumbsCarouselApi] = useState<EmblaApi | null>(
    null
  )

  useEffect(() => {
    const onChangeSlide = (carousel: EmblaApi) => {
      setCurrentSlide(carousel!.selectedScrollSnap())
    }

    if (carouselApi) {
      carouselApi.on('select', onChangeSlide)
    }

    return () => {
      carouselApi?.off('select', onChangeSlide)
    }
  }, [carouselApi])

  useEffect(() => {
    if (thumbsCarouselApi && carouselApi) {
      carouselApi.scrollTo(currentSlide)
      thumbsCarouselApi.scrollTo(currentSlide)
    }
  }, [carouselApi, currentSlide, thumbsCarouselApi])

  useToggleHeaderOpacity(inView)

  const filteredData = useMemo(
    () => data?.filter((anime) => anime.image.cover) ?? [],
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

  const carouselSlides = useMemo<Slide[]>(
    () =>
      filteredData.map((anime) => ({
        content: <HomeCarouselSlide anime={anime} />,
        size: '100%'
      })),
    [filteredData]
  )

  const thumbs = useMemo(
    () =>
      filteredData.map((anime, index) => ({
        content: (
          <div className='mx-1' onClick={() => setCurrentSlide(index)}>
            <AnimeCardWide isActive={index === currentSlide} anime={anime} />
          </div>
        ),
        size: 220
      })),
    [filteredData, currentSlide]
  )

  return (
    <div className='home-carousel' ref={ref}>
      <Carousel
        autoplay={autoplayOptions}
        loop
        slides={carouselSlides}
        slideSpacing={0}
        onInitEmbla={setCarouselApi}
      />
      <div className='home-carousel__thumbs'>
        <Carousel
          hideButtons
          dragFree
          slides={thumbs}
          onInitEmbla={setThumbsCarouselApi}
          slideSpacing={0}
        />
      </div>

      <div className='home-carousel__shadow-transition' />
    </div>
  )
}
