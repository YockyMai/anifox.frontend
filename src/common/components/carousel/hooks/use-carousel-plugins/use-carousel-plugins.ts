import Autoplay from 'embla-carousel-autoplay'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { useMemo } from 'react'

import { UseCarouselPluginsParams } from './use-carousel-plugins.interface'

export const useCarouselPlugins = (params: UseCarouselPluginsParams) => {
  const { slideOnWheel, autoplay } = params

  const plugins = useMemo(
    () => [
      ...(slideOnWheel ? [WheelGesturesPlugin()] : []),
      ...(autoplay?.enable ? [Autoplay(autoplay.options)] : [])
    ],
    [autoplay?.enable, autoplay?.options, slideOnWheel]
  )

  return plugins
}
