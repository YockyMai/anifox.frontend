import { ResetPasswordForm } from '@/entities/auth/reset-password-form'

export const ResetPasswordScreen = () => {
  return (
    <div className='mt-32 w-full'>
      <div className='mx-auto max-w-[500px] rounded-lg'>
        <h2 className='my-3'>Форма сброса пароля</h2>

        <ResetPasswordForm />
      </div>
    </div>
  )
}
