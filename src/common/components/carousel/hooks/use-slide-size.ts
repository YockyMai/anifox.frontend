'use client'

import { useAtomValue } from 'jotai'
import { useEffect, useState } from 'react'

import { BREAKPOINTS } from '@/common/const/breakpoints'
import { $windowAtoms } from '@/common/store/window'

import { CarouselBreakpoints } from '../carousel.interface'

const calcSlideSize = (
  windowWidth: number,
  breakpoints?: CarouselBreakpoints
) => {
  if (!breakpoints) {
    return null
  }

  let visibleSlidesCount: number | null = null

  if (windowWidth <= BREAKPOINTS.SM && breakpoints?.SM) {
    visibleSlidesCount = breakpoints.SM
  }

  if (windowWidth > BREAKPOINTS.SM && breakpoints?.MD) {
    visibleSlidesCount = breakpoints.MD
  }

  if (windowWidth > BREAKPOINTS.MD && breakpoints?.LG) {
    visibleSlidesCount = breakpoints.LG
  }

  if (windowWidth > BREAKPOINTS.LG && breakpoints?.XL) {
    visibleSlidesCount = breakpoints.XL
  }

  if (windowWidth > BREAKPOINTS.XL && breakpoints?.XXL) {
    visibleSlidesCount = breakpoints.XXL
  }

  return visibleSlidesCount ? `${(100 / visibleSlidesCount).toFixed(2)}%` : null
}

export const useSlideSize = (breakpoints?: CarouselBreakpoints) => {
  const windowWidth = useAtomValue($windowAtoms.windowWidth)

  const [slideSize, setSlideSize] = useState<string | null>(
    calcSlideSize(windowWidth, breakpoints)
  )

  useEffect(() => {
    setSlideSize(calcSlideSize(windowWidth, breakpoints))
  }, [breakpoints, windowWidth])

  return slideSize
}
