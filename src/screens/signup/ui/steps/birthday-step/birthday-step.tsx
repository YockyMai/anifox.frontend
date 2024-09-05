import { Button, Calendar, Tooltip } from '@anifox/ui'
import { useAtom } from 'jotai'

import { $signupAtoms } from '@/screens/signup/atoms'
import { useStepsActions } from '@/screens/signup/hooks'

import { StepContainer } from '../../step-container'

export const BirthdayStep = () => {
  const [birthday, setBirthday] = useAtom($signupAtoms.birthday)

  const { incrementStep, decrementStep } = useStepsActions()

  return (
    <StepContainer
      title='📅 Введите вашу дату рождения'
      prevButton={{ label: 'Назад', onClick: decrementStep }}
      nextButton={{
        label: 'Далее'
      }}
    >
      <Tooltip
        unstyled
        triggerClassName='mx-auto'
        label={
          <Calendar
            maxDate={new Date()}
            value={birthday}
            onChange={(date) => setBirthday(date as Date)}
          />
        }
      >
        <Button>Открыть календарь</Button>
      </Tooltip>

      <p className='mt-7 text-center text-sm'>
        Зная вашу дату рождения, мы можем подобрать для вас подходящие аниме.
        Этот шаг не обязателен и вы можете пропустить его.
      </p>
    </StepContainer>
  )
}
