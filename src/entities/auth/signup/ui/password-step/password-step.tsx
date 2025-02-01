'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { useSetAtom } from 'jotai'
import { useForm } from 'react-hook-form'

import { Input } from '@/common/components'
import { UIVariants } from '@/common/types/ui-variants'

import { $signupAtoms } from '../../atoms'
import { useStepsActions } from '../../hooks'
import { StepContainer } from '../step-container'
import { passwordSchema } from './password-step.schema'

export const PasswordStep = () => {
  const setPassword = useSetAtom($signupAtoms.password)

  const { incrementStep, decrementStep } = useStepsActions()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(passwordSchema)
  })

  return (
    <StepContainer
      title='🔒 Введите желаемый пароль'
      prevButton={{ label: 'Назад', onClick: decrementStep }}
      nextButton={{
        label: 'Далее',
        onClick: handleSubmit((fields) => {
          setPassword(fields.password)
          incrementStep()
        })
      }}
    >
      <Input
        {...register('password')}
        error={errors.password?.message}
        autoFocus
        label='Пароль'
        variant={UIVariants.FILLED}
        placeholder='********'
        type='password'
      />

      <p className='step-container__description'>
        Есть два самых важных правила: <br />
        посмотреть анимешку перед сном и<br />
        не забывать пароль
      </p>
    </StepContainer>
  )
}
