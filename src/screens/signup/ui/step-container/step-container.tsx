import { Button } from '@anifox/ui'
import { useAtom, useSetAtom } from 'jotai'
import React from 'react'

import { $signupAtoms } from '../../atoms'
import { StepContainerProps } from './step-container.interface'

export const StepContainer = ({ children }: StepContainerProps) => {
  const [step, setStep] = useAtom($signupAtoms.step)

  const decrementStep = () => {
    setStep((prev) => prev - 1)
  }

  const incrementStep = () => {
    setStep((prev) => prev + 1)
  }

  return (
    <div>
      <div>{children}</div>

      {step > 1 && <Button onClick={decrementStep}>Назад</Button>}
      {step < 4 && <Button onClick={incrementStep}>Далее</Button>}
    </div>
  )
}
