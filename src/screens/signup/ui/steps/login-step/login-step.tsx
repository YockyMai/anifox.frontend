import { Input } from '@anifox/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAtom } from 'jotai'
import { useForm } from 'react-hook-form'

import { $signupAtoms } from '@/screens/signup/atoms'
import { useStepsActions } from '@/screens/signup/hooks'

import { StepContainer } from '../../step-container'
import { loginSchema } from './login-step.schema'

export const LoginStep = () => {
  const [login, setLogin] = useAtom($signupAtoms.login)

  const { incrementStep, decrementStep } = useStepsActions()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(loginSchema), defaultValues: { login } })

  return (
    <StepContainer
      title='🔑 Введите ваш Логин'
      prevButton={{ label: 'Назад', onClick: decrementStep }}
      nextButton={{
        label: 'Далее',
        onClick: handleSubmit((fields) => {
          setLogin(fields.login)
          incrementStep()
        })
      }}
    >
      <Input
        {...register('login')}
        error={errors.login?.message}
        label='Логин'
        variant='filled'
        placeholder='kaneki_ken'
      />
      <p className='mt-7 text-center text-sm'>
        Логин будет отображаться в ссылке вашего профиля, а также, его можно
        использовать вместо email, для входа в аккаунт ANIFOX
      </p>
    </StepContainer>
  )
}
