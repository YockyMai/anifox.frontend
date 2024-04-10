import axios from 'axios'

import { config } from '@/config'

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from './http.const'
import { publicHttp } from './public-http'

export const privateHttp = axios.create({
  baseURL: config.API_URL
})

privateHttp.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY) || ''

  config.headers.Authorization = `Bearer ${accessToken}`
  return config
})

privateHttp.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      error.config._isRetry = true
      try {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)

        if (!refreshToken) return

        const { data } = await publicHttp.get('/api/auth/refreshToken', {
          params: { refreshToken }
        })
        localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken)
        localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken)

        return publicHttp.request(error.config)
      } catch (e) {
        localStorage.removeItem(REFRESH_TOKEN_KEY)
        localStorage.removeItem(ACCESS_TOKEN_KEY)
      }
    }
  }
)
