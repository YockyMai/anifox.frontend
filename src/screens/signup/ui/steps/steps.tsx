import { ProgressBar, UISizes } from '@anifox/ui'
import { AnimatePresence } from 'framer-motion'
import { useAtomValue } from 'jotai'
import React from 'react'

import { $signupAtoms } from '../../atoms'
import { TOTAL_STEPS } from '../../atoms/signup.const'
import { EmailStep } from './email-step'
import { LoginStep } from './login-step'
import { NicknameStep } from './nickname-step'
import './steps.css'
import { WelcomeStep } from './welcome-step'

export const Steps = () => {
  const step = useAtomValue($signupAtoms.step)

  return (
    <div className='steps'>
      <p className='steps__title'>Создание аккаунта</p>

      <div className='steps__content'>
        <div className='steps__progress'>
          <ProgressBar
            size={UISizes.MD}
            progress={`${(step / TOTAL_STEPS) * 100}%`}
          />
        </div>

        <AnimatePresence mode='wait' initial={false}>
          {step === 1 && <WelcomeStep />}
          {step === 2 && <EmailStep />}
          {step === 3 && <LoginStep />}
          {step === 4 && <NicknameStep />}
        </AnimatePresence>
      </div>
    </div>
  )
}
