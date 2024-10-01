'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { CSSProperties, useEffect } from 'react'

import { UiAligns } from '@/common/types/ui-aligns'

import './carousel.css'
import { CarouselProps } from './carousel.interface'
import { CarouselControls } from './components'
import { useCarouselPlugins } from './hooks'
import { calcSlideSize, calcSlideSpacing } from './lib'

export const Carousel = ({
  slides,
  loop,
  slideOnWheel,
  dragFree,
  slidesToScroll = 1,
  autoplay,
  slideSpacing,
  hideButtons,
  nextButton,
  prevButton,
  align = UiAligns.CENTER,
  onInitEmbla
}: CarouselProps) => {
  const normalizedSlides = slides.map((slide) => {
    if (typeof slide === 'object' && slide && 'content' in slide) {
      return slide
    }

    return { content: slide }
  })

  const plugins = useCarouselPlugins({ slideOnWheel, autoplay })

  const [carouselRef, emblaApi] = useEmblaCarousel(
    {
      active: true,
      loop,
      align,
      dragFree,
      slidesToScroll
    },
    plugins
  )

  useEffect(() => {
    if (emblaApi) {
      onInitEmbla?.(emblaApi)
    }
  }, [emblaApi, onInitEmbla])

  return (
    <div
      className='carousel'
      style={
        {
          ...(typeof slideSpacing !== undefined && {
            '--slide-spacing': calcSlideSpacing(slideSpacing!)
          })
        } as CSSProperties
      }
    >
      <div className='carousel__viewport' ref={carouselRef}>
        <div className='carousel__container'>
          {normalizedSlides.map((slide, index) => (
            <div
              className='carousel__slide'
              style={{
                ...(slide.size && {
                  flex: `0 0 ${calcSlideSize(slide.size)}`
                })
              }}
              key={index}
            >
              {slide.content}
            </div>
          ))}
        </div>
      </div>

      <CarouselControls
        hideButtons={hideButtons}
        nextButton={nextButton}
        prevButton={prevButton}
        emblaApi={emblaApi}
      />
    </div>
  )
}
