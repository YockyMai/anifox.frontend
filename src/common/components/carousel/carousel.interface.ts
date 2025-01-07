import { type UseEmblaCarouselType } from 'embla-carousel-react'
import { ReactNode } from 'react'

import { Breakpoints } from '@/common/types/breakpoints'
import { UIAlign } from '@/common/types/ui-aligns'

export type CarouselProps = {
  slides: (Slide | ReactNode)[]
  loop?: boolean
  align?: UIAlign
  slideOnWheel?: boolean
  dragFree?: boolean
  slidesToScroll?: number
  slideSpacing?: string | number
  autoplay?: CarouselAutoplayOptions
  hideButtons?: boolean
  nextButton?: ReactNode
  prevButton?: ReactNode
  onInitEmbla?: (emblaApi: EmblaApi) => void
  breakpoints?: CarouselBreakpoints
  hideDisabledButton?: boolean
  controlsSpacing?: number
}

export type CarouselBreakpoints = {
  [key in Breakpoints]?: number
}

export type EmblaApi = UseEmblaCarouselType[1]

export type Slide = {
  content: ReactNode
  size?: number | `${number}%`
}

export type CarouselAutoplayOptions = {
  enable?: boolean
  options?: {
    delay?: number
    jump?: boolean
    stopOnInteraction?: boolean
    stopOnMouseEnter?: boolean
    stopOnFocusIn?: boolean
  }
}
