import { useCallback, useEffect, useState } from 'react'

import { EmblaApi } from '../../carousel.interface'
import { UsePrevNextButtonsParams } from './use-prev-next-buttons.interface'

export const usePrevNextButtons = (
  emblaApi: EmblaApi | undefined
): UsePrevNextButtonsParams => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaApi) => {
    setPrevBtnDisabled(!emblaApi!.canScrollPrev())
    setNextBtnDisabled(!emblaApi!.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}
