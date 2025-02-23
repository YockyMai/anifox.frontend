import cookies from 'cookie'
import { jwtDecode } from 'jwt-decode'
import { useState } from 'react'

import { COOKIES } from '@/common/const'
import { $viewer, User } from '@/entities/viewer'
import { api } from '@/services/api'
import { LoginParams } from '@/services/api/login'

export const useLogin = (
  onSuccess?: (user: User) => void,
  onError?: (e: Error) => void
) => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const login = async (params: LoginParams) => {
    setIsLoading(true)

    try {
      await api.login(params)

      const accessToken = cookies.parse(document.cookie)[
        COOKIES.ACCESS_TOKEN_KEY
      ]

      const user = jwtDecode(accessToken) as User

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
