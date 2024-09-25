'use client'

import { LoginForm } from '@/entities/auth/login/ui'

import './login.css'

export const LoginScreen = () => {
  return (
    <div className='login-container'>
      <div className='login'>
        <h1 className='login__title'>Вход в аккаунт ANIFOX</h1>
        <LoginForm />
      </div>
    </div>
  )
}
