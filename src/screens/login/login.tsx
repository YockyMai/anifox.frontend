'use client'

import { useRouter } from 'next/navigation'

import { LoginForm } from '@/entities/auth/login/ui'

import { ROUTES } from '../pages.routes'
import './login.css'

export const LoginScreen = () => {
  const router = useRouter()

  const onLoginSuccess = () => {
    router.replace(ROUTES.HOME)
  }

  return (
    <div className='login-container'>
      <div className='login'>
        <h1 className='login__title'>Вход в аккаунт ANIFOX</h1>
        <LoginForm onLoginSuccess={onLoginSuccess} />
      </div>
    </div>
  )
}
