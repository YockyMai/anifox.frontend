'use client'

import { useAtomValue } from 'jotai'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import Confetti from 'react-confetti'

import { $userAtoms } from '@/entities/user/atoms'
import { ROUTES } from '@/screens/pages.routes'
import { useResetSignupForm } from '@/screens/signup/hooks'

import { StepContainer } from '../../step-container'

export const SuccessStep = () => {
  const resetForm = useResetSignupForm()
  const router = useRouter()

  const user = useAtomValue($userAtoms.user)

  return (
    <StepContainer
      nextButton={{
        label: 'Перейти в профиль',
        onClick: () => {
          if (user) {
            router.replace(ROUTES.PROFILE.ROOT.replace('login', user.login))
            resetForm()
          }
        }
      }}
      title='✅ Аккаунт успешно создан'
    >
      <Confetti recycle={false} numberOfPieces={1500} opacity={0.5} />

      <p className='text-center'>
        Поздравялем, теперь у вас есть свой собственный аккаунт и доступ к его
        преимуществам.
      </p>
    </StepContainer>
  )
}
