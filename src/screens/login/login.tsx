import { useAtomValue } from 'jotai'
import { useNavigate } from 'react-router'

import { LoginForm } from '@/entities/auth/login/ui'
import { $userAtoms } from '@/entities/viewer/atoms'
import { User } from '@/entities/viewer/atoms/user.interface'

import { ROUTES } from '../pages.routes'
import './login.css'
import { LoginMetadata } from './login.metadata'

export const LoginScreen = () => {
  const navigate = useNavigate()

  const onLoginSuccess = (user: User) => {
    navigate(ROUTES.PROFILE.ROOT.replace(':login', user.preferred_username))
  }

  return (
    <>
      <LoginMetadata />
      <div className='login-container'>
        <div className='login'>
          <h1 className='login__title'>Вход в аккаунт ANIFOX</h1>
          <LoginForm onLoginSuccess={onLoginSuccess} />
        </div>
      </div>
    </>
  )
}
