'use server'

import { ApiClient } from '@/common/lib/api-client'

import { ACCESS_TOKEN_KEY } from './http.const'

const cookies = require('next/headers').cookies()

export const getPrivateHttp = () =>
  new ApiClient({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${cookies.get(ACCESS_TOKEN_KEY)?.value}`
    }
  })
