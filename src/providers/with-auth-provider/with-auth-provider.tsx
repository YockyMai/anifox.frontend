import { jwtDecode } from 'jwt-decode'
import { cookies } from 'next/headers'
import { ReactNode } from 'react'

import { COOKIES } from '@/common/const'
import { User } from '@/entities/user/atoms/user.interface'

import { UserAtomsHydrator } from './user-atoms-hydrator'

export const WithAuthProvider = async ({
  children
}: {
  children: ReactNode
}) => {
  const cookiesStorage = await cookies()

  const accessToken = cookiesStorage.get(COOKIES.ACCESS_TOKEN_KEY)?.value

  let user: User | null = null

  if (accessToken) {
    // TODO: как будет запрос /me, запрашивать пользователя по токену
    user = jwtDecode(accessToken)
  }

  return <UserAtomsHydrator user={user}>{children}</UserAtomsHydrator>
}
