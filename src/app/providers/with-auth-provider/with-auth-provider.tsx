import cookie from 'cookie'
import { jwtDecode } from 'jwt-decode'
import { ReactNode, useEffect } from 'react'

import { COOKIES } from '@/common/const'
import { $viewer, User } from '@/entities/viewer'

export const WithAuthProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const accessToken = cookie.parse(document.cookie)[COOKIES.ACCESS_TOKEN_KEY]

    if (accessToken) {
      // TODO: как будет запрос /me, запрашивать пользователя по токену
      const user: User = jwtDecode(accessToken)

      if (user) {
        $viewer.actions.setViewer(user)
      }
    }
  }, [])

  return children
}
