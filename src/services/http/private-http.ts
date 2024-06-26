import { ApiClient } from '@/common/lib/api-client'

// const cookies = require('next/headers').cookies()

export const getPrivateHttp = () =>
  new ApiClient({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      // Authorization: `Bearer ${cookies.get(ACCESS_TOKEN_KEY)?.value}`
    }
  })
