import { Button, Input, ScreenSection, toast } from '@anifox/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'

import { useChangePasswordMutation } from '@/graphql/generated/output'
import { ROUTES } from '@/screens/pages.routes'

import { settingsChangePasswordSchema } from './settings-change-password.schema'

export const SettingsChangePassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(settingsChangePasswordSchema),
    defaultValues: { currentPassword: '', newPassword: '' }
  })

  const [changePasswordMutation, { loading: changePasswordMutationLoading }] =
    useChangePasswordMutation()

  const handleChangePasswordSubmit = handleSubmit(async (fields) => {
    const toastId = toast.loading('Смена пароля...')

    try {
      await changePasswordMutation({
        variables: {
          currentPassword: fields.currentPassword,
          newPassword: fields.newPassword
        }
      })

      toast.update(toastId, {
        render: 'Пароль успешно изменен',
        type: 'success',
        isLoading: false,
        autoClose: 3000
      })

      reset()
    } catch {
      toast.update(toastId, {
        render: 'Неверный текущий пароль',
        type: 'error',
        isLoading: false,
        autoClose: 3000
      })

      setError('root', { message: 'Неверный текущий пароль' })
    }
  })

  return (
    <ScreenSection
      title='Смена пароля'
      description='Будте внимательны при установке нового пароля, чтобы не забыть его снова.'
    >
      <div className='flex flex-col gap-y-3'>
        <Input
          {...register('currentPassword')}
          isPassword
          variant='filled'
          label='Текущий пароль'
          error={errors.currentPassword?.message}
        />
        <Input
          {...register('newPassword')}
          isPassword
          variant='filled'
          label='Новый пароль'
          error={errors.newPassword?.message}
        />
        <div className='flex items-center gap-x-1.5'>
          <p className='text-sm'>Не помните текущий пароль? Попробуйте</p>
          <Link to={ROUTES.RESET_PASSWORD} className='text-sm text-orange-300'>
            восстановить пароль
          </Link>
        </div>

        {errors.root?.message && (
          <p className='text-sm text-red-300'>{errors.root?.message}</p>
        )}

        <Button
          isLoading={changePasswordMutationLoading}
          onClick={handleChangePasswordSubmit}
        >
          Сменить пароль
        </Button>
      </div>
    </ScreenSection>
  )
}
