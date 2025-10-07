import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

import { LOCAL_STORAGE } from '@/common/const'
import { client } from '@/graphql/client'
import { UserTokens, ViewerDocument } from '@/graphql/generated/output'

export const AuthExternalScreen = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    const auth = async () => {
      const tokensString = searchParams.get('tokens')
      const userString = searchParams.get('user')

      if (tokensString && userString) {
        const tokens: Omit<UserTokens, '__typename'> = JSON.parse(tokensString)

        localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN_KEY, tokens.accessToken)
        localStorage.setItem(
          LOCAL_STORAGE.REFRESH_TOKEN_KEY,
          tokens.refreshToken
        )

        await client.query({ query: ViewerDocument })

        navigate('/')
      }
    }

    auth()
  }, [searchParams, navigate])

  return null
}
