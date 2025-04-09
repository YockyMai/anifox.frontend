import { Button, Input, UnstyledButton } from '@anifox/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import { IconLogin } from '@tabler/icons-react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'

import { UISizes } from '@/common/types/ui-sizes'
import { UIVariants } from '@/common/types/ui-variants'
import { ROUTES } from '@/screens/pages.routes'

import { AuthWithExternal } from '../../auth-with-external/auth-with-external'
import { useLogin } from '../hooks'
import { LoginFormProps, LoginSchema } from './login-form.interface'
import { loginSchema } from './login-form.schema'

export const LoginForm = ({
  onSignupClick,
  onLoginSuccess
}: LoginFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({ resolver: yupResolver(loginSchema) })

  const { login, error, isLoading } = useLogin(onLoginSuccess)

  const onSubmit = (fields: LoginSchema) => {
    login(fields)
  }

  return (
    <div className='w-full max-w-[500px] rounded-xl bg-slate-50 p-12 dark:bg-slate-800'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className='mb-7 text-center text-lg font-bold text-black dark:text-white'>
          Вход в аккаунт ANIFOX
        </p>

        <div className='flex flex-col gap-3'>
          <Input
            label='Логин или email'
            error={errors.user_identifier?.message}
            placeholder='example@some.com'
            variant={UIVariants.FILLED}
            {...register('user_identifier')}
          />

          <Input
            label='Пароль'
            error={errors.password?.message}
            placeholder='Пароль'
            type='password'
            rightIcon
            variant={UIVariants.FILLED}
            {...register('password')}
          />
        </div>

        <div className='mx-auto mt-10 w-fit'>
          <Button
            isLoading={isLoading}
            size={UISizes.SM}
            radius={UISizes.XXL}
            icon={<IconLogin />}
            type='submit'
          >
            Войти
          </Button>
        </div>

        {error && <p className='text-center text-sm text-red-400'>{error}</p>}

        <p className='mt-1 text-center text-sm'>
          Еще нет аккаунта?{' '}
          {onSignupClick ? (
            <UnstyledButton onClick={onSignupClick} className='text-orange-300'>
              Создать аккаунт
            </UnstyledButton>
          ) : (
            <Link className='text-orange-300' to={ROUTES.SIGN_UP}>
              Создать аккаунт
            </Link>
          )}
        </p>
      </form>

      <div className='mt-3 w-full'>
        <AuthWithExternal />
      </div>
    </div>
  )
}
