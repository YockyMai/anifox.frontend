import { useEffect } from 'react'
import Confetti from 'react-confetti'
import { useNavigate } from 'react-router'

import { $viewer } from '@/entities/viewer'
import { ROUTES } from '@/screens/pages.routes'

import { useResetSignupForm } from '../../hooks'
import { StepContainer } from '../step-container'

export const SuccessStep = () => {
  const resetForm = useResetSignupForm()
  const navigate = useNavigate()

  const viewer = $viewer.selectors.viewer()

  useEffect(() => {
    return () => {
      resetForm()
    }
  }, [])

  return (
    <StepContainer
      nextButton={{
        label: 'Перейти в профиль',
        onClick: () => {
          resetForm()

          if (viewer) {
            navigate(ROUTES.PROFILE.ROOT(viewer.login))
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
