import { ReactNode, useEffect } from 'react'

import { COOKIES } from '@/common/const'
import { $viewer } from '@/entities/viewer'
import { client } from '@/graphql/client'
import {
  RefreshTokensDocument,
  RefreshTokensMutation,
  RefreshTokensMutationVariables,
  ViewerDocument,
  ViewerQuery,
  ViewerQueryVariables
} from '@/graphql/generated/output'

export const WithAuthProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const initUser = async () => {
      const accessToken = localStorage.getItem(COOKIES.ACCESS_TOKEN_KEY)

      if (accessToken) {
        const { data } = await client.query<ViewerQuery, ViewerQueryVariables>({
          query: ViewerDocument
        })

        const viewer = data.viewer

        if (viewer) {
          $viewer.actions.setViewer(viewer)
        }
      } else {
        const refreshToken = localStorage.getItem(COOKIES.REFRESH_TOKEN_KEY)

        if (refreshToken) {
          const { data } = await client.mutate<
            RefreshTokensMutation,
            RefreshTokensMutationVariables
          >({
            mutation: RefreshTokensDocument,
            variables: {
              refreshToken
            }
          })

          if (data) {
            const { accessToken, refreshToken } = data.refreshTokens
            localStorage.setItem(COOKIES.ACCESS_TOKEN_KEY, accessToken)
            localStorage.setItem(COOKIES.REFRESH_TOKEN_KEY, refreshToken)

            const response = await client.query<
              ViewerQuery,
              ViewerQueryVariables
            >({
              query: ViewerDocument
            })

            const viewer = response.data.viewer

            if (viewer) {
              $viewer.actions.setViewer(viewer)
            }
          }
        }
      }
    }

    initUser()
  }, [])

  return children
}
