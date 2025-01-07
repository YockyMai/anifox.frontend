'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { CSSProperties, memo, useEffect } from 'react'

import { UiAligns } from '@/common/types/ui-aligns'

import './carousel.css'
import { CarouselProps } from './carousel.interface'
import { CarouselControls } from './components'
import { useCarouselPlugins, useSlideSize } from './hooks'
import { calcSlideSize, calcSlideSpacing } from './lib'

const Carousel = ({
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
  controlsSpacing,
  hideDisabledButton = true,
  align = UiAligns.CENTER,
  breakpoints,
  onInitEmbla
}: CarouselProps) => {
  const slideSize = useSlideSize(breakpoints)

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
                ...((slide.size || slideSize) && {
                  flex: `0 0 ${slideSize ? slideSize : calcSlideSize(slide.size)}`
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
        controlsSpacing={controlsSpacing}
        hideDisabledButton={hideDisabledButton}
        hideButtons={hideButtons}
        nextButton={nextButton}
        prevButton={prevButton}
        emblaApi={emblaApi}
      />
    </div>
  )
}

export default memo(Carousel)
