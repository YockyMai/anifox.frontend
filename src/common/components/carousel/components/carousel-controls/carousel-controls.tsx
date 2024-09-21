import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { clsx } from 'clsx'

import { UnstyledButton } from '@/common/components'

import { usePrevNextButtons } from '../../hooks'
import './carousel-controls.css'
import { CarouselControlsProps } from './carousel-controls.interface'

export const CarouselControls = ({
  emblaApi,
  hideButtons,
  nextButton,
  prevButton
}: CarouselControlsProps) => {
  const {
    nextBtnDisabled,
    prevBtnDisabled,
    onNextButtonClick,
    onPrevButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className='carousel__controls'>
      {!hideButtons && (
        <>
          <UnstyledButton
            className={clsx(
              'carousel__controls__prev-next-button',
              'carousel__controls__prev-next-button_prev',
              prevBtnDisabled && 'carousel__controls__prev-next-button_disabled'
            )}
            onClick={onPrevButtonClick}
          >
            {prevButton ? prevButton : <IconChevronLeft />}
          </UnstyledButton>

          <UnstyledButton
            className={clsx(
              'carousel__controls__prev-next-button',
              'carousel__controls__prev-next-button_next',
              nextBtnDisabled && 'carousel__controls__prev-next-button_disabled'
            )}
            onClick={onNextButtonClick}
          >
            {nextButton ? nextButton : <IconChevronRight />}
          </UnstyledButton>
        </>
      )}
    </div>
  )
}
