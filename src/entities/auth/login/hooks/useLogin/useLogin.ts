import cookies from 'cookie'
import { useSetAtom } from 'jotai'
import { jwtDecode } from 'jwt-decode'
import { useState } from 'react'

import { COOKIES } from '@/common/const'
import { $userAtoms } from '@/entities/user/atoms'
import { User } from '@/entities/user/atoms/user.interface'
import { api } from '@/services/api'
import { LoginParams } from '@/services/api/login'

export const useLogin = (
  onSuccess?: (user: User) => void,
  onError?: (e: Error) => void
) => {
  const setUser = useSetAtom($userAtoms.user)

  const [isLoading, setIsLoading] = useState(false)

  const login = async (params: LoginParams) => {
    setIsLoading(true)

    try {
      await api.login(params)

      const accessToken = cookies.parse(document.cookie)[
        COOKIES.ACCESS_TOKEN_KEY
      ]

      const user = jwtDecode(accessToken) as User

      setUser(user)

      onSuccess?.(user)
    } catch (e) {
      if (e instanceof Error) {
        onError?.(e)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return {
    login,
    isLoading
  }
}
