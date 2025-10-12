import { AnimatePresence } from 'framer-motion'
import React from 'react'

import { $resetPasswordForm } from '../store/reset-password-form.store'
import { EmailStep } from './email-step/email-step'
import { STEPS } from './reset-password-form.const'
import { ResetPasswordStep } from './reset-password-step/reset-password-step'
import { SuccessStep } from './success-step/success-step'

export const ResetPasswordForm = () => {
  const step = $resetPasswordForm.selectors.step()

  return (
    <div className='overflow-hidden rounded-2xl bg-slate-50 drop-shadow-sm dark:bg-slate-800'>
      <div className='relative h-[450px] w-full pb-10'>
        <AnimatePresence mode='wait' initial={false}>
          {step === STEPS.EMAIL && <EmailStep />}
          {step === STEPS.RESET_PASSWORD && <ResetPasswordStep />}
          {step === STEPS.SUCCESS && <SuccessStep />}
        </AnimatePresence>
      </div>
    </div>
  )
}
