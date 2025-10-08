import { Badge, Button, Input, ScreenSection } from '@anifox/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'

import { useChangePasswordMutation } from '@/graphql/generated/output'

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

  const [changePasswordMutation, { loading }] = useChangePasswordMutation()

  const handleChangePasswordSubmit = handleSubmit(async (fields) => {
    try {
      await changePasswordMutation({
        variables: {
          currentPassword: fields.currentPassword,
          newPassword: fields.newPassword
        }
      })

      reset()
    } catch {
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
          <Link to={'#'}>
            <Badge variant='light'>восстановить пароль</Badge>
          </Link>
        </div>

        {errors.root?.message && (
          <p className='text-sm text-red-300'>{errors.root?.message}</p>
        )}

        <Button isLoading={loading} onClick={handleChangePasswordSubmit}>
          Сменить пароль
        </Button>
      </div>
    </ScreenSection>
  )
}
