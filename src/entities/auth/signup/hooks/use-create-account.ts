import cookies from 'cookie'
import dayjs from 'dayjs'
import { useAtomValue } from 'jotai'
import { jwtDecode } from 'jwt-decode'
import { useEffect } from 'react'

import { COOKIES } from '@/common/const'
import { $signupAtoms } from '@/entities/auth/signup'
import { $viewer } from '@/entities/viewer'
import { User } from '@/entities/viewer/atoms/user.interface'
import { api } from '@/services/api'

export const useCreateAccount = (
  onSuccess: () => void,
  onError: () => void
) => {
  const birthday = useAtomValue($signupAtoms.birthday)
  const email = useAtomValue($signupAtoms.email)
  const login = useAtomValue($signupAtoms.login)
  const password = useAtomValue($signupAtoms.password)

  useEffect(() => {
    const signup = async () => {
      try {
        await api.signup({
          email,
          login,
          password,
          birthday: dayjs(birthday ?? new Date()).format('YYYY-MM-DD')
        })

        await api.login({
          user_identifier: email,
          password
        })

        // TODO: как будет запрос /me сделать нормально
        const accessToken = cookies.parse(document.cookie)[
          COOKIES.ACCESS_TOKEN_KEY
        ]

        const user: User = jwtDecode(accessToken)

        $viewer.actions.setViewer(user)

        onSuccess()
      } catch (e) {
        onError()
      }
    }

    signup()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
