import { Input } from '@anifox/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { UIVariants } from '@/common/types/ui-variants'
import { api } from '@/services/api'

import { $signupAtoms } from '../../atoms'
import { useStepsActions } from '../../hooks'
import { StepContainer } from '../step-container'
import { loginSchema } from './login-step.schema'

export const LoginStep = () => {
  const [isLoginChecking, setIsLoginChecking] = useState(false)
  const [login, setLogin] = useAtom($signupAtoms.login)

  const { incrementStep, decrementStep } = useStepsActions()

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors }
  } = useForm({ resolver: yupResolver(loginSchema), defaultValues: { login } })

  useEffect(() => {
    reset({ login })
  }, [login, reset])

  const handleLoginSubmit = handleSubmit(async (fields) => {
    setIsLoginChecking(true)
    try {
      await api.checkLogin(fields.login)

      setLogin(fields.login)
      incrementStep()
    } catch {
      setError('login', { message: 'Такой логин уже существует' })
    } finally {
      setIsLoginChecking(false)
    }
  })

  return (
    <StepContainer
      title='🔑 Введите ваш Логин'
      prevButton={{ label: 'Назад', onClick: decrementStep }}
      nextButton={{
        label: 'Далее',
        onClick: handleLoginSubmit,
        isLoading: isLoginChecking
      }}
    >
      <Input
        {...register('login')}
        error={errors.login?.message}
        label='Логин'
        placeholder='kaneki_ken'
        variant={UIVariants.FILLED}
      />
      <p className='step-container__description'>
        Логин будет отображаться в ссылке вашего профиля, а также, его можно
        использовать вместо email, для входа в аккаунт ANIFOX
      </p>
    </StepContainer>
  )
}
