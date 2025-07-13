import axios from 'axios'

import { LOCAL_STORAGE } from '@/common/const'
import { $viewer } from '@/entities/viewer'

import { QUERIES_WITHOUT_HEADERS } from './http.const'

export const http = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API_URL
})

http.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN_KEY)

  const canAttachHeaders = QUERIES_WITHOUT_HEADERS.some(
    (path) => !(config.url ?? '').includes(path)
  )

  if (accessToken && canAttachHeaders) {
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
        const refreshToken = localStorage.getItem(
          LOCAL_STORAGE.REFRESH_TOKEN_KEY
        )

        if (!refreshToken) return

        await http.get('/auth/refreshToken', {
          params: { refreshToken },
          headers: {}
        })

        return http.request(error.config)
      } catch {
        $viewer.actions.logout()
      }
    }

    return Promise.reject(error)
  }
)
