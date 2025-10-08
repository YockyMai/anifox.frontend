import { Button, Input } from '@anifox/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import { IconAt } from '@tabler/icons-react'
import { useForm } from 'react-hook-form'

import { loginSchema } from '@/entities/auth/signup/ui/login-step/login-step.schema'
import { $viewer } from '@/entities/viewer'
import {
  useCheckLoginExistLazyQuery,
  useSaveLoginMutation
} from '@/graphql/generated/output'

export const SettingsLogin = () => {
  const viewer = $viewer.selectors.viewer()!

  const [saveLoginMutation, { loading }] = useSaveLoginMutation({
    onCompleted: (data) => {
      $viewer.actions.setLogin(data.saveUser.login)
    }
  })

  const [checkLoginExist, { loading: isLoginChecking }] =
    useCheckLoginExistLazyQuery()

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isDirty }
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { login: viewer.login }
  })

  const handleLoginSubmit = handleSubmit(async (fields) => {
    const { data } = await checkLoginExist({
      variables: {
        login: fields.login
      }
    })

    if (!data?.checkLoginExist) {
      saveLoginMutation({
        variables: {
          login: fields.login
        }
      })
    } else {
      setError('login', { message: 'Такой логин уже существует' })
    }
  })

  return (
    <div>
      <Input
        {...register('login')}
        icon={<IconAt />}
        variant='filled'
        error={errors.login?.message}
      />

      {(isDirty || loading || isLoginChecking) && (
        <div className='mt-3 flex gap-x-3'>
          <Button onClick={() => reset()} color='red'>
            Отмена
          </Button>
          <Button
            isLoading={loading || isLoginChecking}
            onClick={handleLoginSubmit}
          >
            Сохранить
          </Button>
        </div>
      )}
    </div>
  )
}
