import { SignupForm } from '@/entities/auth/signup'

import { SignupMetadata } from './signup.metadata'

export const SignupScreen = () => {
  return (
    <>
      <SignupMetadata />
      <div className='flex h-full items-center justify-center'>
        <div className='w-full max-w-[500px]'>
          <h1 className='pb-12 text-center text-xl font-bold'>
            Регистрация аккаунта
          </h1>
          <SignupForm />
        </div>
      </div>
    </>
  )
}
