import { motion } from 'framer-motion'

import { Button } from '@/common/components'
import { UIColors } from '@/common/types/ui-colors'
import { UISizes } from '@/common/types/ui-sizes'

import {
  stepContainerAnimate,
  stepContainerExit,
  stepContainerInitial
} from './step-container.animations'
import './step-container.css'
import { StepContainerProps } from './step-container.interface'

export const StepContainer = ({
  nextButton,
  prevButton,
  title,
  footer,
  children
}: StepContainerProps) => {
  return (
    <motion.div
      initial={stepContainerInitial}
      animate={stepContainerAnimate}
      exit={stepContainerExit}
      className='step-container'
    >
      {title && <p className='step-container__title'>{title}</p>}

      <div className='step-container__content'>{children}</div>

      <div>
        <div className='step-container__buttons'>
          {prevButton && (
            <Button
              isLoading={prevButton.isLoading}
              onClick={prevButton.onClick}
              size={UISizes.SM}
              color={UIColors.RED}
              radius={UISizes.XXL}
            >
              {prevButton.label}
            </Button>
          )}

          {nextButton && (
            <Button
              isLoading={nextButton.isLoading}
              onClick={nextButton.onClick}
              size={UISizes.SM}
              color={UIColors.ORANGE}
              radius={UISizes.XXL}
            >
              {nextButton.label}
            </Button>
          )}
        </div>

        {footer && footer}
      </div>
    </motion.div>
  )
}
