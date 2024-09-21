'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Input } from '@/common/components'

import './login.css'
import { LoginSchema } from './login.interface'
import { loginSchema } from './login.shema'

export const LoginScreen = () => {
  const [passwordInputType, setPasswordInputType] = useState('password')

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({ resolver: yupResolver(loginSchema) })

  const onSubmit = (fields: LoginSchema) => {}

  return (
    <div className='login'>
      <div className='login__content'>
        <h1>Вход в аккаунт ANIFOX</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            error={errors.user_identifier?.message}
            placeholder='Логин или email'
            {...register('user_identifier')}
          />

          <Input
            error={errors.password?.message}
            placeholder='Пароль'
            type='password'
            rightIcon
            {...register('password')}
          />

          <Button type='submit'>Войти</Button>
        </form>
      </div>
    </div>
  )
}
