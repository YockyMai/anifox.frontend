import axios from 'axios'
import cookie from 'cookie'

import { COOKIES } from '@/common/const'

export const http = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API_URL
})

http.interceptors.request.use((config) => {
  const accessToken = cookie.parse(document.cookie)[COOKIES.ACCESS_TOKEN_KEY]

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      error.config._isRetry = true
      try {
        const refreshToken = cookie.parse(document.cookie)[
          COOKIES.REFRESH_TOKEN_KEY
        ]

        if (!refreshToken) return

        await http.get('/auth/refreshToken', {
          params: { refreshToken }
        })

        return http.request(error.config)
      } catch {
        cookie.serialize(COOKIES.ACCESS_TOKEN_KEY, '', {
          maxAge: -1
        })
        cookie.serialize(COOKIES.REFRESH_TOKEN_KEY, '', {
          maxAge: -1
        })
      }
    }

    return Promise.reject(error)
  }
)
