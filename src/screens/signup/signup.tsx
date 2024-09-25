import { SignupForm } from '@/entities/auth/signup'

import './signup.css'

export const SignupScreen = () => {
  return (
    <div className='signup-container'>
      <div className='signup'>
        <h1 className='signup__title'>Регистрация аккаунта</h1>
        <SignupForm />
      </div>
    </div>
  )
}
