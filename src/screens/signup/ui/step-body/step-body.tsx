import { Button, UIColors, UISizes } from '@anifox/ui'
import { motion } from 'framer-motion'
import { useAtom } from 'jotai'
import React from 'react'

import { $signupAtoms } from '../../atoms'
import { TOTAL_STEPS } from '../../atoms/signup.const'
import {
  stepBodyAnimate,
  stepBodyExit,
  stepBodyInitial
} from './step-body.animations'
import './step-body.css'
import { StepBodyProps } from './step-body.interface'

export const StepBody = ({
  nextButton,
  prevButton,
  title,
  footer,
  children
}: StepBodyProps) => {
  const [step, setStep] = useAtom($signupAtoms.step)

  const decrementStep = () => {
    setStep((prev) => prev - 1)
  }

  const incrementStep = () => {
    setStep((prev) => prev + 1)
  }

  return (
    <motion.div
      initial={stepBodyInitial}
      animate={stepBodyAnimate}
      exit={stepBodyExit}
      className='step-body'
    >
      {title && <p className='step-body__title'>{title}</p>}

      <div className='step-body__content'>{children}</div>

      <div>
        <div className='step-body__buttons'>
          {step > 1 && prevButton && (
            <Button
              onClick={decrementStep}
              disabled={!prevButton.isValid}
              size={UISizes.SM}
              color={UIColors.RED}
              radius={UISizes.XXL}
            >
              {prevButton.label}
            </Button>
          )}
          {step < TOTAL_STEPS && (
            <Button
              onClick={incrementStep}
              disabled={!nextButton.isValid}
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
