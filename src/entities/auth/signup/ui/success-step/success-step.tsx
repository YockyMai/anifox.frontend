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

  return (
    <StepContainer
      nextButton={{
        label: 'Перейти в профиль',
        onClick: () => {
          if (viewer) {
            navigate(ROUTES.PROFILE.ROOT.replace(':login', viewer.login))
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
