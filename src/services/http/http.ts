import cookie from 'cookie'

import { COOKIES } from '@/common/const'
import { ApiClient } from '@/common/lib/api-client'

export const http = new ApiClient({
  baseUrl: process.env.NEXT_PUBLIC_API_URL
})

http.useRequestInterceptor((request) => {
  const isClient = typeof window !== 'undefined'

  if (isClient) {
    const accessToken = cookie.parse(document.cookie)[COOKIES.ACCESS_TOKEN_KEY]

    if (accessToken) {
      return {
        ...request,
        headers: {
          ...request.headers,
          Authorization: accessToken
        }
      }
    }

    return request
  }

  return request
})
