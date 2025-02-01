'use client'

import { useAtomValue } from 'jotai'
import Confetti from 'react-confetti'

import { $userAtoms } from '@/entities/user/atoms'
import { useRouter } from '@/i18n/routing'
import { ROUTES } from '@/screens/pages.routes'

import { useResetSignupForm } from '../../hooks'
import { StepContainer } from '../step-container'

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
            // router.replace(ROUTES.PROFILE.ROOT.replace('login', user.login))
            router.replace(ROUTES.HOME)
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
