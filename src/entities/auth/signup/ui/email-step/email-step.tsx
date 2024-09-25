'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '@/common/components'

import { $signupAtoms } from '../../atoms'
import { useStepsActions } from '../../hooks'
import { StepContainer } from '../step-container'
import { emailSchema } from './email-step.schema'

export const EmailStep = () => {
  const [email, setEmail] = useAtom($signupAtoms.email)

  const { incrementStep, decrementStep } = useStepsActions()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(emailSchema), defaultValues: { email } })

  useEffect(() => {
    reset({ email })
  }, [email, reset])

  return (
    <StepContainer
      title='💌 Введите ваш email'
      prevButton={{ label: 'Назад', onClick: decrementStep }}
      nextButton={{
        label: 'Далее',
        onClick: handleSubmit((fields) => {
          setEmail(fields.email)
          incrementStep()
        })
      }}
    >
      <Input
        {...register('email')}
        error={errors.email?.message}
        autoFocus
        label='Email'
        placeholder='ghoul@gmail.com'
      />

      <p className='step-container__description'>
        Email будет необходим при входе в аккаунт ANIFOX
      </p>
    </StepContainer>
  )
}
