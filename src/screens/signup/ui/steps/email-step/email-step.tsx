import { Input } from '@anifox/ui'
import React from 'react'

import { StepBody } from '../../step-body'

export const EmailStep = () => {
  return (
    <StepBody
      title='💌 Введите ваш email'
      nextButton={{ label: 'К логину', isValid: true }}
      prevButton={{ label: 'Обратно к приветствию :)', isValid: true }}
    >
      <Input label='Email' variant='filled' placeholder='ghoul@gmail.com' />
      <p className='mt-7 text-center text-sm'>
        Email будет необходим при входе в аккаунт ANIFOX
      </p>
    </StepBody>
  )
}
