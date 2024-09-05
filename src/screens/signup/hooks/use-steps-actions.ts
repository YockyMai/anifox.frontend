import { useSetAtom } from 'jotai'

import { $signupAtoms } from '@/screens/signup/atoms'

export const useStepsActions = () => {
  const setStep = useSetAtom($signupAtoms.step)

  const incrementStep = () => {
    setStep((prev) => prev + 1)
  }

  const decrementStep = () => {
    setStep((prev) => prev - 1)
  }

  return {
    incrementStep,
    decrementStep
  }
}
