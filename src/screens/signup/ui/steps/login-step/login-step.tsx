import { Input } from '@anifox/ui'

import { StepBody } from '../../step-body'

export const LoginStep = () => {
  return (
    <StepBody
      title='🔑 Введите ваш Логин'
      nextButton={{ label: 'К имени пользователю', isValid: true }}
      prevButton={{ label: 'Обрато к email', isValid: true }}
    >
      <Input label='Логин' variant='filled' placeholder='Логин писать тут :)' />
      <p className='mt-7 text-center text-sm'>
        Логин будет отображатся в ссылке вашего профиля, а также его можно
        использовать вместо email для входа в аккаунт ANIFOX
      </p>
    </StepBody>
  )
}
