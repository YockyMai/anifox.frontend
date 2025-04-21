import { useState } from 'react'

import { COOKIES } from '@/common/const'
import { $viewer } from '@/entities/viewer'
import { client } from '@/graphql/client'
import {
  LoginDocument,
  LoginMutation,
  ViewerFragment
} from '@/graphql/generated/output'
import { LoginParams } from '@/services/api/login'

export const useLogin = (
  onSuccess?: (user: ViewerFragment) => void,
  onError?: (e: Error) => void
) => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const login = async (params: LoginParams) => {
    setIsLoading(true)

    try {
      const { data } = await client.mutate<LoginMutation>({
        mutation: LoginDocument
      })

      const { user, tokens } = data!.login

      localStorage.setItem(COOKIES.ACCESS_TOKEN_KEY, tokens.accessToken)
      localStorage.setItem(COOKIES.REFRESH_TOKEN_KEY, tokens.refreshToken)

      $viewer.actions.setViewer(user)

      onSuccess?.(user)
    } catch (e) {
      console.error(e)
      setError('Неверный логин или пароль')
      if (e instanceof Error) {
        onError?.(e)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return {
    login,
    isLoading,
    error
  }
}
