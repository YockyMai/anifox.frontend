import { yupResolver } from '@hookform/resolvers/yup'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '@/common/components'
import { UIVariants } from '@/common/types/ui-variants'
import { api } from '@/services/api'

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
    setError,
    formState: { errors }
  } = useForm({ resolver: yupResolver(emailSchema), defaultValues: { email } })

  useEffect(() => {
    reset({ email })
  }, [email, reset])

  const handleSubmitEmail = handleSubmit(async (fields) => {
    try {
      await api.checkEmail(fields.email)

      setEmail(fields.email)
      incrementStep()
    } catch {
      setError('email', { message: 'Такой email уже существует' })
    }
  })

  return (
    <StepContainer
      title='💌 Введите ваш email'
      prevButton={{ label: 'Назад', onClick: decrementStep }}
      nextButton={{
        label: 'Далее',
        onClick: handleSubmitEmail
      }}
    >
      <Input
        {...register('email')}
        error={errors.email?.message}
        autoFocus
        label='Email'
        placeholder='ghoul@gmail.com'
        variant={UIVariants.FILLED}
      />

      <p className='step-container__description'>
        Email будет необходим при входе в аккаунт ANIFOX
      </p>
    </StepContainer>
  )
}
