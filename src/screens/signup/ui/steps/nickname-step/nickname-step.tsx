import { Input } from '@anifox/ui'

import { StepBody } from '../../step-body'

export const NicknameStep = () => {
  return (
    <StepBody
      title='🔑 Введите имя пользователя'
      nextButton={{ label: 'Создать аккаунт', isValid: true }}
      prevButton={{ label: 'Хочу изменить логин', isValid: true }}
    >
      <Input
        label='Имя пользователя'
        variant='filled'
        placeholder='Deny whoo'
      />
      <p className='mt-7 text-center text-sm'>
        Имя пользователя отображается везде, например в отзывах, в комментариях
        и ... Да вообще везде :)
      </p>
    </StepBody>
  )
}
