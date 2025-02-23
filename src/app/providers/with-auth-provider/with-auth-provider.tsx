import cookie from 'cookie'
import { jwtDecode } from 'jwt-decode'
import { ReactNode, useEffect } from 'react'

import { COOKIES } from '@/common/const'
import { $viewer, User } from '@/entities/viewer'
import { http } from '@/services/http'

export const WithAuthProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const initUser = async () => {
      const accessToken = cookie.parse(document.cookie)[
        COOKIES.ACCESS_TOKEN_KEY
      ]

      if (accessToken) {
        // TODO: как будет запрос /me, запрашивать пользователя по токену
        const user: User = jwtDecode(accessToken)

        if (user) {
          $viewer.actions.setViewer(user)
        }
      } else {
        const refreshToken = cookie.parse(document.cookie)[
          COOKIES.REFRESH_TOKEN_KEY
        ]

        if (refreshToken) {
          await http.get('/auth/refreshToken', {
            params: { refreshToken },
            headers: {}
          })

          const accessToken = cookie.parse(document.cookie)[
            COOKIES.ACCESS_TOKEN_KEY
          ]

          const user: User = jwtDecode(accessToken)

          if (user) {
            $viewer.actions.setViewer(user)
          }
        }
      }
    }

    initUser()
  }, [])

  return children
}
