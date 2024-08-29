import Link from 'next/link'
import React from 'react'

import { ROUTES } from '@/screens/pages.routes'

import { StepBody } from '../../step-body'

export const WelcomeStep = () => {
  return (
    <StepBody
      footer={
        <p className='mt-1 text-center text-sm'>
          Уже есть аккаунт?{' '}
          <Link className='text-orange-300' href={ROUTES.LOGIN}>
            Вход
          </Link>
        </p>
      }
      nextButton={{ label: 'Создать аккаунт', isValid: true }}
      title='🎉 Добро пожаловать в ANIFOX'
    >
      <p className='text-center'>
        Мы очень рады видеть вас на нашей платформе ANIFOX :) после авторизации
        вы сможете вести свои списки аниме, добавлять понравившиеся тайтлы в
        избранное и многое другое, желаем вам приятного просмотра 😊
      </p>
    </StepBody>
  )
}
