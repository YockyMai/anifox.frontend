'use client'

import { Input } from '@anifox/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAtom } from 'jotai'
import { useForm } from 'react-hook-form'

import { $signupAtoms } from '@/screens/signup/atoms'
import { useStepsActions } from '@/screens/signup/hooks'

import { StepContainer } from '../../step-container'
import { nicknameSchema } from './nickname-step.schema'

export const NicknameStep = () => {
  const [nickname, setNickname] = useAtom($signupAtoms.nickname)

  const { incrementStep, decrementStep } = useStepsActions()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(nicknameSchema),
    defaultValues: { nickname }
  })

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
      <p className='mt-7 text-center text-sm'>
        Имя пользователя отображается везде, например в отзывах, в комментариях
        и ... Да вообще везде :)
      </p>
    </StepContainer>
  )
}
