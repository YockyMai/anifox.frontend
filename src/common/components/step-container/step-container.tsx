import { Button } from '@anifox/ui'
import { motion } from 'framer-motion'

import { UIColors } from '@/common/types/ui-colors'
import { UISizes } from '@/common/types/ui-sizes'

import {
  stepContainerAnimate,
  stepContainerExit,
  stepContainerInitial
} from './step-container.animations'
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
      className='flex h-full w-full flex-col justify-between px-12 pt-12'
    >
      {title && (
        <p className='pb-10 text-center text-lg font-bold text-black dark:text-white'>
          {title}
        </p>
      )}

      <div>{children}</div>

      <div>
        <div className='flex justify-center gap-x-3 pt-12'>
          {prevButton && (
            <Button
              isLoading={prevButton.isLoading}
              onClick={prevButton.onClick}
              size={UISizes.SM}
              color={prevButton.color ?? UIColors.RED}
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
              color={nextButton.color ?? UIColors.ORANGE}
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
