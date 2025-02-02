import { useNavigate } from 'react-router-dom'

import { LoginForm } from '@/entities/auth/login/ui'

import { ROUTES } from '../pages.routes'
import './login.css'

export const LoginScreen = () => {
  const navigate = useNavigate()

  const onLoginSuccess = () => {
    navigate(ROUTES.HOME)
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
