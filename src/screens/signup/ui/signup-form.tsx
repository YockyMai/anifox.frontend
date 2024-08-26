'use client'

import { useAtomValue } from 'jotai'

import { $signupAtoms } from '../atoms'
import { EmailStep } from './steps/email-step'
import { LoginStep } from './steps/login-step'

const steps = [<EmailStep key={1} />, <LoginStep key={2} />]

export const SignupForm = () => {
  const step = useAtomValue($signupAtoms.step)

  const currentForm = steps[step]

  return <div>{currentForm}</div>
}
