import { Button, Calendar, HoverCard } from '@anifox/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import dayjs from 'dayjs'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { StepContainer } from '../../../../../common/components/step-container'
import { $signupAtoms } from '../../atoms'
import { useStepsActions } from '../../hooks'
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
      <HoverCard
        unstyled
        triggerClassName='mx-auto'
        trigger={
          <div className='mx-auto'>
            <Button>
              {birthday
                ? dayjs(birthday).format('DD.MM.YYYY')
                : 'Выберите дату'}
            </Button>
          </div>
        }
      >
        <Calendar
          maxDate={new Date()}
          value={birthday}
          onChange={(date) => {
            setBirthday(date as Date)
            setValue('birthday', date as Date)
          }}
        />
      </HoverCard>

      <p className='mt-7 text-center text-sm'>
        Зная вашу дату рождения, мы можем подобрать для вас подходящие аниме.
        Этот шаг не обязателен и вы можете пропустить его.
      </p>
    </StepContainer>
  )
}
