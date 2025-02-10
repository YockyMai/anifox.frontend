import { SignupForm } from '@/entities/auth/signup'

import './signup.css'
import { SignupMetadata } from './signup.metadata'

export const SignupScreen = () => {
  return (
    <>
      <SignupMetadata />
      <div className='signup-container'>
        <div className='signup'>
          <h1 className='signup__title'>Регистрация аккаунта</h1>
          <SignupForm />
        </div>
      </div>
    </>
  )
}
