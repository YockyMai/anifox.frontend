'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import dayjs from 'dayjs'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Calendar, Tooltip } from '@/common/components'
import { $signupAtoms } from '@/screens/signup/atoms'
import { useStepsActions } from '@/screens/signup/hooks'

import { StepContainer } from '../../step-container'
import { birthdaySchema } from './birthday-step.schema'

export const BirthdayStep = () => {
  const [birthday, setBirthday] = useAtom($signupAtoms.birthday)

  const { incrementStep, decrementStep } = useStepsActions()

  const { setValue, reset, handleSubmit } = useForm({
    resolver: yupResolver(birthdaySchema),
    defaultValues: { birthday }
  })

  useEffect(() => {
    reset({ birthday })
  }, [birthday, reset])

  return (
    <StepContainer
      title='📅 Введите вашу дату рождения'
      prevButton={{ label: 'Назад', onClick: decrementStep }}
      nextButton={{
        label: birthday ? 'Далее' : 'Пропустить',
        onClick: handleSubmit(incrementStep)
      }}
    >
      <Tooltip
        unstyled
        triggerClassName='mx-auto'
        label={
          <Calendar
            maxDate={new Date()}
            value={birthday}
            onChange={(date) => {
              setBirthday(date as Date)
              setValue('birthday', date as Date)
            }}
          />
        }
      >
        <Button>
          {birthday ? dayjs(birthday).format('DD.MM.YYYY') : 'Выберите дату'}
        </Button>
      </Tooltip>

      <p className='mt-7 text-center text-sm'>
        Зная вашу дату рождения, мы можем подобрать для вас подходящие аниме.
        Этот шаг не обязателен и вы можете пропустить его.
      </p>
    </StepContainer>
  )
}
