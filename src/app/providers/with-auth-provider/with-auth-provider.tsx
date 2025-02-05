import cookie from 'cookie'
import { jwtDecode } from 'jwt-decode'
import { ReactNode } from 'react'

import { COOKIES } from '@/common/const'
import { User } from '@/entities/user/atoms/user.interface'

import { UserAtomsHydrator } from './user-atoms-hydrator'

export const WithAuthProvider = ({ children }: { children: ReactNode }) => {
  const accessToken = cookie.parse(document.cookie)[COOKIES.ACCESS_TOKEN_KEY]

  let user: User | null = null

  if (accessToken) {
    // TODO: как будет запрос /me, запрашивать пользователя по токену
    user = jwtDecode(accessToken)
  }

  return <UserAtomsHydrator user={user}>{children}</UserAtomsHydrator>
}
