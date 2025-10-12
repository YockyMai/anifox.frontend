import { Input, UIVariants } from '@anifox/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { StepContainer } from '@/common/components'
import { emailSchema } from '@/entities/auth/signup/ui/email-step/email-step.schema'
import { useRequestPasswordResetMutation } from '@/graphql/generated/output'

import { $resetPasswordForm } from '../../store/reset-password-form.store'

export const EmailStep = () => {
  const email = $resetPasswordForm.selectors.email()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(emailSchema),
    defaultValues: {
      email
    }
  })

  const [requestPasswordResetMutation, { loading }] =
    useRequestPasswordResetMutation()

  const handleResetPasswordSubmit = handleSubmit(async (fields) => {
    try {
      await requestPasswordResetMutation({
        variables: {
          email: fields.email
        }
      })

      $resetPasswordForm.actions.setEmail(fields.email)
      $resetPasswordForm.actions.incrementStep()
    } catch {
      setError('root', {
        message: 'Ошибка при отправке кода'
      })
    }
  })

  return (
    <StepContainer
      nextButton={{
        label: 'Отправить код восстановления',
        onClick: handleResetPasswordSubmit,
        isLoading: loading
      }}
      title='💌 Введите email, на который нужно прислать код восстановления'
    >
      <Input
        {...register('email')}
        variant={UIVariants.FILLED}
        placeholder='ghoul@gmail.com'
        label='Email'
        error={errors.email?.message ?? errors.root?.message}
      />

      <p className='text-sm'>
        Код восстановления придет на эту почту, проверьте папку <b>спам</b>,
        если не найдете сообщение.
      </p>
    </StepContainer>
  )
}
