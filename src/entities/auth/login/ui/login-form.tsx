import { yupResolver } from '@hookform/resolvers/yup'
import { IconLogin } from '@tabler/icons-react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'

import { Button, Input, UnstyledButton } from '@/common/components'
import { UISizes } from '@/common/types/ui-sizes'
import { ROUTES } from '@/screens/pages.routes'

import { useLogin } from '../hooks'
import './login-form.css'
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
    <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
      <p className='login__form__title'>Вход в аккаунт ANIFOX</p>

      <div className='login__form__fields'>
        <Input
          label='Логин или email'
          error={errors.user_identifier?.message}
          placeholder='example@some.com'
          {...register('user_identifier')}
        />

        <Input
          label='Пароль'
          error={errors.password?.message}
          placeholder='Пароль'
          type='password'
          rightIcon
          {...register('password')}
        />
      </div>

      <div className='login__form__button'>
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
  )
}
