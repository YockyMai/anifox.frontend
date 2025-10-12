import { CodeInput, Input, UIVariants } from '@anifox/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { StepContainer } from '@/common/components'
import { useConfirmPasswordResetMutation } from '@/graphql/generated/output'

import { $resetPasswordForm } from '../../store/reset-password-form.store'
import { resetPasswordSchema } from './reset-password.schema'

export const ResetPasswordStep = () => {
  const email = $resetPasswordForm.selectors.email()

  const [confirmPasswordResetMutation, { loading }] =
    useConfirmPasswordResetMutation()

  const {
    register,
    setValue,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: { code: '', newPassword: '' }
  })

  const handleResetPasswordSubmit = handleSubmit(async (fields) => {
    try {
      await confirmPasswordResetMutation({
        variables: {
          code: fields.code,
          newPassword: fields.newPassword,
          email
        }
      })

      $resetPasswordForm.actions.incrementStep()
    } catch {
      setError('root', { message: 'Неверный код восстановления' })
    }
  })

  return (
    <StepContainer
      nextButton={{
        label: 'Сменить пароль',
        onClick: handleResetPasswordSubmit,
        isLoading: loading
      }}
      title='💌 Введите email, на который нужно прислать код восстановления'
    >
      <div className='flex flex-col gap-y-5'>
        <div>
          <p className='text-sm font-bold'>Код восстановления</p>
          <CodeInput
            length={6}
            onCodeChange={(code) => setValue('code', code)}
          />
          {errors.code?.message && (
            <p className='text-xs text-red-400'>{errors.code?.message}</p>
          )}
        </div>

        <Input
          {...register('newPassword')}
          variant={UIVariants.FILLED}
          placeholder='********'
          label='Новый пароль'
          isPassword
          error={errors.newPassword?.message}
        />
      </div>

      {errors.root?.message && (
        <p className='mt-3 text-center text-sm text-red-400'>
          {errors.root.message}
        </p>
      )}
    </StepContainer>
  )
}
