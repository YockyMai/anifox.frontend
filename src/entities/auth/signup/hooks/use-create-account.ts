import cookies from 'cookie'
import { useAtomValue, useSetAtom } from 'jotai'
import { jwtDecode } from 'jwt-decode'
import { useEffect } from 'react'

import { COOKIES } from '@/common/const'
import { $signupAtoms } from '@/entities/auth/signup'
import { $userAtoms } from '@/entities/user/atoms'
import { User } from '@/entities/user/atoms/user.interface'
import { api } from '@/services/api'

export const UseCreateAccount = (
  onSuccess: () => void,
  onError: () => void
) => {
  const setUser = useSetAtom($userAtoms.user)

  const birthday = useAtomValue($signupAtoms.birthday)
  const email = useAtomValue($signupAtoms.email)
  const login = useAtomValue($signupAtoms.login)
  const nickname = useAtomValue($signupAtoms.nickname)
  const password = useAtomValue($signupAtoms.password)

  useEffect(() => {
    const signup = async () => {
      try {
        await api.signup({
          email,
          login,
          nickname,
          password
        })

        await api.login({
          user_identifier: email,
          password
        })

        // TODO: как будет запрос /me сделать нормально
        const accessToken = cookies.parse(document.cookie)[
          COOKIES.ACCESS_TOKEN_KEY
        ]

        const user = jwtDecode(accessToken) as User

        setUser(user)

        onSuccess()
      } catch (e) {
        onError()
      }
    }

    signup()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
