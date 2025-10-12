import Confetti from 'react-confetti'
import { useNavigate } from 'react-router'

import { StepContainer } from '@/common/components'
import { ROUTES } from '@/screens/pages.routes'

export const SuccessStep = () => {
  const navigate = useNavigate()
  return (
    <StepContainer
      nextButton={{
        label: 'Войти в аккаунт',
        onClick: () => navigate(ROUTES.LOGIN, { replace: true })
      }}
      title='🎉 Пароль успешно восстановлен'
    >
      <Confetti recycle={false} numberOfPieces={1500} opacity={0.5} />

      <p className='text-center'>Поздравялем, пароль успешно восстановлен.</p>
    </StepContainer>
  )
}
