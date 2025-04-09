import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

import { COOKIES } from '@/common/const'
import { client } from '@/graphql/client'
import { UserTokens } from '@/graphql/generated/output'
import VIEWER_QUERY from '@/graphql/queries/viewer.graphql'

export const AuthExternalScreen = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    const auth = async () => {
      const tokensString = searchParams.get('tokens')
      const userString = searchParams.get('user')

      if (tokensString && userString) {
        const tokens: Omit<UserTokens, '__typename'> = JSON.parse(tokensString)

        localStorage.setItem(COOKIES.ACCESS_TOKEN_KEY, tokens.accessToken)
        localStorage.setItem(COOKIES.REFRESH_TOKEN_KEY, tokens.refreshToken)

        await client.query({ query: VIEWER_QUERY })

        navigate('/')
      }
    }

    auth()
  }, [searchParams])

  return null
}
