import { ProgressBar } from '@anifox/ui'
import { AnimatePresence } from 'framer-motion'
import { useAtomValue } from 'jotai'

import { UISizes } from '@/common/types/ui-sizes'

import { $signupAtoms } from '../atoms'
import { STEPS, TOTAL_STEPS } from '../atoms/signup.const'
import { BirthdayStep } from './birthday-step'
import { CreateAccountStep } from './create-account-step'
import { EmailStep } from './email-step'
import { ErrorStep } from './error-step'
import { LoginStep } from './login-step'
import { PasswordStep } from './password-step'
import './signup-form.css'
import { SignupFormProps } from './signup-form.interface'
import { SuccessStep } from './success-step'
import { WelcomeStep } from './welcome-step'

export const SignupForm = ({
  onLoginClick,
  onSignupSuccess
}: SignupFormProps) => {
  const step = useAtomValue($signupAtoms.step)

  return (
    <div className='signup-form'>
      <div className='steps__progress'>
        <ProgressBar
          size={UISizes.MD}
          progress={`${(step / TOTAL_STEPS) * 100}%`}
        />
      </div>

      <AnimatePresence mode='wait' initial={false}>
        {step === STEPS.WELCOME && <WelcomeStep onLoginClick={onLoginClick} />}
        {step === STEPS.EMAIL && <EmailStep />}
        {step === STEPS.LOGIN && <LoginStep />}
        {step === STEPS.BIRTHDAY && <BirthdayStep />}
        {step === STEPS.PASSWORD && <PasswordStep />}
        {step === STEPS.CREATE_ACCOUNT && <CreateAccountStep />}
        {step === STEPS.ERROR && <ErrorStep />}
        {step === STEPS.SUCCESS && <SuccessStep />}
      </AnimatePresence>
    </div>
  )
}
