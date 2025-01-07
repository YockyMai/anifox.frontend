import { ReactNode } from 'react'

import { EmblaApi } from '../../carousel.interface'

export type CarouselControlsProps = {
  emblaApi: EmblaApi
  hideButtons?: boolean
  nextButton?: ReactNode
  prevButton?: ReactNode
  hideDisabledButton: boolean
  controlsSpacing?: number
}
