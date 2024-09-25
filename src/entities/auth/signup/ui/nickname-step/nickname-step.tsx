'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '@/common/components'

import { $signupAtoms } from '../../atoms'
import { useStepsActions } from '../../hooks'
import { StepContainer } from '../step-container'
import { nicknameSchema } from './nickname-step.schema'

export const NicknameStep = () => {
  const [nickname, setNickname] = useAtom($signupAtoms.nickname)

  const { incrementStep, decrementStep } = useStepsActions()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(nicknameSchema),
    defaultValues: { nickname }
  })

  useEffect(() => {
    reset({ nickname })
  }, [nickname, reset])

  return (
    <StepContainer
      title='🔠 Введите желаемый никнейм'
      prevButton={{ label: 'Хочу изменить логин', onClick: decrementStep }}
      nextButton={{
        label: 'Создать аккаунт',
        onClick: handleSubmit((fields) => {
          setNickname(fields.nickname)
          incrementStep()
        })
      }}
    >
      <Input
        {...register('nickname')}
        error={errors.nickname?.message}
        label='Имя пользователя'
        variant='filled'
        placeholder='Твой никнейм'
      />
      <p className='step-container__description'>
        Имя пользователя отображается везде, например в отзывах, в комментариях
        и ... Да вообще везде :)
      </p>
    </StepContainer>
  )
}
