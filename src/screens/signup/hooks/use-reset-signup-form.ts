import { useSetAtom } from 'jotai'

import { $signupAtoms } from '../atoms'
import { STEPS } from '../atoms/signup.const'

export const useResetSignupForm = () => {
  const setStep = useSetAtom($signupAtoms.step)
  const setBirthday = useSetAtom($signupAtoms.birthday)
  const setEmail = useSetAtom($signupAtoms.email)
  const setLogin = useSetAtom($signupAtoms.login)
  const setNickname = useSetAtom($signupAtoms.nickname)

  const resetForm = () => {
    setStep(STEPS.WELCOME)
    setBirthday(undefined)
    setEmail('')
    setLogin('')
    setNickname('')
  }

  return resetForm
}
