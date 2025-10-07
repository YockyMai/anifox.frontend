import { Loader } from '@anifox/ui'
import { useSetAtom } from 'jotai'

import { UISizes } from '@/common/types/ui-sizes'

import { $signupAtoms } from '../../atoms'
import { STEPS } from '../../atoms/signup.const'
import { useCreateAccount } from '../../hooks/use-create-account'
import { StepContainer } from '../step-container'
import './create-account-step.css'

export const CreateAccountStep = () => {
  const setStep = useSetAtom($signupAtoms.step)

  const onSuccess = () => {
    setStep(STEPS.SUCCESS)
  }

  const onError = () => {
    setStep(STEPS.ERROR)
  }

  useCreateAccount(onSuccess, onError)

  return (
    <StepContainer title='⏳ Загрузка'>
      <div className='create-account-step'>
        <div className='w-fit'>
          <Loader size={UISizes.SM} />
        </div>
        <p>Создание аккаунта</p>
      </div>
    </StepContainer>
  )
}
