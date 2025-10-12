import { useSetAtom } from 'jotai'

import { UIColors } from '@/common/types/ui-colors'

import { StepContainer } from '../../../../../common/components/step-container'
import { $signupAtoms } from '../../atoms'
import { STEPS } from '../../atoms/signup.const'
import { useResetSignupForm } from '../../hooks'

export const ErrorStep = () => {
  const resetForm = useResetSignupForm()

  const setStep = useSetAtom($signupAtoms.step)

  return (
    <StepContainer
      prevButton={{
        label: 'Попробовать снова',
        onClick: () => setStep(STEPS.CREATE_ACCOUNT),
        color: UIColors.ORANGE
      }}
      nextButton={{
        label: 'Пройти регистрацию заново',
        onClick: resetForm,
        color: UIColors.RED
      }}
      title='❌ Ошибка при создании аккаунта'
    >
      <p className='text-center'>
        На нашем сервере произошла ошибочка :( Попробуйте повторить процесс
        создания аккаунта заново.
      </p>
    </StepContainer>
  )
}
