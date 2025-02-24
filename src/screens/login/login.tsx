import { useNavigate } from 'react-router'

import { LoginForm } from '@/entities/auth/login/ui'
import { User } from '@/entities/viewer'

import { ROUTES } from '../pages.routes'
import { LoginMetadata } from './login.metadata'

export const LoginScreen = () => {
  const navigate = useNavigate()

  const onLoginSuccess = (user: User) => {
    navigate(ROUTES.PROFILE.ROOT.replace(':login', user.preferred_username))
  }

  return (
    <>
      <LoginMetadata />
      <div className='flex h-full w-full items-center justify-center'>
        <div className='w-full max-w-[500px]'>
          <h1 className='pb-12 text-center text-xl font-bold'>
            Вход в аккаунт ANIFOX
          </h1>
          <LoginForm onLoginSuccess={onLoginSuccess} />
        </div>
      </div>
    </>
  )
}
