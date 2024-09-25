'use client'

import { useSetAtom } from 'jotai'
import React from 'react'

import { Loader } from '@/common/components'
import { UISizes } from '@/common/types/ui-sizes'

import { $signupAtoms } from '../../atoms'
import { STEPS } from '../../atoms/signup.const'
import { UseCreateAccount } from '../../hooks/use-create-account'
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

  UseCreateAccount(onSuccess, onError)

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
